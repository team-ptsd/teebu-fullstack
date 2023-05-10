import './globals.css';

import { ReactNode, Suspense } from 'react';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Noto_Serif_KR } from 'next/font/google';

import SupabaseProvider from '@/app/supabase-provider';
import Header from '@/components/server/panels/Header';
import Modal from '@/components/client/Modal';

const baseFont = Noto_Serif_KR({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Teebu',
  description: 'Sell Your Seal!',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;

  return (
    <html lang='kr' className={theme === 'dark' ? 'dark' : 'light'}>
      <body className={`${baseFont.className} dark:text-white dark:bg-slate-600`}>
        <SupabaseProvider>
          <Modal />

          <Header />

          <main className='max-w-6xl mx-auto min-h-[calc(100vh-60px)]'>{children}</main>
        </SupabaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
