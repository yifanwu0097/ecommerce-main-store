"use client";
/* eslint-disable @next/next/no-img-element */
import { ReviewModal } from '@/collections/ReviewModal/ReviewModal';
import CommentBox from './CommentBox';
import { ReviewBar } from './ReviewBar/ReviewBar';
import { useState } from 'react';
import { Button } from '../ui/button';

const ProductReview = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className='text-2xl font-bold text-black'>Customer Reviews</h1>
      <div className='flex justify-between gap-28 my-4'>
        <div className='w-[1/2] space-y-4'>
          <div className='flex gap-4'>
            <div className='bg-[#0037A1] p-5 rounded'>
              <p className='text-2xl text-white'>5.0</p>
            </div>
          </div>

          <div>
            <ReviewBar percent={100} star={5} />
            <ReviewBar percent={5} star={4} />
            <ReviewBar percent={0} star={3} />
            <ReviewBar percent={0} star={2} />
            <ReviewBar percent={0} star={1} />
          </div>
          <Button onClick={() => setOpen(true)}>Add Review</Button>
          <ReviewModal
            isOpen={open}
            onClose={() => setOpen(false)}
          />
        </div>
        <CommentBox />
      </div>
    </div>
  );
};

export default ProductReview;
