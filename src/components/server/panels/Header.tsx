import Link from 'next/link';
import ThemeSwitchBtn from '@/components/client/buttons/ThemeSwitchBtn';

const Header = () => {
  return (
    <header className='bg-white dark:bg-slate-600 shadow'>
      <div className='max-w-6xl mx-auto p-2 md:p-4 flex justify-between items-center'>
        <h1 className='font-bold text-xl'>
          <Link href={'/'}>Teebu</Link>
        </h1>

        <nav className='flex gap-4'>
          <ThemeSwitchBtn />

          <Link href={'/auth/sign-in'}>Sign in</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
