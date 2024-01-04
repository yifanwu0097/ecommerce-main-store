'use client';
import { ProductItem } from './ProductItem';
import { Pagination } from 'antd';
import { Product } from '@/types';
import NoResults from '@/components/ui/no-result';
import { useState } from 'react';

interface CategoryListProps {
  items: Product[];
}

const CategoryList: React.FC<CategoryListProps> = ({ items }) => {
  const [current, setCurrent] = useState(1);
  const onPaginationChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className='my-10 flex flex-col items-center'>
      <div className='space-y-4'>
        {items?.length === 0 && <NoResults />}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-x-24 md:gap-y-4 gap-8'>
          {items?.slice((current - 1) * 9, current * 9).map((item) => (
            <ProductItem key={item.id} data={item} />
          ))}
        </div>
      </div>
      <Pagination
        defaultPageSize={3}
        defaultCurrent={1}
        total={items.length}
        hideOnSinglePage
        pageSize={3}
        onChange={onPaginationChange}
        current={current}
      />
    </div>
  );
};
export default CategoryList;
