begin;

-- 2. Import users
create function create_user(
    id uuid,
    email text
) returns void
as
$$
INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at,
                        confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at,
                        email_change_token_new, email_change, email_change_sent_at, last_sign_in_at,
                        raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone,
                        phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at,
                        email_change_token_current, email_change_confirm_status)
VALUES ('00000000-0000-0000-0000-000000000000', create_user.id, '', 'authenticated',
        create_user.email, '$2a$10$vBZp2SU5Rxedb1DLsaBtP.9bu3PeNDhy9dQ7ye9ikIuw66gM4gedi',
        '2021-12-03 10:17:09.205161 +00:00', null, '', null, '', null, '', '', null,
        '2021-12-03 10:17:09.209968 +00:00', '{
    "provider": "email"
  }', 'null', false, '2021-12-03 10:17:09.201674 +00:00', '2021-12-03 10:17:09.201674 +00:00', null, null, '', '', null,
        '', 0);

$$ language sql volatile;


with unique_users as (
    select email, ademe_user_id
    from old.ademeutilisateur au
    group by ademe_user_id, email
)
select *
from unique_users,
    lateral create_user(ademe_user_id::uuid, email);

-- 3 dcp
with unique_dcp as (
    select ademe_user_id, ademeutilisateur.email, nom, prenom, ademeutilisateur.created_at, modified_at
    from old.ademeutilisateur
             join auth.users u on ademe_user_id::uuid = u.id
)
insert
into dcp (user_id, nom, prenom, email, created_at, modified_at)
select ademe_user_id::uuid, nom, prenom, email, created_at, modified_at
from unique_dcp;

-- 4 droits
with unique_droits as (
    select od.ademe_user_id,
           od.epci_id as old_epci_id,
           od.created_at
    from old.utilisateurdroits od
             join auth.users u on od.ademe_user_id::uuid = u.id
    where latest
      and ecriture
),
     new_epcis as (
         select oe.uid as old_epci_id, e.id as new_id
         from epci e
                  join old.epci oe on e.siren = oe.siren
         where latest
     )
insert
into private_utilisateur_droit (user_id, collectivite_id, role_name, active, created_at)
select d.ademe_user_id::uuid, e.new_id, 'referent', true, d.created_at
from unique_droits d
         join new_epcis e on e.old_epci_id = d.old_epci_id;


-- 5 statuts
with partitioned_old_statuts as (
    select *, row_number() over (partition by (action_id, epci_id) order by modified_at desc) as row_number
    from old.actionstatus
    where (action_id like 'citergie__%' or action_id like 'economie_circulaire__%')
),
     old_statuts as (
         select *
         from partitioned_old_statuts
         where row_number = 1
     ),

     converted_action_id as (
         select id,
                replace(replace(action_id, 'citergie__', 'cae_'), 'economie_circulaire__', 'eci_') as converted
         from old_statuts
     ),

     converted_statut as (
         select id,
                case
                    when avancement like 'non_concerne%' then 'non_renseigne'
                    when avancement = 'en_cours' then 'programme'
                    when avancement = 'programmee' then 'programme'
                    when avancement = 'faite' then 'fait'
                    when avancement = 'pas_faite' then 'pas_fait'
                    else 'non_renseigne'
                    end                         as avancement,
                avancement like 'non_concerne%' as concerne
         from old_statuts
     ),
     new_epcis as (
         select oe.uid as old_epci_id, e.id as new_id
         from epci e
                  join old.epci oe on e.siren = oe.siren
         where latest
     )
insert
into action_statut (collectivite_id, action_id, avancement, concerne, modified_by, modified_at)
select ne.new_id    as collectivite_id,
       ca.converted as action_id,
       cs.avancement::avancement,
       cs.concerne,
       ud
           .user_id,
       os
           .modified_at
from old_statuts os
         join new_epcis ne on os.epci_id = ne.old_epci_id
         join converted_statut cs on cs.id = os.id
         join converted_action_id ca on os.id = ca.id
         join lateral (
    select * from private_utilisateur_droit ) ud on ne.new_id = ud.collectivite_id
where collectivite_id = 1
  and action_id = 'eci_4.3.3.1'
on conflict do nothing;


-- view utils
create view old.new_epci
as
select oe.uid as old_epci_id, e.id as new_id
from epci e
         join old.epci oe on e.siren = oe.siren
where oe.latest;


create or replace view old.new_indicateur_id
as
with all_ids as (
    select indicateur_id
    from old.indicateurresultat
    union
    select indicateur_id
    from old.indicateurobjectif
    union
    select replace(jsonb_array_elements(referentiel_indicateur_ids) :: text, '"', '')::varchar(36) as indicateur_id
    from old.ficheaction
)
select distinct regexp_replace(
                        regexp_replace(
                                regexp_replace(
                                        indicateur_id,
                                    -- third crte
                                        'crte-(\d+).(\d+)', 'crte_\1.\2'
                                    ),
                            -- second eci
                                'eci-(0+)(\d+)', 'eci_\2'
                            ),
                    -- first cae
                    -- todo   'cae-(\d+)([a-z]+)?', 'cae_\1.\2'
                        'cae-(\d+)([a-z]+)?', 'cae_\1\2'
                    )         as new_id,
                indicateur_id as old_id
