-- Deploy tet:collectivite/identite to pg
-- requires: collectivite/collectivite
-- requires: collectivite/type

BEGIN;

create or replace view collectivite_carte_identite as
with
    -- get population and drom from insee.
    meta_commune as (select com.collectivite_id,
                            ic.population,
                            'Insee Populations légales 2020 parues 29/12/2022' as population_source,
                            ic.code            as insee,
                            ir.libelle         as region_name,
                            id.libelle         as departement_name
                     from commune com
                              left join imports.commune ic on ic.code = com.code
                              left join imports.region ir on ic.region_code = ir.code
                              left join imports.departement id on ic.departement_code = id.code),
    -- get population from banatic and drom from insee.
    meta_epci as (select epci.collectivite_id,
                         ib.population,
                         'BANATIC 2023' as population_source,
                         ib.siren,
                         ir.libelle           as region_name,
                         id.libelle           as departement_name
                  from epci
                           left join imports.banatic ib on ib.siren = epci.siren
                           left join imports.region ir on ib.region_code = ir.code
                           left join imports.departement id on ib.departement_code = id.code),

    -- compute type from table and epci nature
    type_collectivite as (select c.id                       as collectivite_id,
                                 case
                                     when c.id in (select collectivite_id from commune) then 'commune'
                                     when e.nature = 'SMF' or e.nature = 'SIVOM' or e.nature = 'SMO' or
                                          e.nature = 'SIVU' then
                                         'syndicat'
                                     else 'EPCI'
                                     end::type_collectivite as type
                          from collectivite c
                                   left join epci e on c.id = e.collectivite_id)
-- coalesce null values from epci or collectivite data.
select c.collectivite_id,
       c.nom,
       tc.type                                                as type_collectivite,
       coalesce(mc.insee, me.siren, '')                       as code_siren_insee,
       coalesce(mc.region_name, me.region_name, '')           as region_name,
       coalesce(mc.departement_name, me.departement_name, '') as departement_name,
       coalesce(mc.population_source, me.population_source)   as population_source,
       coalesce(mc.population, me.population, 0)::int4        as population_totale,
       coalesce(cot.actif, false)                             as is_cot

from named_collectivite c
         left join meta_commune mc on mc.collectivite_id = c.collectivite_id
         left join meta_epci me on me.collectivite_id = c.collectivite_id
         left join type_collectivite tc on tc.collectivite_id = c.collectivite_id
         left join cot on cot.collectivite_id = c.collectivite_id;

COMMIT;
