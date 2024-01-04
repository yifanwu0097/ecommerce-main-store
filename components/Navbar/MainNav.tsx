'use client';

import { cn } from '@/lib/utils';
import { TempData } from '@/types';
import { Popover } from 'antd';
import DownOutlined from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ProductNav } from './ProductNav';

export const MainNav: React.FC = () => {
  const items = [
    {
      id: 1,
      label: '3D printers',
      href: '',
    },
    {
      id: 2,
      label: 'Industrial 3D printers',
      href: '',
    },
    {
      id: 1,
      label: 'Resin 3D printers',
      href: '',
    },
    {
      id: 1,
      label: 'SLS 3d printers',
      href: '',
    },
  ];
  const pathname = usePathname();
  // const routes = data?.map((route) => ({
  //   href: route.href,
  //   label: route.label,
  //   active: pathname === `/${route.href}`,
  // }));

  const content = (
    <div className='grid grid-cols-4 gap-6 px-5 pb-5 pt-2'>
      <ProductNav items={items} heading='3d Printers' />
      <ProductNav items={items} heading='3d Scanner' />
      <ProductNav items={items} heading='Plastic 3d printers' />
      <ProductNav items={items} heading='Resin. Washing and' />
    </div>
  );
  const routes = [
    {
      id: '1',
      href: '/',
      label: 'Trang Chủ',
      active: pathname === `/`,
    },
    {
      id: '2',
      href: '/about-us',
      label: 'Giới thiệu',
      active: pathname === `/`,
    },
    {
      id: '3',
      href: '/products',
      label: (
        <Popover content={content} arrow={false}>
          <div className='flex gap-2'>
            <p>Sản Phẩm</p>
            <DownOutlined width={100} />
          </div>
        </Popover>
      ),
      active: pathname === `/`,
    },
    {
      id: '4',
      href: '/contact-us',
      label: 'Liên Hệ',
      active: pathname === `/`,
    },
    {
      id: '5',
      href: '/policies',
      label: 'Chính Sách',
      active: pathname === `/`,
    },
    {
      id: '6',
      href: '/faqs',
      label: 'Hỏi Đáp',
      active: pathname === `/`,
    },
  ];
  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {routes?.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            ' font-semibold transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
