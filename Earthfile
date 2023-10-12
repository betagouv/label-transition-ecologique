VERSION 0.7
LOCALLY
# chemins vers les modules front
ARG --global APP_DIR='./app.territoiresentransitions.react'
ARG --global SITE_DIR='./packages/site'
ARG --global UI_DIR='./packages/ui'
ARG --global BUSINESS_DIR='./business'
# paramètres de la base de registre des images docker générées
ARG --global REGISTRY='ghcr.io'
ARG --global REG_USER='territoiresentransitions'
ARG --global REG_TARGET=$REGISTRY/$REG_USER
# tags appliqués aux images docker générées
ARG --global ENV_NAME="dev"
ARG --global FRONT_DEPS_TAG=$(openssl dgst -sha256 -r ./package-lock.json | head -c 7 ; echo)
ARG --global FRONT_DEPS_IMG_NAME=$REG_TARGET/front-deps:$FRONT_DEPS_TAG
ARG --global APP_TAG=$ENV_NAME-$FRONT_DEPS_TAG-$(sh ./subdirs_hash.sh $APP_DIR,$UI_DIR)
ARG --global APP_IMG_NAME=$REG_TARGET/app:$APP_TAG
ARG --global SITE_IMG_NAME=$REG_TARGET/site:$ENV_NAME-$FRONT_DEPS_TAG-$(sh ./subdirs_hash.sh $SITE_DIR,$UI_DIR)
ARG --global BUSINESS_IMG_NAME=$REG_TARGET/business:$ENV_NAME-$(sh ./subdirs_hash.sh $BUSINESS_DIR)
ARG --global DL_TAG=$ENV_NAME-$(sh ./subdirs_hash.sh data_layer)
ARG --global DB_SAVE_IMG_NAME=$REG_TARGET/db-save:$DL_TAG
ARG --global DB_VOLUME_NAME=supabase_db_tet
ARG --global GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

postgres:
    FROM postgres:15

psql-build:
    FROM +postgres
    ENTRYPOINT ["psql"]
    SAVE IMAGE psql:latest

sqitch-build:
    FROM +postgres
    RUN apt-get update
    RUN apt-get install -y curl build-essential cpanminus perl perl-doc libdbd-pg-perl postgresql-client
    RUN cpanm --quiet --notest App::Sqitch
    ENTRYPOINT ["sqitch"]
    CMD ["help"]
    SAVE IMAGE --cache-from=$REG_TARGET/sqitch:15 --push $REG_TARGET/sqitch:15

sqitch-builder:
    LOCALLY
    DO +BUILD_IF_NO_IMG --IMG_NAME=sqitch --IMG_TAG=15 --BUILD_TARGET=sqitch-build

db-deploy-build:
    FROM +sqitch-build
    COPY sqitch.conf ./sqitch.conf
    COPY ./data_layer/sqitch ./data_layer/sqitch
    SAVE IMAGE --push $REG_TARGET/db-deploy:$DL_TAG

pg-tap-build:
    FROM +postgres
    RUN apt-get update
    RUN apt-get install cpanminus -y
    RUN cpanm TAP::Parser::SourceHandler::pgTAP
    ENTRYPOINT ["pg_prove"]
    SAVE IMAGE --push $REG_TARGET/pg-tap:15

pg-tap-builder:
    LOCALLY
    DO +BUILD_IF_NO_IMG --IMG_NAME=pg-tap --IMG_TAG=15 --BUILD_TARGET=pg-tap-build

db-test-build:
    FROM +pg-tap-build
    CMD ["./tests/collectivite/identite.sql"]
    COPY ./data_layer/tests ./tests
    SAVE IMAGE db-test:latest

db-test:
    ARG --required DB_URL
    ARG network=host
    LOCALLY
    RUN earthly +db-test-build
    RUN docker run --rm \
        --network $network \
        --env PGHOST=$(echo $DB_URL | cut -d@ -f2 | cut -d: -f1) \
        --env PGPORT=$(echo $DB_URL | cut -d: -f4 | cut -d/ -f1) \
        --env PGUSER=$(echo $DB_URL | cut -d: -f3 | cut -d@ -f1) \
        --env PGPASSWORD=$(echo $DB_URL | cut -d: -f3 | cut -d@ -f1) \
        --env PGDATABASE=$(echo $DB_URL | cut -d/ -f4) \
        db-test:latest

