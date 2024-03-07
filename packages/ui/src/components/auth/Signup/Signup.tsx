import {MailSendMessage} from '@components/auth/Login/MailSendMessage';
import {useFormState} from '@components/auth/Login/useFormState';
import {SignupProps} from './type';
import {SignupStep1} from './SignupStep1';
import {SignupStep2} from './SignupStep2';
import {SignupStep3} from './SignupStep3';
import {SignupStep4} from './SignupStep4';

/**
 * Affiche le panneau création de compte
 */
export const Signup = (props: SignupProps) => {
  const formState = useFormState(props);
  const {view} = props;

  if (view === 'etape1') {
    return <SignupStep1 {...props} formState={formState} />;
  }

  if (view === 'etape2') {
    return <SignupStep2 {...props} formState={formState} />;
  }

  if (view === 'etape3') {
    return <SignupStep3 {...props} formState={formState} />;
  }

  if (view === 'etape4') {
    return <SignupStep4 {...props} formState={formState} />;
  }

  if (view === 'msg_lien_envoye') {
    return (
      <MailSendMessage
        data-test="lien-envoye"
        message1="Pour activer votre compte, veuillez consulter votre boite mail et"
        message2="suivre le lien reçu !"
      />
    );
  }
};
