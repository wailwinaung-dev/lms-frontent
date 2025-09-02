import React from 'react';

import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const menus = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Learning Companions',
    href: '/companions'
  },
  {
    title: 'My Journey',
    href: '/my-journey'
  }
];
const NavItems = () => {
  return (
    <div>
      <div className="flex gap-6 items-center font-bold">
        {menus.map((menu) => (
          <Link key={menu.title} href={menu.href} className="">
            {menu.title}
          </Link>
        ))}
        <div className="flex gap-2 items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
