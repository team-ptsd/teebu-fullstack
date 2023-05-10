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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className={'font-bold text-2xl text-center'}>로그인</h3>
    </form>
  );
};

export default SignInForm;
