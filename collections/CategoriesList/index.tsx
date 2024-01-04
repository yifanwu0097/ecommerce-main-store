import NoResults from '@/components/ui/no-result';
import { Category } from '@/types';
import { CategoryItem } from './CategoryItem';

interface CategoriesListProps {
  items: Category[];
}

export const CategoriesList: React.FC<CategoriesListProps> = ({ items }) => {
  return (
    <div className=' my-8'>
      {items?.length === 0 && <NoResults />}
      <div className='grid md:grid-cols-3 md:gap-16 gap-8 grid-cols-2'>
        {items.map((category) => (
          <div key={category.id} className='shadow-md rounded-2xl'>
            <CategoryItem item={category} />
          </div>
        ))}
      </div>
    </div>
  );
};
