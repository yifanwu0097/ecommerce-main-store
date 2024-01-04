interface SpecificationListProps{
  item1: string;
  item2: string;
  gray?: boolean;
}

const SpecificationList: React.FC<SpecificationListProps> = ({item1, item2, gray}) => {
  return (
    <div className={`flex justify-between ${gray && 'bg-[#F9F9F9]'} px-1 py-2 `}>
        <span className="text-[#818B9C]">{item1}</span>
        <span className="text-black font-[600]">{item2}</span>
    </div>
  )
}

export default SpecificationList