db-deploy:
    ARG --required DB_URL
    ARG network=host
    ARG to=@HEAD
    LOCALLY
    DO +BUILD_IF_NO_IMG --IMG_NAME=db-deploy --IMG_TAG=$DL_TAG --BUILD_TARGET=db-deploy-build
    RUN docker run --rm \
        --network $network \
        --env SQITCH_TARGET=db:$DB_URL \
        $REG_TARGET/db-deploy:$DL_TAG deploy --to $to --mode change

db-deploy-test:
    ARG --required DB_URL
    ARG network=host
    ARG tag=v2.63.0
    LOCALLY
    RUN earthly --use-inline-cache +db-deploy-build
    RUN docker run --rm \
        --network $network \
        --env SQITCH_TARGET=db:$DB_URL \
        $REG_TARGET/db-deploy:$DL_TAG deploy --mode change
    RUN docker run --rm \
        --network $network \
        --env SQITCH_TARGET=db:$DB_URL \
        $REG_TARGET/db-deploy:$DL_TAG revert --to @$tag --y
    RUN docker run --rm \
        --network $network \
        --env SQITCH_TARGET=db:$DB_URL \
        $REG_TARGET/db-deploy:$DL_TAG deploy --mode change --verify

seed-build:
    FROM +postgres
    ENV SKIP_TEST_DOMAIN=0
    ENV PG_URL
    COPY ./data_layer/seed /seed
    ENTRYPOINT sh ./seed/seed.sh
    SAVE IMAGE seed:latest

seed:
    ARG --required DB_URL
    ARG network=host
    LOCALLY
    RUN earthly +seed-build
    RUN docker run --rm \
        --network $network \
        --env PG_URL=$DB_URL \
        seed:latest

seed-geojson:
    ARG --required DB_URL
    ARG network=host
    LOCALLY
    RUN earthly +seed-build
    RUN docker run --rm \
        --network $network \
        --env PG_URL=$DB_URL \
        --entrypoint sh \
        seed:latest ./seed/geojson.sh

load-json-build:
    FROM curlimages/curl:8.1.0
    ENV SERVICE_ROLE_KEY
    ENV API_URL
    COPY ./data_layer/content /content
    COPY ./data_layer/scripts/load_json_content.sh /content/load.sh
    ENTRYPOINT sh /content/load.sh
    SAVE IMAGE load-json:latest

load-json:
    ARG --required SERVICE_ROLE_KEY
    ARG --required API_URL
    ARG network=host
    LOCALLY
    RUN earthly +load-json-build
    RUN docker run --rm \
        --network $network \
        --env API_URL=$API_URL \
        --env SERVICE_ROLE_KEY=$SERVICE_ROLE_KEY \
        load-json:latest db-deploy --mode change

update-scores:
    ARG --required DB_URL
    ARG count=20
    ARG network=host
    LOCALLY
    RUN earthly +psql-build
    RUN docker run --rm \
        --network $network \
        psql:latest $DB_URL -v ON_ERROR_STOP=1 \
        -c "select evaluation.update_late_collectivite_scores($count);"

refresh-views:
    ARG --required DB_URL
    ARG network=host
    LOCALLY
    RUN earthly +psql-build
    RUN docker run --rm \
        --network $network \
        psql:latest $DB_URL -v ON_ERROR_STOP=1 \
        -c "refresh materialized view stats.collectivite; refresh materialized view site_labellisation;"

business-build:
    FROM python:3.10.10
    ENV SUPABASE_URL
    ENV SUPABASE_KEY
    WORKDIR /business
    COPY $BUSINESS_DIR .
    RUN pip install pipenv
    RUN PIPENV_VENV_IN_PROJECT=1 pipenv install
    EXPOSE 8888
    CMD pipenv run python ./evaluation_server.py
    SAVE IMAGE --cache-from=$BUSINESS_IMG_NAME --push $BUSINESS_IMG_NAME

business:
    ARG --required SERVICE_ROLE_KEY
    ARG url=http://supabase_kong_tet:8000
    ARG network=supabase_network_tet
    LOCALLY
    RUN earthly +business-build
    RUN docker run -d --rm \
        --name business_tet \
        --network $network \
        --publish 8888:8888 \
        --env SUPABASE_URL=$url \
        --env SUPABASE_KEY=$SERVICE_ROLE_KEY \
        $BUSINESS_IMG_NAME

