-- Verify tet:stats/reporting on pg

BEGIN;

select id,
       indicateur_group,
       identifiant,
       nom,
       resultats,
       objectifs,
       collectivites,
       collectivite_ids
from stats.report_indicateur
where false;

ROLLBACK;
