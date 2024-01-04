import { ArticleCard } from './ArticleCard';

export const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Plants make the atmosphere of the house come alive',
      para: `Plants make the atmosphere of the house come alive, we should gain
      our make the atmosphere of the house come alive, we should gain
      our make the atmosphere of the house come alive, we should gain
      our`,
      imgSrc: '/article1.png',
      logo: '/icons/techradar.svg',
    },
    {
      id: 2,
      title: 'Good Lighting Makes The Home More Light',
      para: `Good lighting makes the home more light, the combination of light and sun give...`,
      imgSrc: '/article2.png',
      logo: '/icons/toms-hardware.png',
    },
    {
      id: 3,
      title: 'Classic Style Makes Houses Look More Expensive',
      para: `Classic style makes houses look more expensive, the vintage effect that verry...`,
      imgSrc: '/article3.png',
      logo: '/icons/all3dp.svg',
    },
  ];
  return (
    <div className='mb-12'>
      <h2 className='font-bold text-2xl my-6'>TIN TỨC 3D</h2>
      <div className='md:grid md:grid-cols-3 md:items-start flex flex-col items-center gap-6'>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            para={article.para}
            imgSrc={article.imgSrc}
            logo={article.logo}
          />
        ))}
      </div>
    </div>
  );
};
