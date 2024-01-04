import Characteristics from '@/components/Info/Characteristics';

export const FeatureList = () => {
  const characteristics = [
    {
      id: 1,
      heading: 'Free Express Shipping',
      para: 'local warehouse delivery in 3-5 days',
      image: '/icons/shipping.svg',
    },
    {
      id: 2,
      heading: '14 Days Return',
      para: '14 days return & 30 days replace',
      image: '/icons/return.svg',
    },
    {
      id: 3,
      heading: '1 Year Warranty',
      para: 'One-year warranty & 100% secure payment',
      image: '/icons/warranty.svg',
    },
    {
      id: 4,
      heading: '24/7 Support',
      para: 'We provide live chat support',
      image: '/icons/support.svg',
    },
  ];
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-10 md:gap-2 items-center my-20 py-6 bg-gradient-to-r from-[#009FFD] to-[#2A2A72]'>
      {characteristics.map((feature) => (
        <Characteristics
          key={feature.id}
          heading={feature.heading}
          image={feature.image}
          para={feature.para}
        />
      ))}
    </div>
  );
};
