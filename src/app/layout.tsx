import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Teebu',
  description: 'Sell Your Seal!',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='kr'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
