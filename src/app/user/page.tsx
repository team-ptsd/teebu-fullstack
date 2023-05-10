import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import LogoutBtn from '@/components/client/buttons/LogoutBtn';

const Page = async () => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/auth/sign-in');
  }

  return (
    <div>
      <p>{session?.user.email}</p>
      <LogoutBtn />
    </div>
  );
};

export default Page;
