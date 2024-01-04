/* eslint-disable @next/next/no-img-element */
import { Progress } from 'antd';
interface ReviewBarProps{
  percent: number;
  star: number
}
export const ReviewBar: React.FC<ReviewBarProps> = ({percent, star}) => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex gap-2 justify-center items-center'>
        <p>{star}</p>
        <img src='/star.svg' alt='star' />
        <div style={{ width: 280 }}>
          <Progress
            strokeColor={'#0037A1'}
            showInfo={false}
            percent={percent}
            status='active'
          />
        </div>
      </div>
    </div>
  );
};
