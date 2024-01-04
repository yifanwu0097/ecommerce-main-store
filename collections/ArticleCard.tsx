/* eslint-disable @next/next/no-img-element */

export interface ArticleCardProps {
  title: string;
  para: string;
  imgSrc: string;
  logo: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  para,
  logo,
  imgSrc,
}) => {
  return (
    <div className='w-[90%] cursor-pointer bg-[#f1f1f1] p-4 rounded space-y-2'>
      <img className='h-5' src={logo} alt='logo' />
      <img src={imgSrc} alt='article1' />
      {/* <h3 className='font-bold text-lg'>{title}</h3> */}
      <p className='text-[#78788C] text-sm'>{para}</p>
      {/* <div className='flex gap-2'>
        <p className='font-bold'>Read More</p>
        <img src='/arrow-up.svg' alt='arrow-up' />
      </div> */}
    </div>
  );
};
