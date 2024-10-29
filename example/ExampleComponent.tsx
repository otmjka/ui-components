import React, { FC, useCallback } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { SignInForm, SignInFormInput } from '../src/components';

const ExampleComponent: FC = () => {
  const onSubmit: SubmitHandler<SignInFormInput> = (data) => console.log(data);

  return (
    <>
      <SignInForm onSubmit={onSubmit} />
    </>
  );
};

export default ExampleComponent;
