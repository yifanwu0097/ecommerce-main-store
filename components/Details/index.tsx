import React from "react";
import Specification from "../Specification";
import BoxItems from "./BoxItems";
import SystemRequired from "./SystemRequired";
import { Product } from "@/types";

interface ProductSpecificationProps {
  product: Product;
}
const Details: React.FC<ProductSpecificationProps> = ({ product }) => {
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 my-5">
        <div>
          <Specification product={product} />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-[900] text-md">In the Box</h1>
          {product?.inTheBoxs?.map((item, index) => (
            <BoxItems key={index} line={item.name} />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-[900] text-md">System Required</h1>
          {product?.requiredSystems?.map((item, index) => (
            <SystemRequired key={index} para={item.name} />
          ))}
        </div>
      </div>
      {/* <div className=" flex items-center justify-center m-3">
        <button className="border rounded-lg bg-[#0037A1]  justify-center items-center text-white flex border-[#0037A1]  px-6 py-2">
          View Details
        </button>
      </div> */}
    </>
  );
};

export default Details;
