/* eslint-disable @next/next/no-img-element */
'use client';

import { ShoppingBag } from 'lucide-react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import useCart from '@/hooks/use-cart';
import Link from 'next/link';

export const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [productShow, setProductShow] = useState(false);
  const toogleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const toogleProductSubMenu = () => {
    setProductShow(!productShow);
  };
  return (
    <>
      <div className='flex px-5 items-center justify-between'>
        <img src='/logo.svg' alt='logo' />

        <div className=''>
          {navOpen ? (
            <i
              className='fa fa-times'
              onClick={toogleNavbar}
              style={{ fontSize: '26px' }}
              aria-hidden='true'
            ></i>
          ) : (
            <i
              className='fa fa-bars'
              onClick={toogleNavbar}
              style={{ fontSize: '26px' }}
              aria-hidden='true'
            ></i>
          )}
        </div>
      </div>

      {navOpen && (
        <div className='flex px-5 gap-4 mb-10 mt-5 flex-col'>
          <Link
            href='/'
            className='font-bold text-[16px] text-black cursor-pointer'
          >
            Home
          </Link>
          <Link
            href='/about-us'
            className='font-bold text-[16px] text-black cursor-pointer'
          >
            About Us
          </Link>
          <div
            className='flex gap-5 items-center cursor-pointer'
            onClick={toogleProductSubMenu}
          >
            <span className='font-bold text-[16px] text-black '>Products</span>
            {productShow ? (
              <i className='fa fa-chevron-up' aria-hidden='true'></i>
            ) : (
              <i className='fa fa-chevron-down' aria-hidden='true'></i>
            )}
          </div>
          {productShow && (
            <div className='flex flex-col gap-2 ml-10'>
              <span className='font-bold text-[18px]'>3d Printers</span>
              <div className='flex flex-col gap-2 ml-10'>
                <Link href='/' className=' cursor-pointer'>
                  3D Printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Industrial 3D printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Resin 3D printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Sls 3d printers
                </Link>
              </div>

              <span className='font-bold text-[18px]'>3d Scanner</span>
              <div className='flex flex-col gap-2 ml-10'>
                <Link href='/' className=' cursor-pointer'>
                  3D Printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Industrial 3D printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Resin 3D printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Sls 3d printers
                </Link>
              </div>

              <span className='font-bold text-[18px]'>Plastic 3d printers</span>
              <div className='flex flex-col gap-2 ml-10'>
                <Link href='/' className=' cursor-pointer'>
                  3D Printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Industrial 3D printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Resin 3D printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Sls 3d printers
                </Link>
              </div>

              <span className='font-bold text-[18px]'>Resin. Washing and</span>
              <div className='flex flex-col gap-2 ml-10'>
                <Link href='/' className=' cursor-pointer'>
                  3D Printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Industrial 3D printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Resin 3D printers
                </Link>
                <Link href='/' className=' cursor-pointer'>
                  Sls 3d printers
                </Link>
              </div>
            </div>
          )}
          <Link
            href='/contact-us'
            className='font-bold text-[16px] text-black cursor-pointer'
          >
            Contact Us
          </Link>
          <Link
            href='/faqs'
            className='font-bold text-[16px] text-black cursor-pointer'
          >
            FAQs
          </Link>
          <Link
            href='/policies'
            className='font-bold text-[16px] text-black cursor-pointer'
          >
            Policies
          </Link>
          <Link
            href='/payments'
            className='font-bold text-[16px] text-black cursor-pointer'
          >
            Payments
          </Link>
          <Button className='flex items-center rounded-full bg-black px-4 py-2'>
            <ShoppingBag size={20} color='white' />
            <span className='ml-2 text-sm font-medium text-white'>{'1'}</span>
          </Button>
        </div>
      )}
    </>
  );
};
