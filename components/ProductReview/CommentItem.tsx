/* eslint-disable @next/next/no-img-element */
interface CommentItemProps {
  name: string;
  date: string;
  reviewBody: string;
  rating: number;
}
const CommentItem: React.FC<CommentItemProps> = ({
  name,
  date,
  reviewBody,
  rating,
}) => {
  return (
    <div className='gap-4 flex flex-col my-4 w-[80%] shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 rounded-md'>
      <div>
        <p className='font-bold'>{name}</p>
        <p>{date}</p>
        <div className='flex'>
          {Array.from({ length: rating }, (_, index) => (
            <img key={index} src='/star.svg' alt='star' />
          ))}
        </div>
      </div>

      <p>{reviewBody}</p>
    </div>
  );
};

export default CommentItem;
