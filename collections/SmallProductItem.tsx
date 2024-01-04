/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface ProductProps {
  id: string;
  title: string;
  imgSrc: string;
}

export const SmallProductItem: React.FC<ProductProps> = ({
  id,
  title,
  imgSrc,
  // videoSrc,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() =>
        router.push(`/product/${id}`)
      }
      className='flex flex-col space-y-2 items-center my-6 cursor-pointer'
    >
      <div className='shadow-md max-w-45 p-5 flex justify-center items-center rounded-md'>
        <img src={imgSrc} alt='product1' className={`w-28 h-28`} />
      </div>
      <div>
        <h2 className='font-bold'>{title}</h2>
      </div>
    </div>
  );
};
