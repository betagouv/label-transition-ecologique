/**
 * Sélecteurs d'éléments pour les fonctionnalités d'auth.
 */

export const LocalSelectors = {
  'demande de lien de réinitialisation du mdp': {
    selector: '[data-test=PasswordRecovery]',
    children: {
      email: 'input[name=email]',
      Valider: 'button[type=submit]',
    },
  },
  'message lien envoyé': {
    selector: '[data-test=PasswordRecoverySucceed]',
    children: {
      'Retour à la connexion': 'button',
    },
  },
  'changer de mdp': {
    selector: '[data-test=Recovering]',
  },
  'formulaire de réinitialisation du mdp': {
    selector: '[data-test=ResetPassword]',
    children: {
      mdp: 'input[name=password]',
      Valider: 'button[data-test=ok]',
    },
  },
  'réinitialisation du mot de passe réussie': {
    selector: '[data-test=ResetPasswordSucceed]',
  },
  'réinitialisation du mot de passe en erreur': {
    selector: '[data-test=ResetPasswordFailed]',
  },
  'dialogue de validation des CGU': {
    selector: '[data-test=AccepterCGU]',
    children: {
      Fermer: '[data-test=close-modal]',
    },
  },
  'Valider les CGU': {
    selector: '[data-test=AccepterCGUBtn]',
  },
  'Connexion avec mot de passe': {
    selector: '[id="tab-1"]',
  },
};
