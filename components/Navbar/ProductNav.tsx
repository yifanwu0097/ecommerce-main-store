import Link from 'next/link';
interface ProductNavProps {
  items: 
    {
      id: number;
      label: string;
      href: string;
    }[]
  ;
  heading: string;
}
export const ProductNav: React.FC<ProductNavProps> = ({ items, heading }) => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='font-bold text-lg'>{heading}</h2>
      {items.map((item) => (
        <Link href={item.href} key={item.id}>
          <h2 className='text-black text-sm'>{item.label}</h2>
        </Link>
      ))}
    </div>
  );
};
