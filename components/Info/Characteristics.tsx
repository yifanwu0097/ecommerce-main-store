/* eslint-disable @next/next/no-img-element */
interface CharacteristicsProps {
  heading: string;
  para?: string;
  image: string;
}
const Characteristics: React.FC<CharacteristicsProps> = ({
  heading,
  image,
  para,
}) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={image} alt='characteristics' />
      <div className="text-center">
        <span className='text-normal font-[600] text-white'>{heading}</span>
        <p className='text-sm text-gray-200'>{para}</p>
      </div>
    </div>
  );
};

export default Characteristics;
