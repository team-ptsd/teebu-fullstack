import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Noto_Serif_KR } from 'next/font/google';

import SupabaseProvider from '@/app/supabase-provider';

import './globals.css';

const baseFont = Noto_Serif_KR({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Teebu',
  description: 'Sell Your Seal!',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='kr'>
      <body className={baseFont.className}>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
