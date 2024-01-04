import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Image from 'next/image';

export const BroughtTogether = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className='border rounded-lg'>
      <div className='p-4 border-b'>
        <h2 className='font-bold text-xl'>Frequently bought together</h2>
      </div>
      <div className='p-5'>
        <div className='space-y-6'>
          <Checkbox onChange={onChange}>
            <div className='flex gap-4 items-center'>
              <Image width={80} height={100} src="/product2.png" alt="product2" />
              <h2>1 x Anycubic Filament 235S</h2>
            </div>
          </Checkbox>
          <Checkbox onChange={onChange}>
            <div className='flex gap-4 items-center'>
              <Image width={80} height={100} src="/product3.png" alt="product2" />
              <h2>1 x Anycubic Kobra Plus</h2>
            </div>
          </Checkbox>
        </div>
      </div>
    </div>
  );
};
