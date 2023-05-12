'use client';

import { useSupabase } from '@/app/supabase-provider';

const TestBtn = () => {
  const { supabase } = useSupabase();

  const onClick = async () => {
    const { data } = await supabase.from('products').select('*');

    console.log(data);
  };

  return <button onClick={onClick}>TestBtn</button>;
};

export default TestBtn;
