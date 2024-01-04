/* eslint-disable @next/next/no-img-element */

interface BoxItemsProps {
  line: string;
}

const BoxItems: React.FC<BoxItemsProps> = ({ line }) => {
  return (
    <div className='flex gap-3 items-center'>
      <img src='/tick-circle.png' alt='tickCircle' />
      <span className='font-[600]'>{line}</span>
    </div>
  );
};

export default BoxItems;
