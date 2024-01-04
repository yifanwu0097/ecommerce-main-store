import getCategories from '@/actions/get-categories';
import { FeaturedProducts } from '@/collections';
import { AboutUs } from '@/collections/AboutUs';
import { Articles } from '@/collections/ArticleSection';
import { FeatureList } from '@/collections/FeatureList';
import { CategoriesList } from '@/collections/CategoriesList';
import { Container } from '@/components/ui';
import { Banner } from '@/collections/Banner/Banner';
import { AboutGrid } from '@/collections/AboutGrid/AboutGrid';

/* eslint-disable @next/next/no-img-element */
export const revalidate = 0;
const HomePage = async () => {
  const categories = await getCategories();
  return (
    <div>
      <Banner />
      <Container>
        <div className='py-10'>
          <h2 className='font-bold text-3xl mb-6 mt-6'>SẢN PHẨM</h2>
          <CategoriesList items={categories} />
        </div>
      </Container>
      <FeaturedProducts />
      <img src='/pic.png' alt='png' width={'100%'} />
      <Container>
        <AboutGrid />
      </Container>
      <FeatureList />
      <Container>
        <Articles />
      </Container>
      {/* <Contact /> */}
    </div>
  );
};

export default HomePage;
