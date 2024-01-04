import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import React from 'react';
import { Breadcrumb } from 'antd';
import CategoryList from '@/collections/CategoryList';

interface ProductPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<ProductPageProps> = async ({ params }) => {
  const category = await getCategory(params.categoryId);
  const products = await getProducts({ categoryId: params.categoryId });
  console.log(products);
  return (
    <div className='container mx-auto'>
      <div className='mt-12'>
        <Breadcrumb
          className='my-6'
          items={[{ title: 'Home', href: "/" }, { title: category.name }]}
        />
      </div>
      <h2 className='font-bold text-2xl text-center mt-12'>{category?.name}</h2>
      <CategoryList items={products} />
    </div>
  );
};

export default CategoryPage;
