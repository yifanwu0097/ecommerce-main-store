import Characteristics from '@/components/Info/Characteristics';

/* eslint-disable @next/next/no-img-element */
export const AboutUs = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col justify-between gap-10 mt-20'>
        <div>
          <h2 className='font-bold text-2xl my-4'>About Us</h2>
          <p>
            With its advanced technology, speed, and ease of use, the Anycubic
            UV Resin 3D Printer is the perfect choice for anyone looking to
            create high-quality 3D models quickly and efficiently. Choose
            Anycubic and discover the ultimate in precision and quality today!
          </p>
          <p>
            With its advanced technology, speed, and ease of use, the Anycubic
            UV Resin 3D Printer is the perfect choice for anyone looking to
            create high-quality 3D models quickly and efficiently. Choose
            Anycubic and discover the ultimate in precision and quality today!
          </p>
        </div>
        <img width={'600px'} src='/homeimg1.png' alt='homeimg1.png' />
      </div>
    </>
  );
};
