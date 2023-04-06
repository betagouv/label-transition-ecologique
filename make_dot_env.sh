envsubst '${SUPABASE_SERVICE_ROLE_KEY}, ${SUPABASE_ANON_KEY}' < ./data_layer/requests/http-client.sample.json > ./data_layer/requests/http-client.env.json
envsubst '${SUPABASE_SERVICE_ROLE_KEY}' < ./business/.env.sample > ./business/.env
envsubst '${SUPABASE_ANON_KEY}' < ./app.territoiresentransitions.react/.env.sample > ./app.territoiresentransitions.react/.env
envsubst '${SUPABASE_SERVICE_ROLE_KEY}' < ./e2e/.env.sample > ./e2e/.env
envsubst '${SUPABASE_ANON_KEY}' < ./api_tests/.env.example > ./api_tests/.env
envsubst '${SUPABASE_ANON_KEY}' < ./site/.env.sample > ./site/.env
