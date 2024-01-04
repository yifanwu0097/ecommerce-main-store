import Image from 'next/image';
import { X } from 'lucide-react';

import IconButton from '@/components/ui/IconButton';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';
import { Filament, Product, Warranty } from '@/types';
import React from 'react';

interface CartItemProps {
  data: {
    product: Product;
    filament: Filament | null;
    warranty: Warranty | null;
  };
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.product.id);
  };

  return (
    <li className='flex py-6 border-b'>
      <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
        <Image
          fill
          src={data.product.images[0].url}
          alt=''
          className='object-cover object-center'
        />
      </div>
      <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <p className=' text-lg font-semibold text-black'>
              {data.product.name}
            </p>
          </div>

          <div className='mt-1 flex flex-col text-sm'>
            {data.product.specifications?.map((spec, i) => {
              return (
                <div className='flex gap-2' key={i}>
                  <p className='text-gray-500 w-[120px]'>{spec.name}</p>
                  <p className='ml-4 border-gray-200 pl-4 text-gray-500'>
                    {spec.value}
                  </p>
                </div>
              );
            })}
          </div>
          <Currency
            value={
              +data.product.price +
              +(data.filament?.value ?? 0) +
              +(data.warranty?.value ?? 0)
            }
          />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
