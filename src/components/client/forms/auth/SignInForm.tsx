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
      <h3 className={'font-bold text-2xl text-center mb-8'}>로그인</h3>

      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'email'}>이메일</label>
        <input
          id={'email'}
          type={'email'}
          {...register('email', { required: true })}
          className={'border border-gray-300 dark:border-gray-700 rounded-md p-2'}
        />
      </div>
    </form>
  );
};

export default SignInForm;
