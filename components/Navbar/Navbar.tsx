/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Container } from '../ui/Container';
import { MainNav } from './MainNav';
import { NavbarActions } from './NavbarActions';

export const revalidate = 0;

export const Navbar = async () => {
  return (
    <div className='border-b'>
      <div className='container mx-auto'>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-18 items-center justify-between'>
          <Link href='/'>
            <img src='/logo.svg' alt='' />
          </Link>

          <MainNav />
          <NavbarActions />
        </div>
      </div>
    </div>
  );
};
