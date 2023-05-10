'use client';

import { useRouter } from 'next/navigation';
import { useSupabase } from '@/app/supabase-provider';

const LogoutBtn = () => {
  const router = useRouter();
  const { supabase } = useSupabase();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push('/auth/sign-in');
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutBtn;