business-test-build:
    FROM +business-build
    COPY ./markdown /markdown
    RUN pip install pytest
    CMD pipenv run pytest tests
    SAVE IMAGE business-test:latest

business-test:
    ARG --required SERVICE_ROLE_KEY
    ARG url=http://supabase_kong_tet:8000
    ARG network=supabase_network_tet
    LOCALLY
    RUN earthly +business-test-build
    RUN docker run --rm \
        --name business-test_tet \
        --network $network \
        --env SUPABASE_URL=$url \
        --env SUPABASE_KEY=$SERVICE_ROLE_KEY \
        business-test:latest

business-parse:
    FROM +business-build
    COPY ./markdown /markdown
    RUN mkdir /content
    RUN sh ./referentiel_parse_all.sh
    SAVE ARTIFACT /content AS LOCAL ./data_layer/content
    SAVE ARTIFACT /content AS LOCAL $BUSINESS_DIR/tests/data/dl_content


node-fr: ## construit l'image de base pour les images utilisant node
    ARG TARGETPLATFORM
    # `--PLATFORM=<platform>` pour forcer la plateforme cible, sinon ce sera la
    # même que celle sur laquelle le build est fait
    ARG PLATFORM=$TARGETPLATFORM
    FROM --platform=$PLATFORM node:20
    ENV LANG fr_FR.UTF-8
    RUN apt-get update && apt-get install -y locales dumb-init && rm -rf /var/lib/apt/lists/* && locale-gen "fr_FR.UTF-8"
    USER node:node
    WORKDIR "/app"
    SAVE IMAGE node-fr:latest

front-deps: ## construit l'image contenant les dépendances des modules front
    FROM +node-fr
    # dépendances globales
    COPY ./package.json ./
    COPY ./package-lock.json ./
    # dépendances des modules
    COPY $APP_DIR/package.json ./$APP_DIR/
    COPY $SITE_DIR/package.json ./$SITE_DIR/
    COPY $UI_DIR/package.json ./$UI_DIR/
    # installe les dépendances
    RUN npm ci
    SAVE IMAGE --cache-from=$FRONT_DEPS_IMG_NAME --push $FRONT_DEPS_IMG_NAME

front-deps-builder:
    LOCALLY
    DO +BUILD_IF_NO_IMG --IMG_NAME=front-deps --IMG_TAG=$FRONT_DEPS_TAG --BUILD_TARGET=front-deps

app-build: ## construit l'image de l'app
    ARG PLATFORM
    ARG --required ANON_KEY
    ARG --required API_URL
    ARG kong_url=http://supabase_kong_tet:8000
    FROM +front-deps
    ENV REACT_APP_SUPABASE_URL=$API_URL
    ENV REACT_APP_SUPABASE_KEY=$ANON_KEY
    ENV ZIP_ORIGIN_OVERRIDE=$KONG_URL
    # copie les sources des modules à construire
    COPY $APP_DIR/. $APP_DIR/
    COPY $UI_DIR/. $UI_DIR
    RUN npm run build -w @tet/ui -w @tet/app
    EXPOSE 3000
    WORKDIR $APP_DIR
    CMD ["dumb-init", "node", "server.js"]
    SAVE IMAGE --cache-from=$APP_IMG_NAME --push $APP_IMG_NAME

app-run: ## construit et lance l'image de l'app en local
    ARG --required ANON_KEY
    ARG --required API_URL
    ARG network=supabase_network_tet
    LOCALLY
    DO +BUILD_IF_NO_IMG --IMG_NAME=front-deps --IMG_TAG=$FRONT_DEPS_TAG --BUILD_TARGET=front-deps
    DO +BUILD_IF_NO_IMG --IMG_NAME=app --IMG_TAG=$APP_TAG --BUILD_TARGET=app-build
    RUN docker run -d --rm \
        --name app_tet \
        --network $network \
        --publish 3000:3000 \
        $APP_IMG_NAME

app-test-build: ## construit une image pour exécuter les tests unitaires de l'app
    FROM +front-deps
    ENV REACT_APP_SUPABASE_URL
    ENV REACT_APP_SUPABASE_KEY
    ENV ZIP_ORIGIN_OVERRIDE
    # copie les sources du module à tester
    COPY $APP_DIR $APP_DIR
    COPY $UI_DIR $UI_DIR
    # la commande utilisée pour lancer les tests
    CMD npm run test -w @tet/app
    SAVE IMAGE app-test:latest

app-test: ## lance les tests unitaires de l'app
    ARG --required ANON_KEY
    ARG url=http://supabase_kong_tet:8000
    ARG network=supabase_network_tet
    LOCALLY
    RUN earthly +app-test-build
    RUN docker run --rm \
        --name app-test_tet \
        --network $network \
        --env CI=true \ # désactive le mode watch quand on lance la commande en local
        --env REACT_APP_SUPABASE_URL=$url \
        --env REACT_APP_SUPABASE_KEY=$ANON_KEY \
        --env ZIP_ORIGIN_OVERRIDE=$url \
        app-test:latest

site-build: ## construit l'image du site
    ARG PLATFORM
    ARG --required ANON_KEY
    ARG --required API_URL
    ARG --required STRAPI_KEY
    ARG --required STRAPI_URL
    FROM +front-deps
    ENV NEXT_PUBLIC_STRAPI_KEY=$STRAPI_KEY
    ENV NEXT_PUBLIC_STRAPI_URL=$STRAPI_URL
    ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$ANON_KEY
    ENV NEXT_PUBLIC_SUPABASE_URL=$API_URL
    ENV NEXT_TELEMETRY_DISABLED=1
    ENV PORT=80
    EXPOSE $PORT
    # copie les sources des modules à construire
    COPY $SITE_DIR $SITE_DIR
    COPY $UI_DIR $UI_DIR
    RUN npm run build -w @tet/ui -w @tet/site
    WORKDIR ./packages/site
    CMD ["dumb-init", "./node_modules/.bin/next", "start"]
    SAVE IMAGE --cache-from=$SITE_IMG_NAME --push $SITE_IMG_NAME

site-run: ## construit et lance l'image du site en local
    ARG network=supabase_network_tet
    LOCALLY
    RUN docker run -d --rm \
        --name site_tet \
        --network $network \
        --publish 3001:80 \
        $SITE_IMG_NAME

curl-test-build:
    FROM curlimages/curl:8.1.0
    COPY ./data_layer/scripts/curl_test.sh /curl_test.sh
    ENTRYPOINT sh ./curl_test.sh
    SAVE IMAGE curl-test:latest

curl-test:
    ARG --required SERVICE_ROLE_KEY
    ARG --required API_URL
    ARG network=supabase_network_tet
    ARG internal_url=http://supabase_kong_tet:8000
    LOCALLY
    RUN earthly +curl-test-build
    RUN docker run --rm \
        --name curl_test_tet \
        --network $network \
        --env API_KEY=$SERVICE_ROLE_KEY \
        --env URL=$internal_url \
        curl-test:latest
    RUN docker run --rm \
        --name curl_test_tet \
        --network host \
        --env API_KEY=$SERVICE_ROLE_KEY \
        --env URL=$API_URL \
        curl-test:latest

api-test-build:
    FROM denoland/deno
    ENV SUPABASE_URL
    ENV SUPABASE_KEY
    WORKDIR tests
    COPY ./api_tests .
    RUN deno cache tests/base/smoke.test.ts
    RUN deno cache tests/base/utilisateur.test.ts
    CMD deno
    SAVE IMAGE api-test:latest

api-test:
    ARG --required SERVICE_ROLE_KEY
    ARG --required API_URL
    ARG network=host
    ARG tests='base droit historique plan_action scoring indicateurs labellisation utilisateur'
    LOCALLY
    RUN earthly +api-test-build
    FOR test IN $tests
      RUN echo "Running tests for tests/$test'"
      RUN docker run --rm \
              --name api_test_tet \
              --network $network \
              --env SUPABASE_KEY=$SERVICE_ROLE_KEY \
              --env SUPABASE_URL=$API_URL \
              api-test:latest test -A tests/$test/*.test.ts --location 'http://localhost'
    END

cypress-wip:
    FROM cypress/included:12.3.0
    ENV ELECTRON_EXTRA_LAUNCH_ARGS="--disable-gpu"
    WORKDIR /e2e
    COPY ./e2e/package.json /e2e/package.json
    RUN npm install
    COPY ./e2e/ /e2e
    RUN npm test

gen-types: ## génère le typage à partir de la base de données
    LOCALLY
    IF [ "$CI" = "true" ]
        RUN supabase gen types typescript --local --schema public --schema labellisation > $APP_DIR/src/types/database.types.ts
    ELSE
        RUN npx supabase gen types typescript --local --schema public --schema labellisation > $APP_DIR/src/types/database.types.ts
    END
    RUN cp $APP_DIR/src/types/database.types.ts ./api_tests/lib/database.types.ts
    RUN cp $APP_DIR/src/types/database.types.ts $SITE_DIR/app/database.types.ts

setup-env:
    LOCALLY
    RUN earthly +stop
    IF [ "$CI" = "true" ]
        RUN supabase start
        RUN supabase status -o env > .arg
    ELSE
        RUN npm install
        RUN npx supabase start
        RUN npx supabase status -o env > .arg
    END
    RUN export $(cat .arg | xargs) && sh ./make_dot_env.sh
    RUN earthly +stop


dev:
    LOCALLY
    ARG --required DB_URL
    ARG --required SERVICE_ROLE_KEY
    ARG --required API_URL
    ARG network=host
    ARG stop=yes
    ARG datalayer=yes
    ARG business=yes
    ARG app=no
    ARG eco=no
    ARG fast=no
    ARG faster=no
    ARG version=HEAD # version du plan

    IF [ "$fast" = "yes" -a "$faster" = "yes" ]
        RUN echo "Les options fast et faster sont mutuellement exclusives"
        RUN exit 1
    END

    IF [ "$stop" = "yes" ]
        RUN earthly +stop --npx=$npx
    END

    IF [ "$datalayer" = "yes" ]
        IF [ "$fast" = "yes" ]
            RUN earthly +restore-state
        END

        IF [ "$faster" = "yes" ]
            RUN earthly +restore-db --pull=yes
        END

        IF [ "$CI" = "true" ]
            RUN supabase start
            RUN docker stop supabase_studio_tet
            RUN docker stop supabase_pg_meta_tet
        ELSE
            RUN npx supabase start
        END

        IF [ "$eco" = "yes" ]
            RUN docker stop storage_imgproxy_tet
            RUN docker stop supabase_studio_tet
            RUN docker stop supabase_pg_meta_tet
        END

        IF [ "$faster" = "no" ]
            RUN earthly +db-deploy --to @$version --DB_URL=$DB_URL

            # Seed si aucune collectivité en base
            RUN docker run --rm \
                --network $network \
                psql:latest $DB_URL -v ON_ERROR_STOP=1 \
                -c "select 1 / count(*) from collectivite;" \
                || earthly +seed --DB_URL=$DB_URL

            RUN earthly +load-json --SERVICE_ROLE_KEY=$SERVICE_ROLE_KEY --API_URL=$API_URL
        END
    END

    IF [ "$business" = "yes" ]
        RUN earthly +business --SERVICE_ROLE_KEY=$SERVICE_ROLE_KEY
        RUN earthly +update-scores --DB_URL=$DB_URL
    END

    IF [ "$app" = "yes" ]
        RUN earthly +app-run
    END

    RUN earthly +refresh-views --DB_URL=$DB_URL

BUILD_IF_NO_IMG:
    COMMAND
    ARG --required IMG_NAME
    ARG --required IMG_TAG
    ARG --required BUILD_TARGET
    ARG pull=yes
    ARG push=yes
    RUN echo "Searching for image $IMG_NAME:$IMG_TAG ..."
    IF [ "docker image ls | grep $IMG_NAME | grep $IMG_TAG" ]
        RUN echo "Image found, skipping"
    ELSE
        IF [ "$pull" = "yes" ]
            RUN echo "Image not found, trying to pull $REG_TARGET/$IMG_NAME:$IMG_TAG"
            RUN docker pull $REG_TARGET/$IMG_NAME:$IMG_TAG || earthly +$BUILD_TARGET
        ELSE
            RUN echo "Image not found, building +$BUILD_TARGET"
            IF [ "$push" = "yes" ]
                RUN earthly --push +$BUILD_TARGET
            ELSE
                RUN earthly +$BUILD_TARGET
            END
        END
    END

stop:
    LOCALLY
    IF [ "$CI" = "true" ]
        RUN supabase stop
    ELSE
        RUN npx supabase stop
    END
    RUN docker ps --filter name=_tet --filter status=running -aq | xargs docker stop | xargs docker rm || exit 0
    RUN earthly +clear-state

copy-volume: ## Copie un volume
     ARG --required from
     ARG --required to
     LOCALLY
     RUN docker volume rm $to || echo "volume $to not found"
     RUN docker volume create --name $to
     RUN docker run --rm \
        -v $from:/from \
        -v $to:/to \
        alpine ash -c "cd /from ; cp -av . /to"

save-db: ## Sauvegarde la db dans une image en vue de la publier
     ARG push=no
     LOCALLY
     RUN docker run \
        -v $DB_VOLUME_NAME:/volume \
        alpine ash -c "mkdir /save ; cd /volume ; cp -av . /save"
     RUN docker commit \
         $(docker ps -lq) \
         $DB_SAVE_IMG_NAME
     RUN docker container rm $(docker ps -lq)
     IF [ "$push" = "yes" ]
        RUN docker push $DB_SAVE_IMG_NAME
     END

restore-db: ## Restaure la db depuis une image
     ARG pull=no
     LOCALLY
     IF [ "$pull" = "yes" ]
        RUN docker pull $DB_SAVE_IMG_NAME
     END
     IF [ "docker image ls | grep db-save | grep $DL_TAG" ]
         RUN echo "Image $DB_SAVE_IMG_NAME found, restoring..."
         RUN docker volume rm $DB_VOLUME_NAME || echo "Volume $DB_VOLUME_NAME not found"
         RUN docker volume create --name $DB_VOLUME_NAME
         RUN docker run --rm \
            -v $DB_VOLUME_NAME:/volume \
            $DB_SAVE_IMG_NAME ash -c "cd /save ; cp -av . /volume"
     ELSE
         RUN echo "Image $DB_SAVE_IMG_NAME not found, cannot restore"
         RUN exit 1
     END

prepare-fast:
    ARG version  # version du plan
    LOCALLY
    # si la version du plan n'est pas spécifiée on utilise le tag courant
    ARG v=$(if [ -z $version ]; then sqitch status | grep @v | sed -E 's/.*@(v[0-9.]*)/\1/'; else echo $version; fi)
    RUN earthly +dev --stop=yes --business=no --app=no --fast=no --version=$v
    RUN earthly +save-state

clear-state:
    ARG saved=no
    LOCALLY
    RUN docker volume rm supabase_db_tet || echo "could not clear current state: not found"
    RUN docker volume rm supabase_storage_tet || echo "could not clear current state: not found"

    IF [ "$saved" = "yes" ]
        RUN docker volume rm supabase_db_tet_save || echo "could not clear saved state: not found"
        RUN docker volume rm supabase_storage_tet_save || echo "could not clear saved state: not found"
    END

save-state:
    LOCALLY
    RUN earthly +copy-volume --from supabase_db_tet --to supabase_db_tet_save
    RUN earthly +copy-volume --from supabase_storage_tet --to supabase_storage_tet_save

restore-state:
    LOCALLY
    RUN earthly +copy-volume --from supabase_db_tet_save --to supabase_db_tet || echo "could not restore state"
    RUN earthly +copy-volume --from supabase_storage_tet_save --to supabase_storage_tet || echo "could not restore state"

test:
    LOCALLY
    RUN earthly +curl-test
    RUN earthly +db-test
    RUN earthly +business-test
    RUN earthly +api-test
    RUN earthly +db-deploy-test
    RUN earthly +app-test

docker-dev-login: ## permet de s'identifier sur la registry
    ARG --required GH_USER
    ARG --required GH_TOKEN
    LOCALLY
    RUN docker login $REGISTRY -u $GH_USER -p $GH_TOKEN

koyeb-bin: ## extrait le binaire koyeb de l'image officielle
    FROM koyeb/koyeb-cli:latest
    SAVE ARTIFACT ./koyeb

koyeb:
    ARG --required KOYEB_API_KEY
    FROM alpine
    COPY +koyeb-bin/koyeb ./
    RUN echo "token: $KOYEB_API_KEY" > ~/.koyeb.yaml

site-deploy:
    ARG --required KOYEB_API_KEY
    FROM +koyeb
    RUN ./koyeb services update $ENV_NAME-site/front --docker $SITE_IMG_NAME

app-deploy:
    ARG --required KOYEB_API_KEY
    FROM +koyeb
    RUN ./koyeb services update $ENV_NAME-app/front --docker $APP_IMG_NAME

help: ## affiche ce message d'aide
    LOCALLY
    RUN grep -h "##" ./Earthfile | grep -v grep | sed -e 's/##//'
