import { Container } from '@/components/ui';
import { Breadcrumb } from 'antd';
import { useState } from 'react';

import ProductsPageList from '@/collections/ProductFilters';
import { Button } from '@/components/ui/button';
import { Drawer } from '@/components/Drawer/Drawer';
import Link from 'next/link';
import getProducts from '@/actions/get-products';
import ProductList from '@/collections/ProductList';
import ProductFilters from '@/collections/ProductFilters';
export const revalidate = 0;

const ProductsPage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <Breadcrumb
        className='my-6'
        items={[{ title: 'Home' }, { title: '3D Printers' }]}
      />
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-bold'>3D Printers</h1>
      </div>
      {/* <ProductFilters /> */}
      <ProductList items={products} />
    </Container>
  );
};

export default ProductsPage;
