import jwt_decode, {JwtPayload} from 'jwt-decode';
import {UtilisateurConnecteLocalStorable} from 'storables/UtilisateurConnecteStorable';
import {utilisateurConnecteStore} from './localStore';
import type {UtilisateurDroitsInterface} from 'generated/models/utilisateur_droits';
import {UtilisateurDroits} from 'generated/models/utilisateur_droits';
import {ENV} from 'environmentVariables';
import {ChangeNotifier} from 'core-logic/api/reactivity';

const _dummyToken = 'xx';

/**
 * Authentication, only manage rights for now.
 */
class Authentication extends ChangeNotifier {
  get currentUtilisateurDroits(): UtilisateurDroits[] | null {
    return this._currentUtilisateurDroits;
  }

  set currentUtilisateurDroits(value: UtilisateurDroits[] | null) {
    this._currentUtilisateurDroits = value;
    this.notifyListeners();
  }

  private _currentUtilisateurDroits: UtilisateurDroits[] | null = [];
}

/**
 * The global auth object.
 */
export const auth = new Authentication();

utilisateurConnecteStore.addListener(() => {
  auth.currentUtilisateurDroits = null;
});

/**
 * Save fake tokens, the user will be connected until replaced.
 */
export const saveDummyTokens = () => {
  const storable = new UtilisateurConnecteLocalStorable({
    ademe_user_id: 'dummy',
    access_token: _dummyToken,
    refresh_token: _dummyToken,
    email: 'dummy@territoiresentransitions.fr',
    nom: 'Territoires en Transitions',
    prenom: 'Dummy',
  });
  utilisateurConnecteStore.store(storable);
};

/**
 * Save the access token, the user is considered connected as long as the token is valid.
 */
export const saveTokens = (accessToken: string, refreshToken: string) => {
  const decoded = jwt_decode<JwtPayload>(accessToken);
  const storable = new UtilisateurConnecteLocalStorable({
    ademe_user_id: decoded['sub'] || '',
    access_token: accessToken,
    refresh_token: refreshToken,
    email: '', // decoded["email"] ||
    nom: '', // decoded["family_name"] ||
    prenom: '', // decoded["given_name"] ||
  });
  utilisateurConnecteStore.store(storable);
};

/**
 * Returns true if the user have a valid token.
 */
export const connected = (): boolean => {
  let utilisateur: UtilisateurConnecteLocalStorable;

  try {
    utilisateur = utilisateurConnecteStore.retrieveById(
      UtilisateurConnecteLocalStorable.id
    );
  } catch (e) {
    return false;
  }
  if (utilisateur === null) return false;
  if (utilisateur.access_token === _dummyToken) return true;

  const decoded = jwt_decode<JwtPayload>(utilisateur.access_token);
  // const secondsLeft = decoded.exp ? decoded.exp - Date.now() / 1000 : 1;
  // return secondsLeft > 0;

  return decoded !== null && decoded !== undefined;
};

/**
 * Retrieve current user, returns an UtilisateurConnecte if the user is connected otherwise returns null.
 */
export const currentUser = (): UtilisateurConnecteLocalStorable | null => {
  if (connected())
    return utilisateurConnecteStore.retrieveById(
      UtilisateurConnecteLocalStorable.id
    );
  return null;
};

/**
 * Retrieve the current access token, returns null if not connected
 */
export const currentAccessToken = (): string | null => {
  const user = currentUser();
  if (!user) return null;
  return user.access_token;
};

/**
 * Retrieve the current refresh token, returns null if not connected
 */
export const currentRefreshToken = (): string | null => {
  const user = currentUser();
  if (!user) return null;
  return user.refresh_token;
};

/**
 * Sign the current user out. Return true on success, false otherwise.
 */
export const signOut = (): boolean => {
  return utilisateurConnecteStore.deleteById(
    UtilisateurConnecteLocalStorable.id
  );
};

/**
 * Retrieve utilisateurs droits from our API, returns an empty list if not connected
 */
export const currentUtilisateurDroits = async (
  force?: boolean | undefined
): Promise<UtilisateurDroits[] | null> => {
  const user = currentUser();
  if (!user) return [];
  if (droitsFetchedForUser === user.ademe_user_id && !force) {
    return auth.currentUtilisateurDroits;
  }

  droitsFetchedForUser = user.ademe_user_id;
  const token = currentAccessToken();
  const api = ENV.backendHost;
  const endpoint = 'v2/utilisateur_droits';
  const response = await fetch(`${api}/${endpoint}/${user.ademe_user_id}`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    droitsFetchedForUser = '';
    return null;
  } // we should raise

  const data = (await response.json()) as UtilisateurDroitsInterface[];

  const droits = data.map<UtilisateurDroits>(
    serialized => new UtilisateurDroits(serialized)
  );

  auth.currentUtilisateurDroits = droits;
  return droits;
};

// todo should use memoization on fetch.
let droitsFetchedForUser = '';
