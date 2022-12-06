import Link from 'next/link';
import React from 'react';

interface LinkData {
  route: string;
  label: string;
}
const navData: LinkData[] = [
  {
    route: '/recipes/new',
    label: 'New'
  },
  {
    route: '/',
    label: 'List'
  }
];

const Header = () => {
  return (
    <header className='bg-orange p-4 h-24 flex justify-between items-center'>
      <Link href='/'>My recipe book</Link>
      <nav>
        <ul className='flex justify-between'>
          <>
            {navData.map((link) => {
              return (
                <li className='w-24 flex justify-end' key={link.route}>
                  <Link href={link.route}>{link.label}</Link>
                </li>
              );
            })}
          </>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
