-- Verify tet:evaluation/score_summary on pg

BEGIN;

select has_function_privilege('private.convert_client_scores(jsonb)', 'execute');

ROLLBACK;
