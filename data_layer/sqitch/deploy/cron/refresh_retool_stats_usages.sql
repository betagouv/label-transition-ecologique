-- Deploy tet:cron/refresh_retool_stats_usages to pg

BEGIN;

select cron.schedule('refresh_retool_stats_usages',
                     '0 0 * * *', -- every day
                     $$refresh materialized view retool_stats_usages$$);

COMMIT;
