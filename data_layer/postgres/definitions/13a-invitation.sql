--------------------------------
------- INVITATION FLOW --------
--------------------------------
create table private_collectivite_invitation
(
    id              uuid primary key         default gen_random_uuid(),
    role_name       role_name                                          not null,
    collectivite_id integer references collectivite                    not null,
    created_by      uuid references auth.users                         not null,
    created_at      timestamp with time zone default CURRENT_TIMESTAMP not null
);
alter table private_collectivite_invitation
    enable row level security;
create policy allow_read
    on private_collectivite_invitation
    for select
    using (is_any_role_on(collectivite_id));
create policy allow_insert
    on private_collectivite_invitation
    for insert
    with check (is_referent_of(collectivite_id));


create or replace function create_agent_invitation(collectivite_id integer)
    returns json
as
$$
declare
    invitation_id uuid;
begin
    if is_referent_of(create_agent_invitation.collectivite_id)
    then
        select gen_random_uuid() into invitation_id;
        insert into private_collectivite_invitation
        values (invitation_id, 'agent', create_agent_invitation.collectivite_id, auth.uid());
        return json_build_object('message', 'L''invitation a été crée.', 'id', invitation_id);
    else
        perform set_config('response.status', '401', true);
        return json_build_object('error', 'Vous n''êtes pas le référent de cette collectivité.');
    end if;
end
$$ language plpgsql security definer ;

create function latest_invitation(collectivite_id integer)
    returns json
as
$$
declare
    param_collectivite_id integer;
    invitation_id uuid;
begin
    select collectivite_id into param_collectivite_id;
    if is_any_role_on(collectivite_id)
    then
        select into invitation_id id
        from private_collectivite_invitation
        where private_collectivite_invitation.collectivite_id = param_collectivite_id;
        return json_build_object('id', invitation_id);
    else
        perform set_config('response.status', '401', true);
        return json_build_object('error', 'Vous n''avez pas rejoint cette collectivité.');
    end if;
end;
$$ language plpgsql;

create function accept_invitation(invitation_id uuid)
    returns void
as
$$
insert into private_utilisateur_droit(user_id, collectivite_id, role_name, active)
select auth.uid(), collectivite_id, role_name, true
from private_collectivite_invitation
where id = invitation_id
order by created_at
limit 1
$$ language sql security definer;


create or replace function remove_from_collectivite(user_id uuid, collectivite_id integer)
    returns json
as
$$
declare
    param_user_id         uuid;
    param_collectivite_id integer;
begin
    -- parameters are ambiguous
    select user_id into param_user_id;
    select remove_from_collectivite.collectivite_id into param_collectivite_id;

    -- only referents can remove other users.
    if is_referent_of(param_collectivite_id)
    then
        -- deactivate the droits
        update private_utilisateur_droit
        set active      = false,
            modified_at = now()
        where private_utilisateur_droit.collectivite_id = param_collectivite_id
          and user_id = param_user_id;

        -- return success with a message
        perform set_config('response.status', '200', true);
        return json_build_object('message', 'Vous avez retiré les droits à l''utilisateur.');
    else
        perform set_config('response.status', '401', true);
        return json_build_object('error', 'Vous n''êtes pas le référent de cette collectivité.');
    end if;
end;
$$ language plpgsql security definer;
