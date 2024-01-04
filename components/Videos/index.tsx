import React from 'react';
import { Product } from '@/types';
import Iframe from 'react-iframe';
import { getEmbeddedYouTubeLink } from '@/lib/utils';

interface ProductVideosProps {
  product: Product;
}
const Videos: React.FC<ProductVideosProps> = ({ product }) => {
  return (
    <>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 my-5'>
        {product?.videos?.map((vid) => {
          if (vid.url.includes('cloudinary')) {
            return (
              <video
                key={vid.id}
                muted
                autoPlay
                loop
                style={{ width: '300px', height: '282px' }}
              >
                <source src={vid.url} />
              </video>
            );
          } else {
            return (
              <Iframe
                key={vid.id}
                url={getEmbeddedYouTubeLink(vid.url)}
                width='340px'
                height='282px'
                id=''
                className=''
                display='block'
                position='relative'
              />
            );
          }
        }) ?? <div>No Videos !</div>}
      </div>
    </>
  );
};

export default Videos;
