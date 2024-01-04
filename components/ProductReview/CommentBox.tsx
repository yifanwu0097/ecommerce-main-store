import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import CommentItem from './CommentItem';
const reviews = [
  {
    id: 1,
    name: 'Shamin Akhtarr',
    date: 'Nov 10, 2022',
    reviewBody:
      'Great experience so far. The printer is faster, quieter (a lot quieter), bigger print area then my last printer of the same price, and with better parts all around. Really glad I bought it.',
      rating: 5,
  },
  {
    id: 2,
    name: 'Jonathan Overbeek',
    date: 'Nov 10, 2022',
    reviewBody:
      'Great experience so far. The printer is faster, quieter (a lot quieter), bigger print area then my last printer of the same price, and with better parts all around. Really glad I bought it.',
      rating: 5,
  },
  {
    id: 3,
    name: 'The Forsaken One',
    date: 'July 11, 2023',
    reviewBody:
      'Love this printer!! First filament printer I chose and I am glad I chose this one. Friends had suggested, and even own, other brands. I wanted a big build size and self leveling; this one fit my requirements, so I decided to give it a go. I did the same thing with my resin printer; by choosing the Photon M3 instead of their suggestions. I truly enjoy that printer and decided to go the same route with a PLA style printer. The Kobra Plus is a fantastic printer. Runs like a champ, way easy to setup and even easier to level and print. I would recommend the magnetic bed to aid in removing the prints, but that is not necessary as I am not using one currently. If you are debating on this unit or another, I am recommending you debate no longer and go with it!! Good luck on your forging.',
      rating: 5,
  },
  {
    id: 4,
    name: 'Shamin Akhtarr',
    date: 'Nov 10, 2022',
    reviewBody:
      'Great experience so far. The printer is faster, quieter (a lot quieter), bigger print area then my last printer of the same price, and with better parts all around. Really glad I bought it.',
      rating: 5,
  },
];
const CommentBox = () => {
  return (
    <div className='flex flex-col gap-4'>
      {reviews.map((review) => (
        <CommentItem
          key={review.id}
          rating={review.rating}
          name={review.name}
          date={review.date}
          reviewBody={review.reviewBody}
        />
      ))}
    </div>
  );
};

export default CommentBox;
