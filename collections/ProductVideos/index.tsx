import Videos from "@/components/Videos";
import { Product } from "@/types";

interface ProductVideosProps {
  product: Product;
}

export const ProductVideos: React.FC<ProductVideosProps> = ({ product }) => {
  return (
    <div>
      <Videos product={product} />
    </div>
  );
};
