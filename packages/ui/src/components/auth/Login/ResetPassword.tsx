import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {ModalFooterOKCancel} from '@design-system/Modal';
import {Field, FieldMessage} from '@design-system/Field';
import {Input} from '@design-system/Input';
import {LoginPropsWithState} from './type';
import {PasswordStrengthMeter} from '@components/auth/PasswordStrengthMeter';

/** Gestionnaire d'état pour le formulaire */
const useResetPassword = () => {
  const validationSchema = z.object({
    password: z.string().refine(value => value.length >= 8, {
      message: 'Le mot de passe doit comporter au moins 8 caractères',
    }),
  });

  return useForm({
    reValidateMode: 'onChange',
    resolver: zodResolver(validationSchema),
  });
};

/** Réinitialisation du mot de passe après validation du jeton OTP */
export const ResetPassword = (props: LoginPropsWithState) => {
  const {
    error,
    isLoading,
    onCancel,
    onSubmit,
    getPasswordStrength,
    defaultValues,
  } = props;
  const {
    handleSubmit,
    register,
    watch,
    formState: {isValid},
  } = useResetPassword();

  const password = watch('password');
  const res = getPasswordStrength(password, [defaultValues?.email]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-test="ResetPassword">
      <Field
        className="mb-6 md:col-span-2"
        title="Nouveau mot de passe"
        htmlFor="password"
      >
        <Input type="password" {...register('password')} id="password" />
        <PasswordStrengthMeter strength={res} />
      </Field>
      {error && (
        <FieldMessage messageClassName="mt-4" state="error" message={error} />
      )}
      <ModalFooterOKCancel
        btnOKProps={{
          type: 'submit',
          disabled: !isValid || isLoading || (res && res.score < 4),
        }}
        btnCancelProps={{onClick: onCancel}}
      />
    </form>
  );
};
