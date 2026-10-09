import React from "react";
import PriceCard from "./PriceCard";
import type { ProductTypes } from "@/types/categoryTypes";

const AllProduct = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: ProductTypes[] = await res.json();
  return (
    <div className="w-7xl mx-auto mt-10">
      <h2 className="text-3xl font-bold">সব পণ্য</h2>
      <p className="py-3">মোট {data.length} টি পণ্য দেখানো হচ্ছে</p>
      <div className="grid grid-cols-3 gap-5 my-2">
        {data.map((product) => (
          <PriceCard key={product.id} product={product}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
