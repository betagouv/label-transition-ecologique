-- Deploy tet:stats/utilisateur to pg
-- requires: utilisateur/droits

BEGIN;

-- on `drop` avec `if exist` car la prod n'est pas synchro avec sandbox,
-- ces fonctionnalités pré-datant l'utilisation de Sqitch.
drop materialized view if exists stats_unique_active_users;
drop view if exists stats_unique_active_users;

create materialized view stats_unique_active_users
as
with unique_user_droit as (select user_id, min(created_at) as created_at
                           from private_utilisateur_droit d
                                    join stats.collectivite_active c on d.collectivite_id = c.collectivite_id
                           where active
                           group by user_id),
     daily as (select created_at::date as day, count(created_at) as count
               from unique_user_droit d
               group by day)
select day                                                                                      as date,
       count,
       sum(count) over (order by day rows between unbounded preceding and current row)::integer as cumulated_count
from daily;

refresh materialized view stats_unique_active_users;

COMMIT;
