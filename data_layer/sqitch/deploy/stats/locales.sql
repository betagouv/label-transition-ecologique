-- Deploy tet:stats/locale to pg

BEGIN;

create materialized view stats.locales_evolution_total_activation
as
select -- permet de filtrer
       m.first_day                              as mois,
       null:: varchar(2)                        as code_region,
       null::varchar(2)                         as code_departement,

       -- stats nationales
       (select count(*) as count
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day) as total,
       (select count(*) filter (where cu.type_collectivite = 'EPCI'::type_collectivite) as count
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day) as total_epci,
       (select count(*) filter (where cu.type_collectivite = 'syndicat'::type_collectivite) as count
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day) as total_syndicat,
       (select count(*) filter (where cu.type_collectivite = 'commune'::type_collectivite) as count
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day) as total_commune
from stats.monthly_bucket m

union all

select m.first_day as mois,
       r.code,
       null,
       (select count(*) filter ( where cu.region_code = r.code)
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day),
       (select count(*) filter ( where cu.type_collectivite = 'EPCI' and cu.region_code = r.code)
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day),
       (select count(*) filter ( where cu.type_collectivite = 'syndicat' and cu.region_code = r.code)
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day),
       (select count(*) filter ( where cu.type_collectivite = 'commune' and cu.region_code = r.code)
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day)

from imports.region r
         join stats.monthly_bucket m on true

union all

select m.first_day as mois,
       null,
       d.code,
       (select count(*) filter ( where departement_code = d.code)
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day),
       (select count(*) filter ( where cu.type_collectivite = 'EPCI' and departement_code = d.code)
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day),
       (select count(*) filter ( where cu.type_collectivite = 'syndicat' and departement_code = d.code)
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day),
       (select count(*) filter ( where cu.type_collectivite = 'commune' and departement_code = d.code)
        from stats.collectivite_utilisateur cu
        where cu.date_activation <= m.last_day)

from imports.departement d
         join stats.monthly_bucket m on true;

-- on créé un vue car les vues matérialisées ne sont pas exportées dans les types.
create view stats_locales_evolution_total_activation as
select *
from stats.locales_evolution_total_activation;


create materialized view stats.locales_collectivite_actives_et_total_par_type
as
with collectivite_typologie as (select c.collectivite_id,
                                       c.region_code,
                                       c.departement_code,
                                       case
                                           when stats.is_fiscalite_propre(c.nature_collectivite) then 'EPCI'
                                           when c.type_collectivite = 'syndicat' then 'syndicat'
                                           when c.type_collectivite = 'commune' then 'commune' end as typologie
                                from stats.collectivite c)

select typologie,
       null:: varchar(2)                                                                                    as code_region,
       null::varchar(2)                                                                                     as code_departement,
       count(*)                                                                                             as total,
       count(*) filter ( where collectivite_id in (select collectivite_id from stats.collectivite_active) ) as actives
from collectivite_typologie
group by typologie

union all

select typologie,
       region_code,
       null,
       count(*)                                                                                             as total,
       count(*) filter ( where collectivite_id in (select collectivite_id from stats.collectivite_active) ) as actives
from collectivite_typologie
group by typologie, region_code

union all

select typologie,
       null,
       departement_code,
       count(*)                                                                                             as total,
       count(*) filter ( where collectivite_id in (select collectivite_id from stats.collectivite_active) ) as actives
from collectivite_typologie
group by typologie, departement_code;

create view stats_locales_collectivite_actives_et_total_par_type as
select *
from stats.locales_collectivite_actives_et_total_par_type;


create materialized view stats.locales_evolution_utilisateur
as
with premier_rattachements as (
    -- retrouve les collectivités des premiers rattachements des utilisateurs actifs.
    select u.premier_rattachement as date,
           pud.collectivite_id,
           c.region_code,
           c.departement_code
    from stats.utilisateur u
             join private_utilisateur_droit pud
                  on md5(pud.user_id::text) = u.utilisateur and pud.created_at = u.premier_rattachement
             join stats.collectivite c on c.collectivite_id = pud.collectivite_id)
