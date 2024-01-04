'use client';
import { Category } from '@/types';
import { useRouter } from 'next/navigation';

/* eslint-disable @next/next/no-img-element */
interface CategoryItemProps {
  item: Category;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  const router = useRouter();

  return (
    <div
      className='flex flex-col space-y-2 items-center justify-center cursor-pointer md:p-10 p-2 rounded-2xl'
      onClick={() => router.push(`/category/${item?.id}`)}
    >
      <img
        style={{ objectFit: 'cover' }}
        src='/product1.jpg'
        alt='product'
        className='bg-cover bg-center w-[200px] h-[182px] rounded-sm'
      />
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-lg font-bold'>{item.name}</h2>
      </div>
    </div>
  );
};
