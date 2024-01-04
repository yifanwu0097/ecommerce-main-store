interface PaginationProps {
  totalPages: number;
}

export const CustomPagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const renderDs = (count: number) => {
    return 'D'.repeat(count);
  };

  return (
    <div>
      <p className='font-bold tracking-widest'>
        MayIn 3D{renderDs(totalPages - 1)}
      </p>
    </div>
  );
};
