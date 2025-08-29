import React from 'react';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LogOut } from 'lucide-react';

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
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <LogOut className="text-cta-gold" />
        </div>
      </div>
    </div>
  );
};

export default NavItems;
