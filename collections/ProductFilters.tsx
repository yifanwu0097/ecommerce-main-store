"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/Drawer/Drawer";
import Link from "next/link";
import ProductList from "./ProductList";
import getProducts from "@/actions/get-products";
import { Select } from "antd";

const ProductFilters = ({}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="flex justify-end mr-8">
        <Select
          defaultValue="Featured"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            { value: "Featured", label: "Featured" },
            { value: "best-selling", label: "Best Selling" },
            { value: "a-z", label: "Alphabetically, A-Z" },
            { value: "z-a", label: "Alphabetically, Z-A" },
            { value: "low-high", label: "Price, low to high" },
            { value: "high-low", label: "Price, high to low" },
            { value: "old-new", label: "Date, old to new" },
            { value: "new-old", label: "Date, new to old" },
          ]}
        />
      </div>
        <div>
          <Button onClick={showDrawer} variant={"outline"} size={"lg"}>
            Filter
          </Button>
          <Drawer open={open} showDrawer={showDrawer} onClose={onClose} />
          <div className="flex flex-col space-y-3 mt-4">
            <Link href="#">Resin 3D Printers</Link>
            <Link href="#">FDM 3D Printers</Link>
            <Link href={"#"}>Wash and Cure Station</Link>
          </div>
        </div>
    
    </>
  );
};
export default ProductFilters;