select m.first_day                   as mois,
       null:: varchar(2)             as code_region,
       null::varchar(2)              as code_departement,
       (select count(*)
        from premier_rattachements pr
        where pr.date >= m.first_day
          and pr.date <= m.last_day) as utilisateurs,
       (select count(*)
        from premier_rattachements pr
        where pr.date <= m.last_day) as total_utilisateurs
from stats.monthly_bucket m

union all

select m.first_day,
       r.code,
       null,
       (select count(*)
        from premier_rattachements pr
        where pr.date >= m.first_day
          and pr.date <= m.last_day
          and pr.region_code = r.code),
       (select count(*)
        from premier_rattachements pr
        where pr.date <= m.last_day
          and pr.region_code = r.code)
from stats.monthly_bucket m
         join region r on true

union all

select m.first_day,
       null,
       d.code,
       (select count(*)
        from premier_rattachements pr
        where pr.date >= m.first_day
          and pr.date <= m.last_day
          and pr.region_code = d.code),
       (select count(*)
        from premier_rattachements pr
        where pr.date <= m.last_day
          and pr.region_code = d.code)
from stats.monthly_bucket m
         join departement d on true;


create view stats_locales_evolution_utilisateur as
select *
from stats.locales_evolution_utilisateur;


create materialized view stats.locales_evolution_nombre_utilisateur_par_collectivite
as
with membres as (select c                                                                      as collectivite,
                        mb.first_day                                                           as mois,
                        coalesce(count(*)
                                 filter ( where active and pud.created_at <= mb.last_day ), 0) as nombre
                 from stats.monthly_bucket mb
                          join stats.collectivite c on true
                          left join private_utilisateur_droit pud using (collectivite_id)
                 group by c,
                          mb.first_day)
select mois,
       null:: varchar(2)                                                                              as code_region,
       null::varchar(2)                                                                               as code_departement,
       coalesce(avg(nombre) filter ( where nombre > 0 ), 0)                                           as moyen,
       coalesce(max(nombre) filter ( where nombre > 0 ), 0)                                           as maximum,
       coalesce(percentile_cont(0.5) within group ( order by nombre ) filter ( where nombre > 0 ), 0) as median
from membres
group by mois

union all

select mois,
       (membres.collectivite).region_code,
       null,
       coalesce(avg(nombre) filter ( where nombre > 0 ), 0),
       coalesce(max(nombre) filter ( where nombre > 0 ), 0),
       coalesce(percentile_cont(0.5) within group ( order by nombre ) filter ( where nombre > 0 ), 0)
from membres
group by mois, (membres.collectivite).region_code

union all

select mois,
       null,
       (membres.collectivite).departement_code,
       coalesce(avg(nombre) filter ( where nombre > 0 ), 0),
       coalesce(max(nombre) filter ( where nombre > 0 ), 0),
       coalesce(percentile_cont(0.5) within group ( order by nombre ) filter ( where nombre > 0 ), 0)
from membres
group by mois, (membres.collectivite).departement_code;

create view stats_locales_evolution_nombre_utilisateur_par_collectivite as
select *
from stats.locales_evolution_nombre_utilisateur_par_collectivite;


create materialized view stats.locales_pourcentage_completude
as
with score as (select collectivite_id, jsonb_array_elements(scores) as o from client_scores),
     eci as (select collectivite_id,
                    (o ->> 'completed_taches_count')::integer as completed_taches_count,
                    (o ->> 'total_taches_count')::integer     as total_taches_count
             from score
             where o @> '{"action_id": "eci"}'),
     cae as (select collectivite_id,
                    (o ->> 'completed_taches_count')::integer as completed_taches_count,
                    (o ->> 'total_taches_count')::integer     as total_taches_count
             from score
             where o @> '{"action_id": "cae"}')

select c.collectivite_id,
       c.region_code,
       c.departement_code,
       coalesce((eci.completed_taches_count::float / eci.total_taches_count::float) * 100, 0) as completude_eci,
       coalesce((cae.completed_taches_count::float / cae.total_taches_count::float) * 100, 0) as completude_cae
