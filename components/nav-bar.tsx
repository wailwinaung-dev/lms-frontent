import React from 'react';
import Image from 'next/image';
import NavItems from './nav-items';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
      <NavItems />
    </nav>
  );
};

export default NavBar;
