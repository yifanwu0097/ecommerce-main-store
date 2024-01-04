// import ProductList from '@/components/product-list';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import { ProductDetailsReview } from '@/collections/ProductDetailsReview';
import { ProductInformationTab } from '@/collections/ProductInformationTab';
import { ProductSpecification } from '@/collections/ProductSpedifications';
import { ProductVideos } from '@/collections/ProductVideos';
import { RelatedProductsList } from '@/collections/RelatedProductList';
import { Container } from '@/components/ui/Container';
import { Tabs, TabsProps } from 'antd';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Product Information`,
      children: <ProductDetailsReview product={product} />,
    },
    {
      key: '2',
      label: `Specifications`,
      children: <ProductSpecification product={product} />,
    },
    {
      key: '3',
      label: `Videos`,
      children: <ProductVideos product={product} />,
    },
  ];

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <ProductInformationTab product={product} />

          <Tabs defaultActiveKey='1' items={items} />
          <div>
            <hr className='my-6' />
            <h2 className='text-xl font-bold '>Related Products</h2>
            <RelatedProductsList items={suggestedProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
