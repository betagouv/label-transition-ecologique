import {NextRequest} from 'next/server';
import {z} from 'zod';
import {sendEmail} from 'src/utils/sendEmail';
import {
  authError,
  getDbUserFromRequest,
} from 'src/supabase/getDbUserFromRequest';

// schéma des données attendues
const invitationSchema = z.object({
  /** Adresse à laquelle envoyer l'invitation */
  to: z.string().email(),
  /** Utilisateur envoyant l'invitation */
  from: z.object({
    prenom: z.string(),
    nom: z.string(),
    email: z.string().email(),
  }),
  /** Collectivité à laquelle est attachée l'invitation */
  collectivite: z.string(),
  /** Lien pour activer l'invitation */
  invitationUrl: z.string(),
});

type Invitation = z.infer<typeof invitationSchema>;

/**
 * Endpoint pour envoyer le mail d'invitation à rejoindre une collectivité
 */
export async function POST(request: NextRequest) {
  // vérifie l'utilisateur courant
  const user = await getDbUserFromRequest(request);
  if (!user) {
    return authError;
  }

  // vérifie les paramètres
  const invitation = (await request.json()) as Invitation;
  const verifyArgs = invitationSchema.safeParse(invitation);
  if (!verifyArgs.success) {
    console.error('POST invite error', verifyArgs.error);
    return Response.json({error: 'Arguments non valides'}, {status: 500});
  }

  // génère et envoi le mail
  const {to, collectivite} = invitation;
  const res = await sendEmail({
    to,
    subject: `Rejoignez ${collectivite} sur Territoires en Transitions`,
    html: mailTemplate(invitation),
  });

  return Response.json(res);
}

// laisse passer les requêtes preflight
export async function OPTIONS(request: NextRequest) {
  return Response.json({});
}

// formatage du mail
const mailTemplate = ({from, collectivite, invitationUrl}: Invitation) => {
  const {email, nom, prenom} = from;

  return `<h2>Territoires en Transitions</h2>
  <p>Bonjour,</p>

<p>${prenom} ${nom} (${email}) vous invite à contribuer pour ${collectivite} sur Territoires en Transitions.</p> 

<a href="${invitationUrl}"
  style="font-size: 1rem; font-weight: 600; border: 1px solid #6A6AF4; border-radius: 8px; text-align: center; padding: 1rem; display: block;"
  >Je rejoins la collectivité</a
>

<p><i>Envie d’en savoir plus sur la plateforme ? RDV sur : <a href="https://www.territoiresentransitions.fr/outil-numerique">https://www.territoiresentransitions.fr/outil-numerique</a></p>

<p>À bientôt sur la plateforme !</p>

<p>
Un problème ? Contactez-nous à <br /><a
    href="mailto:contact@territoiresentransitions.fr"
    >contact@territoiresentransitions.fr</a
  >
</p>
`;
};