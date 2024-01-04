/* eslint-disable @next/next/no-img-element */
'use client';

import { ShoppingCart } from 'lucide-react';

import Currency from '@/components/ui/currency';
import { Button } from '@/components/ui/button';
import { Filament, Product, Warranty } from '@/types';
import useCart from '@/hooks/use-cart';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useEffect, useState } from 'react';
import { BroughtTogether } from '@/collections/BroughtTogetherList';
import { useRouter } from 'next/navigation';

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [selectedFilament, setSelectedFilament] = useState<Filament | null>(
    null
  );
  const [selectedWarranty, setSelectedWarranty] = useState<Warranty | null>(
    null
  );

  const onFilamentChange = ({ target: { value } }: RadioChangeEvent) => {
    setSelectedFilament(
      data.filaments.find((filament) => filament.id == value) ?? null
    );
  };
  const onWarrantyChange = ({ target: { value } }: RadioChangeEvent) => {
    setSelectedWarranty(
      data.warranties.find((warranty) => warranty.id == value) ?? null
    );
  };

  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data, selectedFilament, selectedWarranty);
  };
  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <h1 className='text-3xl mt-8 font-bold text-gray-900'>{data.name}</h1>

      <hr className='mt-8' />

      <div className='flex'>
        {Array.from({ length: data.rating }, (_, index) => (
          <img className='w-8' key={index} src='/star.svg' alt='star' />
        ))}
      </div>

      <div className='flex items-end justify-between mt-5'>
        <p className='text-2xl font-bold text-gray-900'>
          <Currency
            value={
              +data?.price +
              +(selectedFilament?.value ?? 0) +
              +(selectedWarranty?.value ?? 0)
            }
          />
        </p>
      </div>

      <div className='space-y-1'>
        {data.specifications.map((specs) => {
          return (
            <p key={specs.value} className='text-[#78788C] text-sm mt-4'>
              ● {specs.name}: {specs.value}
            </p>
          );
        })}
        <p className='text-[#78788C] text-sm'>{data.description}</p>
      </div>
      {data.filaments.length > 0 && (
        <div className='my-4'>
          <Radio.Group
            options={[
              { label: 'None', value: 0 },
              ...data.filaments.map((filament) => {
                return {
                  label: filament.name,
                  value: filament.id,
                };
              }),
            ]}
            onChange={onFilamentChange}
            value={selectedFilament?.id ?? 0}
            optionType='button'
            defaultValue={0}
          />
        </div>
      )}
      {data.warranties.length > 0 && (
        <div className='my-4'>
          <Radio.Group
            options={[
              { label: 'No Warranty', value: 0 },
              ...data.warranties.map((warranty) => {
                return {
                  label: warranty.duration + ' Months Warranty',
                  value: warranty.id,
                };
              }),
            ]}
            onChange={onWarrantyChange}
            value={selectedWarranty?.id ?? 0}
            optionType='button'
          />
        </div>
      )}

      <div className='flex sm:flex-row flex-col gap-5 my-5'>
        <Button onClick={onAddToCart} size={'lg'} variant={'outline'}>
          <ShoppingCart color='#0037A1' className='mr-2' />
          Add to cart
        </Button>

        <Button
          onClick={() => {
            onAddToCart();
            router.push('/shipping-info');
          }}
          size={'lg'}
        >
          Buy Now
        </Button>
      </div>
      {/* <BroughtTogether /> */}
    </div>
  );
};

export default Info;
