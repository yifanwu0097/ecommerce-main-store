import ProductReview from '@/components/ProductReview';
import { Product } from '@/types';
import Image from 'next/image';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetailsReview: React.FC<ProductDetailsProps> = ({product}) => {
  return (
    <div className=''>
      {product?.posters?.map((poster) => (
        <Image width={1920} height={1080} className='w-full h-full' src={poster.url} key={poster.id} alt='image' />
      ))}

      {/* <ProductReview /> */}
    </div>
  );
};
