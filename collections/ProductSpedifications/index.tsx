import Details from "@/components/Details";
import { Product } from "@/types";


interface ProductSpecificationProps {
  product: Product;
}


export const ProductSpecification: React.FC<ProductSpecificationProps> = ({product}) => {
  return (
    <div>
      <Details product={product} />
    </div>
  );
};