from all_ids
where indicateur_id like 'eci%'
   or indicateur_id like 'cae%'
;


-- 6 - résultats des indicateurs référentiels
with partitioned_old_indicateur_resultats as (
    select *, row_number() over (partition by (indicateur_id, epci_id, year) order by modified_at desc) as row_number
    from old.indicateurresultat
),
     old_indicateur_resultats as (
         select *
         from partitioned_old_indicateur_resultats
         where row_number = 1
     )
insert
into indicateur_resultat (collectivite_id, indicateur_id, valeur, annee, modified_at)
select ne.new_id  as collectivite_id,
       nii.new_id as indicateur_id,
       oir.value  as valeur,
       oir.year   as annee,
       modified_at

from old_indicateur_resultats oir
         join old.new_indicateur_id nii on oir.indicateur_id = nii.old_id
         join old.new_epci ne on oir.epci_id = ne.old_epci_id
on conflict do nothing
;

-- 7 - objectifs des indicateurs référentiels
with partitioned_old_indicateur_objectifs as (
    select *, row_number() over (partition by (indicateur_id, epci_id, year) order by modified_at desc) as row_number
    from old.indicateurobjectif
),
     old_indicateur_objectifs as (
         select *
         from partitioned_old_indicateur_objectifs
         where row_number = 1
     )
insert
into indicateur_objectif (collectivite_id, indicateur_id, valeur, annee, modified_at)
select ne.new_id  as collectivite_id,
       nii.new_id as indicateur_id,
       oir.value  as valeur,
       oir.year   as annee,
       modified_at

from old_indicateur_objectifs oir
         join old.new_indicateur_id nii on oir.indicateur_id = nii.old_id
         join old.new_epci ne on oir.epci_id = ne.old_epci_id
on conflict do nothing
;

-- 8 - définitions, résultats et objectifs des indicateurs personnalisés
-- a. mapping from old indicateur perso uid to new integer id
create materialized view old.indicateur_perso_uid_mapping as
with seq as (
    select max(id) as last_id
    from indicateur_personnalise_definition
)
select distinct on (uid) uid                                           old_uid,
                         row_number() OVER (ORDER BY uid) + last_id as new_id,
                         epci_id
from old.indicateurpersonnalise
         join seq on true;

-- b. Définitions des indicateurs personnalisés
with partitioned as (
    select *, row_number() over (partition by (uid, epci_id) order by modified_at desc) as row_number
    from old.indicateurpersonnalise
),
     old_indicateur_personnalise_definition as (
         select *
         from partitioned
         where row_number = 1
     ),
     data as (
         select mapping.new_id              id,
                ne.new_id                   collectivite_id,
                nom                         titre,
                description,
                unite,
                meta -> 'commentaire'::text commentaire,
                ud.user_id                  modified_by,
                oipd.modified_at            modified_at
         from old_indicateur_personnalise_definition oipd
                  join old.indicateur_perso_uid_mapping mapping on mapping.old_uid = oipd.uid
                  join old.new_epci ne on oipd.epci_id = ne.old_epci_id
                  join lateral (select * from private_utilisateur_droit where collectivite_id = ne.new_id limit 1) ud
                       on true
     )
insert
into indicateur_personnalise_definition(id, collectivite_id, titre, description, unite, commentaire,
                                        modified_by, modified_at)
select id,
       collectivite_id,
       titre,
       description,
       unite,
       replace(coalesce(commentaire::text, ''), '"', '') as commentaire,
       modified_by,
       modified_at
from data
;

-- c. Résultats des indicateurs personnalisés
with partitioned_old_indicateur_personnalise_resultat as (
    select *, row_number() over (partition by (indicateur_id, year, epci_id) order by modified_at desc) as row_number
    from old.indicateurpersonnaliseresultat
),
     old_indicateur_personnalise_resultat as (
         select * from partitioned_old_indicateur_personnalise_resultat where row_number = 1
     )
insert
into indicateur_personnalise_resultat(indicateur_id, collectivite_id, annee, valeur, modified_at)
select mapping.new_id   indicateur_id,
       ne.new_id        collectivite_id,
       oipr.year        annee,
       oipr.value       valeur,
       -- ud.user_id modified_by,
       oipr.modified_at modified_at
from old_indicateur_personnalise_resultat oipr
         join old.indicateur_perso_uid_mapping mapping on mapping.old_uid = oipr.indicateur_id
         join old.new_epci ne on oipr.epci_id = ne.old_epci_id;


-- d. Objectifs des indicateurs personnalisés
with partitioned_old_indicateur_personnalise_objectif as (
    select *, row_number() over (partition by (indicateur_id, year, epci_id) order by modified_at desc) as row_number
    from old.indicateurpersonnaliseobjectif
),
     old_indicateur_personnalise_objectif as (
         select * from partitioned_old_indicateur_personnalise_objectif where row_number = 1
     )

