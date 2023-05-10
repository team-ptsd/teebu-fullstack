'use client';

import { useSupabase } from '@/app/supabase-provider';

const LogoutBtn = () => {
  const { supabase } = useSupabase();
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutBtn;
