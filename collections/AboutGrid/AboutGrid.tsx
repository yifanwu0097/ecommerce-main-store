/* eslint-disable @next/next/no-img-element */
export const AboutGrid = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='grid md:grid-cols-4 gap-6'>
        <div className='rounded-[50px] col-span-2 h-[500px] bg-[#0037A1] p-10 pt-16 relative'>
          <h2 className='text-2xl text-white font-bold w-[200px]'>
            Lorem ipsum dolor sit amet, consecLorem ipsum dolr sit amet, consec
          </h2>
          <img
            className='absolute right-0'
            src='/about-printer.png '
            alt='printer'
          />
        </div>

        <div className='rounded-[50px] col-span-1 h-[500px] pl-10 pb-10 bg-[#f3f3f3] flex flex-col justify-between'>
          <div className='flex flex-col justify-start items-end'>
            <img src='/about-printer1.png' alt='printer' />
          </div>
          <h2 className='text-2xl text-black font-bold w-[125px]'>
            Lorem ipsum dolor sit amet, consec
          </h2>
        </div>

        <div className='rounded-[50px] col-span-1 h-[500px] bg-[#f3f3f3] pl-10 pt-16 flex flex-col justify-between'>
          <h2 className='text-2xl text-black font-bold w-[125px]'>
            Lorem ipsum dolor sit
          </h2>
          <img src='/about-printer3.png' alt='printer2' />
        </div>
      </div>
    </div>
  );
};
