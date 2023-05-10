import Link from 'next/link';
import ThemeSwitchBtn from '@/components/client/buttons/ThemeSwitchBtn';
import { Suspense } from 'react';
import MyPageBtn from '@/components/server/buttons/MyPageBtn';

const Header = () => {
  return (
    <header className='bg-white dark:bg-slate-600 shadow'>
      <div className='max-w-6xl mx-auto p-2 md:p-4 flex justify-between items-center'>
        <h1 className='font-bold text-xl'>
          <Link href={'/'}>Teebu</Link>
        </h1>

        <nav className='flex gap-4'>
          <ThemeSwitchBtn />

          <Suspense fallback={<div className='w-9 h-6 bg-gray-200 dark:bg-slate-400 rounded' />}>
            {/* @ts-ignore ASC */}
            <MyPageBtn />
          </Suspense>
        </nav>
      </div>
    </header>
  );
};

export default Header;
