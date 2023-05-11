'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSupabase } from '@/app/supabase-provider';
import useModalStore from '@/store/useModalStore';
import { useRouter } from 'next/navigation';

type SignInInputs = {
  email: string;
  password: string;
};

const AuthSignInForm = () => {
  const router = useRouter();
  const setModal = useModalStore(store => store.setModal);

  const [isLoading, setIsLoading] = useState(false);
  const { supabase } = useSupabase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>();

  const onSubmit: SubmitHandler<SignInInputs> = async (inputs: SignInInputs) => {
    try {
      setIsLoading(true);
      await supabase.auth.signInWithPassword({
        email: inputs.email,
        password: inputs.password,
      });

      router.push('/');
    } catch (e) {
      setModal({
        isOpen: true,
        title: '로그인',
        content: '로그인에 실패했습니다.',
      });
      setIsLoading(false);
    }
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

        <button
          disabled={isLoading}
          type={'submit'}
          className={'bg-blue-500 disabled:bg-gray-300 hover:bg-blue-600 text-white rounded-md p-2'}
        >
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
