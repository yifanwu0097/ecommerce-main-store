import getProducts from '@/actions/get-products';
import { SmallProductItem } from './SmallProductItem';
import { ProductItem } from './ProductItem';
import ProductList from './ProductList';

export const FeaturedProducts: React.FC = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <div className='bg-gradient-to-r from-[#0037A1] to-[#FF710B]'>
      <div className='py-10 container mx-auto'>
        <h2 className='font-bold text-3xl mb-6 mt-7 ml-8 text-white'>VIDEOS</h2>
        {products ? (
          <ProductList items={products}/>
        ) : (
          <div>Add products</div>
        )}
      </div>
    </div>
  );
};
