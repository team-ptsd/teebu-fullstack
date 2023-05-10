'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';

type SignInInputs = {
  email: string;
  password: string;
};

const AuthSignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>();

  const onSubmit: SubmitHandler<SignInInputs> = (data: SignInInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className={'font-bold text-2xl text-center mb-4'}>로그인</h3>

      <div className={'flex flex-col gap-2'}>
        <div className={'flex justify-between'}>
          <label htmlFor={'email'}>이메일</label>
          {errors.email && <span className={'text-red-500 ml-2'}>{errors.email.message}</span>}
        </div>
        <input
          id={'email'}
          type={'email'}
          {...register('email', {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          })}
          className={'border border-gray-300 dark:border-gray-700 rounded-md p-2 mb-4'}
        />

        <label htmlFor={'password'}>비밀번호</label>
        <input
          id={'password'}
          type={'password'}
          {...register('password', { required: true })}
          className={'border border-gray-300 dark:border-gray-700 rounded-md p-2 mb-4'}
        />

        <button type={'submit'} className={'bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2'}>
          로그인
        </button>

        <div className={'flex justify-end'}>
          <Link href={'/auth/sign-up'} className={'text-gray-400'}>
            회원가입
          </Link>
        </div>
      </div>
    </form>
  );
};

export default AuthSignInForm;
