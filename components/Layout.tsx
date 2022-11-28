import React from 'react';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='w-screen'>
      <header className='bg-orange h-24 flex justify-center items-center'>
        My recipe book
      </header>
      <main className='p-4 bg-yellow'>{children}</main>
      <footer className='bg-orange h-12 flex justify-center items-center absolute bottom-0 w-full'>
        <span>
          Made by{' '}
          <a
            href='https://github.com/aledeloss'
            target='_blank'
            rel='noreferrer'
          >
            Ale Delos
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Layout;
