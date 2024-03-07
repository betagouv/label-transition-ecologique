import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Tab, Tabs} from '@design-system/Tabs';
import {ModalFooterOKCancel} from '@design-system/Modal';
import {Field, FieldMessage} from '@design-system/Field';
import {Input} from '@design-system/Input';
import {SignupDataStep1, SignupPropsWithState} from './type';
import {PasswordStrengthMeter} from '@components/auth/PasswordStrengthMeter';

/** Gestionnaire d'état pour le formulaire de l'étape 1 */
const useSignupStep1 = (isPasswordless: boolean, email: string) => {
  const validationSchema = z.object({
    email: z.string().email({message: 'Un email valide est requis'}),
    password: z
      .string()
      .refine(value => (isPasswordless ? true : value.length >= 8), {
        message: 'Le mot de passe doit comporter au moins 8 caractères',
      }),
  });
  return useForm({
    reValidateMode: 'onChange',
    resolver: zodResolver(validationSchema),
    defaultValues: {
      password: '',
      email: email || '',
    },
  });
};

/**
 * Affiche l'étape 1 du panneau de création de compte
 * (saisir un email et éventuellement un mot de passe)
 */
export const SignupStep1 = (props: SignupPropsWithState) => {
  const {formState, withPassword} = props;
  const {email} = formState;
  const [isPasswordless, setIsPasswordless] = useState(!withPassword);
  const form = useSignupStep1(isPasswordless, email);

  return (
    <Tabs
      className="justify-center"
      defaultActiveTab={isPasswordless ? 0 : 1}
      onChange={activeTab => {
        if (activeTab === 0) {
          // reset le champ mdp qui peut être rempli quand on passe d'un onglet à l'autre
          form.setValue('password', '');
          setIsPasswordless(true);
        } else {
          setIsPasswordless(false);
        }
      }}
    >
      <Tab label="Compte sans mot de passe">
        <SignupStep1Form {...props} form={form} isPasswordless />
      </Tab>
      <Tab label="Compte avec mot de passe">
        <SignupStep1Form {...props} form={form} />
      </Tab>
    </Tabs>
  );
};

/**
 * Affiche le formulaire pour l'étape 1 de la création de compte
 */
const SignupStep1Form = (
  props: SignupPropsWithState & {
    form: ReturnType<typeof useSignupStep1>;
    isPasswordless?: boolean;
  }
) => {
  const {
    error,
    isLoading,
    isPasswordless,
    onSubmit,
    onCancel,
    getPasswordStrength,
    form,
    formState: {setEmail},
  } = props;
  const {
    handleSubmit,
    register,
    watch,
    formState: {isValid, errors},
  } = form;

  const onSubmitForm = (data: SignupDataStep1) => {
    // enregistre les données car on a besoin de l'email pour vérifier l'otp à
    // l'étape suivante, dans le cas où l'utilisateur saisi directement le code
    // OTP plutôt que de cliquer sur le lien
    setEmail(data.email);
    // envoi les données
    onSubmit(data);
  };

  const email = watch('email');
  const password = watch('password');
  const res = isPasswordless ? null : getPasswordStrength(password, [email]);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmitForm)}>
      <Field
        title="Email professionnel *"
        htmlFor="email"
        state={errors.email ? 'error' : undefined}
        message={errors.email?.message.toString()}
      >
        <Input id="email" type="text" {...register('email')} />
      </Field>
      {!isPasswordless && (
        <Field
          title="Mot de passe *"
          htmlFor="password"
          state={errors.password ? 'error' : undefined}
          message={errors.password?.message.toString()}
        >
          <Input id="password" type="password" {...register('password')} />
          <PasswordStrengthMeter strength={res} />
        </Field>
      )}
      {error && (
        <FieldMessage
          data-test="error"
          messageClassName="mt-4"
          state="error"
          message={error}
        />
      )}
      <ModalFooterOKCancel
        btnCancelProps={{onClick: onCancel}}
        btnOKProps={{
          type: 'submit',
          disabled: !isValid || isLoading || (res && res.score < 4),
        }}
      />
    </form>
  );
};
