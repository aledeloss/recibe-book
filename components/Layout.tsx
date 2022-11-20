import React from 'react';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div>Navbar</div>
      <main>{children}</main>
      <div>Footer</div>
    </>
  );
};

export default Layout;
