import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  H1,
  EmailControl,
  PasswordControl,
  RememberMeControl,
} from '../../components';

import { SignInFormBox } from './SignInFormBox';
import { SignInCard } from './SignInCard';
import { SignInContainer } from './SignInContainer';
import { SubmitButton } from './SubmitButton';
import { SignUpLink } from './SignUpLink';
import { FormFieldNames, SignInFormProps } from './types';

const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  return (
    <SignInContainer direction="column" justifyContent="space-between">
      <SignInCard variant="outlined">
        <H1 children="Sign in" />

        <SignInFormBox onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name={FormFieldNames.email}
            control={control}
            render={({
              field: { name, onChange, value },
              fieldState: { error },
            }) => (
              <EmailControl
                id={FormFieldNames.email}
                {...{ name, value, error: !!error, onChange }}
                placeholder="nameuremail@email.com"
              />
            )}
          />

          <Controller
            name={FormFieldNames.password}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <PasswordControl
                id={FormFieldNames.password}
                {...{ value, error: !!error, onChange }}
                onForgotClick={() => {}}
              />
            )}
          />

          <Controller
            name={FormFieldNames.rememberMe}
            control={control}
            render={({ field: { onChange, value } }) => (
              <RememberMeControl
                id={FormFieldNames.rememberMe}
                {...{ value, onChange }}
              />
            )}
          />

          <SubmitButton title="Sign in" />
          <SignUpLink />
        </SignInFormBox>
      </SignInCard>
    </SignInContainer>
  );
};

export default SignInForm;
