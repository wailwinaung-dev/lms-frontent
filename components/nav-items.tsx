'use client';
import React from 'react';

import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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
  },
  {
    title: 'Subscription',
    href: '/subscription'
  }
];
const NavItems = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex gap-6 items-center font-semibold">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={cn(
              pathname === menu.href &&
                'text-cta-gold text-shadow-black font-bold'
            )}
          >
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
