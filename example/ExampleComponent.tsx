import React, { FC } from 'react';

import {
  SignInFormBox,
  SignInCard,
  SignInContainer,
  SubmitButton,
  H1,
  EmailControl,
  PasswordControl,
  RememberMeControl,
  SignUpLink,
} from '../src/components';

const ExampleComponent: FC = () => {
  return (
    <>
      <SignInContainer direction="column" justifyContent="space-between">
        <SignInCard variant="outlined">
          <H1 children="Sign in" />

          <SignInFormBox>
            <EmailControl placeholder="nameuremail@email.com" />

            <PasswordControl />
            <RememberMeControl />

            <SubmitButton title="Sign in" onSubmit={() => {}} />
            <SignUpLink />
          </SignInFormBox>
        </SignInCard>
      </SignInContainer>
    </>
  );
};

export default ExampleComponent;
