/* eslint-disable @next/next/no-img-element */
'use client';
import { Product } from '@/types';
import { Rate } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface ProductProps {
  data: Product;
}

export const ProductItem: React.FC<ProductProps> = ({ data }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      onClick={() => router.push(`/product/${data?.id}`)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='flex flex-col space-y-2 items-center justify-center my-6 cursor-pointer p-7 shadow-2xl rounded-2xl bg-white'
    >
      {isHovered && data.videos?.length > 0 ? (
        <div className=''>
          <video
            muted
            autoPlay
            loop
            style={{ width: '300px', height: '282px' }}
          >
            <source src={data.videos[0].url} />
          </video>
        </div>
      ) : (
        // data.images.map((image, index) => (
        <img
          className='bg-cover bg-center w-[300px] h-[282px] rounded-sm'
          src={data.images[0].url}
          alt={`product${data.images[0].url}`}
          style={{ objectFit: 'cover' }}
          // style={{ width: "300px", height: "282px", borderRadius: "20px" }}
        />
        // ))
      )}
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-lg font-bold'>{data?.name}</h2>
        {/* <div className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <img key={index} src="/star.svg" alt="star" />
          ))}
        </div> */}
        <Rate style={{ color: '#ff710b' }} disabled defaultValue={5} />
        <p className='font-bold text-lg text-[#ff710b]'>{data?.price} VNĐ</p>
      </div>
    </div>
  );
};
