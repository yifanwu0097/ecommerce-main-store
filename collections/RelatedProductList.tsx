import getProducts from '@/actions/get-products';
import { ProductItem } from './ProductItem';
import { Product } from '@/types';


interface ProductListProps {
  items: Product[]
}
export const RelatedProductsList: React.FC<ProductListProps> = ({items}) => {

  return (
    <div className='flex flex-col items-center'>
      <div className='md:grid md:grid-cols-3 gap-5'>
      {items.slice(0, 3).map((item) => (
          <ProductItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
