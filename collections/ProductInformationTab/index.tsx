import Gallery from '@/components/Gallery';
import Info from '@/components/Info';
import { Product } from '@/types';
import { ProductDetailsReview } from '../ProductDetailsReview';

interface props {
  product: Product;
}

export const ProductInformationTab: React.FC<props> = ({ product }) => {
  return (
    <>
      <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
        <Gallery images={product?.images} />
        <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
          <Info data={product} />
        </div>
        <hr className='my-10' />
      </div>
    </>
  );
};
