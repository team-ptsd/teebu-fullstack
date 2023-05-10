'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import useClient from '@/hooks/useClient';

const ThemeSwitchBtn = () => {
  const isClient = useClient();
  const [theme, setTheme] = useState(Cookies.get('theme') === 'dark' ? 'dark' : 'light');
  const router = useRouter();

  const onClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    Cookies.set('theme', Cookies.get('theme') === 'dark' ? 'light' : 'dark');
    router.refresh();
  };

  if (!isClient) return <div className='w-9 h-6 bg-gray-200 dark:bg-slate-400 rounded' />;

  return <button onClick={onClick}>{theme}</button>;
};

export default ThemeSwitchBtn;
