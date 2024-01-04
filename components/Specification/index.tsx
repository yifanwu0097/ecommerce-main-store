import { Product } from "@/types";
import SpecificationList from "./SpecificationList";
interface ProductSpecificationProps {
  product: Product;
}
const Specification: React.FC<ProductSpecificationProps> = ({ product }) => {

  return (
    <div className="flex flex-col  gap-3">
      <h1 className="font-[900] text-md">Specification</h1>
      {product?.specifications?.map((item, index) => (
        <SpecificationList
          key={index}
          item1={item.name}
          item2={item.value}
          gray
        />
      ))}

    </div>
  );
};

export default Specification;
