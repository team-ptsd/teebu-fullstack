'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const ThemeSwitchBtn = () => {
  const router = useRouter();

  const onClick = () => {
    Cookies.set('theme', Cookies.get('theme') === 'dark' ? 'light' : 'dark');
    router.refresh();
  };

  return <button onClick={onClick}>ThemeSwitchBtn</button>;
};

export default ThemeSwitchBtn;
