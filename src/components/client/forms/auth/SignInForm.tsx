'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

type SignInInputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { register, handleSubmit } = useForm<SignInInputs>();

  const onSubmit: SubmitHandler<SignInInputs> = (data: SignInInputs) => {
    console.log(data);
  };

  return <form onSubmit={handleSubmit(onSubmit)}>SignIn</form>;
};

export default SignInForm;
