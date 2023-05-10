import Link from 'next/link';
import { cookies, headers } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';

const MyPageBtn = async () => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <>{session ? <Link href={'/user'}>프로필</Link> : <Link href={'/auth/sign-in'}>로그인</Link>}</>;
};

export default MyPageBtn;
