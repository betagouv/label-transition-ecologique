--------------------------------
---------- STATUT --------------
--------------------------------
create type avancement as enum ('fait', 'pas_fait', 'programme', 'non_renseigne', 'detaille');

create table action_statut
(
    collectivite_id integer references collectivite                      not null,
    action_id       action_id references action_relation                 not null,
    avancement      avancement                                           not null,
    avancement_detaille float[],                     -- [fait, programme, pas_fait]
    concerne        boolean                                              not null,
    modified_by     uuid references auth.users default auth.uid()        not null,
    modified_at     timestamp with time zone   default CURRENT_TIMESTAMP not null,

    primary key (collectivite_id, action_id)
);

alter table action_statut add constraint avancement_detaille_length CHECK (array_length(avancement_detaille, 1) = 3);
-- alter table action_statut add constraint avancement_detaille_sum_to_1 CHECK (avancement_detaille[0] + avancement_detaille[1] + avancement_detaille[2] = 1); --does not seem to work :( 

alter table action_statut
    enable row level security;

create policy allow_read
    on action_statut
    for select
    using (is_authenticated());

create policy allow_insert
    on action_statut
    for insert
    with check (is_amongst_role_on(array ['agent'::role_name, 'referent'::role_name, 'conseiller'::role_name],
                                   collectivite_id));

create policy allow_update
    on action_statut
    for update
    using (is_amongst_role_on(array ['agent'::role_name, 'referent'::role_name, 'conseiller'::role_name],
                                   collectivite_id));


create view client_action_statut
as
select collectivite_id,
       modified_by,
       action_id,
       avancement,
       concerne
from action_statut;

create view business_action_statut
as
select collectivite_id,
       referentiel,
       action_id,
       avancement,
       avancement_detaille, 
       concerne
from action_statut
         join action_relation on action_id = action_relation.id;


--------------------------------
----------- EVENTS -------------
--------------------------------
create table action_statut_update_event
(
    id              serial primary key,
    collectivite_id integer references collectivite                    not null,
    referentiel     referentiel                                        not null,
    created_at      timestamp with time zone default CURRENT_TIMESTAMP not null
);
comment on table action_statut_update_event is
    'Used by business only to trigger score computation';

alter table action_statut_update_event
    -- Disallow all since business use a privileged postgres access (for now).
    enable row level security;

create or replace function after_action_statut_insert_write_event() returns trigger as
$$
declare
    relation action_relation%ROWTYPE;
begin
    select * into relation from action_relation where id = NEW.action_id limit 1;
    insert into action_statut_update_event values (default, NEW.collectivite_id, relation.referentiel, default);
    return null;
end;
$$ language plpgsql security definer;

create trigger after_action_statut_insert
    after insert or update
    on action_statut
    for each row
execute procedure after_action_statut_insert_write_event();
