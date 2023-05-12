import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import LogoutBtn from '@/components/client/buttons/LogoutBtn';

type Profile = {
  id: string;
  user_id: string;
  user_name: string;
  created_at: string;
};

export const revalidate = false;

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

  const { data: users } = await supabase.from('profiles').select('*').eq('user_id', session.user.id);

  if (!users) {
    redirect('/auth/sign-in');
  }

  const user = (users as Profile[])[0];

  return (
    <div className='max-w-6xl mx-auto p-2 md:p-4 flex justify-between'>
      <p>{user.user_name}</p>

      <LogoutBtn />
    </div>
  );
};

export default Page;
