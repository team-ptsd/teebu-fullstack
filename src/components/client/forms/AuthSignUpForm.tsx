'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSupabase } from '@/app/supabase-provider';

type SignUnInputs = {
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
};

const AuthSignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { supabase } = useSupabase();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUnInputs>();

  const onSubmit: SubmitHandler<SignUnInputs> = async (inputs: SignUnInputs) => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: inputs.email,
      password: inputs.password,
    });
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className={'font-bold text-2xl text-center mb-4'}>회원가입</h3>

      <div className={'flex flex-col gap-2'}>
        <div className={'flex justify-between'}>
          <label htmlFor={'email'}>이메일</label>
          {errors.email && <span className={'text-red-500 ml-2'}>{errors.email.message}</span>}
        </div>
        <input
          id={'email'}
          type={'email'}
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          })}
          className={'border border-gray-300 dark:border-gray-700 rounded-md p-2 mb-4'}
        />

        <div className={'flex justify-between'}>
          <label htmlFor={'password'}>비밀번호</label>
          {errors.password && <span className={'text-red-500 ml-2'}>{errors.password.message}</span>}
        </div>
        <input
          id={'password'}
          type={'password'}
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이어야 합니다.',
            },
          })}
          className={'border border-gray-300 dark:border-gray-700 rounded-md p-2 mb-4'}
        />

        <div className={'flex justify-between'}>
          <label htmlFor={'passwordConfirm'}>비밀번호 확인</label>
          {errors.passwordConfirm && <span className={'text-red-500 ml-2'}>{errors.passwordConfirm.message}</span>}
        </div>
        <input
          id={'passwordConfirm'}
          type={'password'}
          {...register('passwordConfirm', {
            required: true,
            validate: value => value === watch('password') || '비밀번호가 일치하지 않습니다.',
          })}
          className={'border border-gray-300 dark:border-gray-700 rounded-md p-2 mb-4'}
        />

        <div className={'flex justify-between'}>
          <label htmlFor={'username'}>사용자 이름</label>
          {errors.username && <span className={'text-red-500 ml-2'}>{errors.username.message}</span>}
        </div>
        <input
          id={'username'}
          type={'username'}
          {...register('username', { required: '이름을 입력해주세요.' })}
          className={'border border-gray-300 dark:border-gray-700 rounded-md p-2 mb-4'}
        />

        <button
          disabled={isLoading}
          type={'submit'}
          className={'bg-blue-500 disabled:bg-gray-300 hover:bg-blue-600 text-white rounded-md p-2'}
        >
          회원가입
        </button>

        <div className={'flex justify-end'}>
          <Link href={'/auth/sign-in'} className={'text-gray-400'}>
            로그인
          </Link>
        </div>
      </div>
    </form>
  );
};

export default AuthSignUpForm;
