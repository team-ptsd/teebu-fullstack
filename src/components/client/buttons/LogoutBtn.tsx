'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/app/supabase-provider';

const LogoutBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { supabase } = useSupabase();

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      await supabase.auth.signOut();
      router.push('/auth/sign-in');
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <button disabled={isLoading} onClick={handleLogout}>
      로그아웃
    </button>
  );
};

export default LogoutBtn;
