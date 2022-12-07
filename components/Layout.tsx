import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='w-screen min-h-screen bg-yellow'>
      <Head>
        <title>My recipe book</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='p-4 mb-4'>{children}</main>
      <footer className='bg-orange h-12 flex justify-center items-center fixed bottom-0 w-full'>
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