from stats.collectivite c
         left join eci on eci.collectivite_id = c.collectivite_id
         left join cae on cae.collectivite_id = c.collectivite_id
order by c.collectivite_id;


create materialized view stats.locales_tranche_completude
as
with bounds as (select unnest('{0, 20, 50, 80,  100}'::numeric[]) as bound),
     ranges as (select numrange(lower.bound, upper.bound) as range,
                       lower.bound                        as lower_bound,
                       upper.bound                        as upper_bound
                from bounds lower
                         left join lateral (select * from bounds b where b.bound > lower.bound limit 1) upper on true)
select lower_bound,
       upper_bound,
       null:: varchar(2) as code_region,
       null::varchar(2)  as code_departement,
       eci,
       cae
from ranges r
         left join lateral (select count(*) filter ( where r.range @> c.completude_eci::numeric ) as eci,
                                   count(*) filter ( where r.range @> c.completude_cae::numeric ) as cae
                            from stats.locales_pourcentage_completude c) in_range on true

union all

select lower_bound,
       upper_bound,
       r.code,
       null,
       eci,
       cae
from imports.region r
         join ranges on true
         left join lateral (select count(*)
                                   filter ( where ranges.range @> c.completude_eci::numeric and c.region_code = r.code) as eci,
                                   count(*)
                                   filter ( where ranges.range @> c.completude_cae::numeric and c.region_code = r.code) as cae
                            from stats.locales_pourcentage_completude c) in_range on true

union all

select lower_bound,
       upper_bound,
       null,
       d.code,
       eci,
       cae
from imports.departement d
         join ranges on true
         left join lateral (select count(*) filter ( where ranges.range @> c.completude_eci::numeric and
                                                           c.departement_code = d.code) as eci,
                                   count(*) filter ( where ranges.range @> c.completude_cae::numeric and
                                                           c.departement_code = d.code) as cae
                            from stats.locales_pourcentage_completude c) in_range on true;

create view stats_locales_tranche_completude as
select *
from stats.locales_tranche_completude;

create materialized view stats.locales_evolution_nombre_fiches
as
select first_day                                               as mois,
       null::varchar(2)                                        as code_region,
       null::varchar(2)                                        as code_departement,
       count(*) filter ( where fa.modified_at <= mb.last_day ) as fiches
from stats.monthly_bucket mb
         join stats.collectivite ca on true
         join fiche_action fa using (collectivite_id)
group by mb.first_day

union all

select first_day,
       ca.region_code,
       null,
       count(*) filter ( where fa.modified_at <= mb.last_day )
from stats.monthly_bucket mb
         join stats.collectivite ca on true
         left join fiche_action fa using (collectivite_id)
group by mb.first_day, ca.region_code

union all

select first_day,
       null,
       ca.departement_code,
       count(*) filter ( where fa.modified_at <= mb.last_day )
from stats.monthly_bucket mb
         join stats.collectivite ca on true
         left join fiche_action fa using (collectivite_id)
group by mb.first_day, ca.departement_code

order by mois;

create view stats_locales_evolution_nombre_fiches as
select *
from stats.locales_evolution_nombre_fiches;

-- todo stats_evolution_collectivite_avec_minimum_fiches
-- todo stats_engagement_collectivite
-- todo stats_labellisation_par_niveau
-- todo stats_evolution_indicateur_referentiel
-- todo stats_evolution_resultat_indicateur_personnalise
-- todo stats_evolution_resultat_indicateur_referentiel

create function
    stats.refresh_stats_locales()
    returns void
as
$$
begin
    refresh materialized view stats.locales_evolution_total_activation;
    refresh materialized view stats.locales_collectivite_actives_et_total_par_type;
    refresh materialized view stats.locales_evolution_utilisateur;
    refresh materialized view stats.locales_evolution_nombre_utilisateur_par_collectivite;
    refresh materialized view stats.locales_pourcentage_completude;
    refresh materialized view stats.locales_tranche_completude;
    refresh materialized view stats.evolution_nombre_fiches;
end
$$ language plpgsql;
comment on function stats.refresh_stats_locales is
    'Rafraichit les vues matérialisées des stats régionales et départementales.';


COMMIT;
