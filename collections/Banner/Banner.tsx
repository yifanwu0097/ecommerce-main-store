/* eslint-disable @next/next/no-img-element */
'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={4000}
    >
      <img src='banner-new.jpg' alt='home-image' className='w-full' />
      <img src='printer.png' alt='home-image' className='w-full' />
      <img src='printer2.png' alt='home-image' className='w-full' />
    </Carousel>
  );
};
