import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-[calc(100vh-60px)] flex justify-center items-center p-2 md:p-4'>
      <div className='max-w-xl w-full border rounded-xl p-2 md:p-4'>{children}</div>
    </div>
  );
};

export default Layout;