insert
into indicateur_personnalise_objectif(indicateur_id, collectivite_id, annee, valeur, modified_at)
select new_id           indicateur_id,
       ne.new_id        collectivite_id,
       oipr.year        annee,
       oipr.value       valeur,
       -- ud.user_id modified_by,
       oipr.modified_at modified_at
from old_indicateur_personnalise_objectif oipr
         join old.indicateur_perso_uid_mapping mapping on mapping.old_uid = oipr.indicateur_id
         join old.new_epci ne on oipr.epci_id = ne.old_epci_id;


-- Diagnostics
---- EPCI perdues
select oe.nom, oe.siren, '' as nature
from old.epci oe
         left join epci e on oe.siren = e.siren
where latest
  and e.siren is null
  and oe.siren != '' -- only old epci with a siren
;

---- Missing indicateurs objectifs from real epcis
select distinct indicateur_id
from old.indicateurobjectif oio
         join old.epci oe on oio.epci_id = oe.uid
where oe.siren != ''
except
select distinct old_id
from indicateur_resultat ir
         join old.new_indicateur_id oni on ir.indicateur_id = oni.new_id;

---- Missing indicateurs objectifs from real epcis
select distinct indicateur_id
from old.indicateurresultat oi
         join old.epci oe on oi.epci_id = oe.uid
where oe.siren != ''
except
select distinct old_id
from indicateur_resultat ir
         join old.new_indicateur_id oni on ir.indicateur_id = oni.new_id;

---- Missing indicateurs personnalise definitions from real epcis
select count(*)
from old.indicateurpersonnalise oip
         join old.epci oe on oip.epci_id = oe.uid
where oip.latest
  and oe.siren != '';

select count(*)
from indicateur_personnalise_definition ipd

         join old.indicateur_perso_uid_mapping m
              on m.new_id = ipd.id
;


-- 9 Plan action


-- 9.a Fiche action
with old_fiche as (
    select *
    from old.ficheaction
    where latest
      and not deleted
),
     new_ai as (
         select id,
                replace(
                        replace(
                                replace(
                                        jsonb_array_elements(referentiel_action_ids) :: text,
                                        '"', ''),
                                'citergie__', 'cae_'
                            ),
                        'economie_circulaire__', 'eci_'
                    ) as converted
         from old_fiche
     ),
     valid_ai as (
       select new_ai.id,
              new_ai.converted
         from new_ai
            join action_relation on action_relation.id = new_ai.converted
     ),
     old_ir as (
         select id,
                replace(jsonb_array_elements(referentiel_indicateur_ids) :: text, '"',
                        '')::varchar(36) as old_indicateur_id
         from old_fiche
     ),
     new_ir as (
         select id,
                new_id
         from old_ir
                  join old.new_indicateur_id
                       on old_id = old_ir.old_indicateur_id
     ),
     old_ip as (
         select id,
                split_part(
                        replace(jsonb_array_elements(indicateur_personnalise_ids) :: text, '"', ''),
                        '/',
                        2
                    )::varchar(36)
                    as old_indicateur_perso_id
         from old_fiche
     ),
     new_ip as (
         select id,
                m.new_id
         from old_ip
                  join old.indicateur_perso_uid_mapping m on m.old_uid = old_ip.old_indicateur_perso_id
     )
insert
into fiche_action (modified_at,
                   uid,
                   collectivite_id,
                   avancement,
                   numerotation,
                   titre,
                   description,
                   structure_pilote,
                   personne_referente,
                   elu_referent,
                   partenaires,
                   budget_global,
                   commentaire,
                   date_fin,
                   date_debut,
                   en_retard,
                   action_ids,
                   indicateur_ids,
                   indicateur_personnalise_ids)
select modified_at,
       uid::uuid,
       ne.new_id                           collectivite_id,
       case
           when avancement like 'fait%' then 'fait'
           when avancement = 'en_cours' then 'en_cours'
           else 'pas_fait'
           end::fiche_action_avancement as avancement,
       custom_id                        as numerotation,
       titre,
       description,
       structure_pilote,
       personne_referente,
       elu_referent,
       partenaires,
       budget                           as budget_global,
       commentaire,
       date_fin,
       date_debut,
       en_retard,
       coalesce(a.id, '{}')             as action_ids,
       coalesce(ir.id, '{}')            as indicateur_ids,
       '{}'                             as indicateur_personnalise_ids
       -- coalesce(ip.id, '{}')            as indicateur_personnalise_ids

from old_fiche
         join lateral (select array_agg(converted) as id from valid_ai where old_fiche.id = valid_ai.id) a on true
         -- join lateral (select array_agg(new_id) as id from new_ip where old_fiche.id = new_ip.id) ip on true
         join lateral (select array_agg(new_id) as id from new_ir where old_fiche.id = new_ir.id) ir on true
         join old.new_epci ne on old_fiche.epci_id = ne.old_epci_id
;

--- Plan action

rollback;
