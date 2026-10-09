import React from "react";
import PriceCard from "./PriceCard";
import { IoCaretUp } from "react-icons/io5";
import type { ProductTypes } from "@/types/categoryTypes";


const PriceUpProduct = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: ProductTypes[] = await res.json();

  const filterData = data.filter((p) => p.change.dir === "up");
  const topSixFilterData = filterData.slice(0, 6);
  //   const Navs = data.data;
  //   console.log(filterData);

  return (
    <div className="w-7xl mx-auto ">
      <h2 className="flex items-center text-3xl font-bold ">
        {" "}
        <IoCaretUp className="text-red-500 text-3xl mr-2" />
        আজ দাম বেড়েছে
      </h2>
      <div className="grid grid-cols-3 gap-5 my-2">
        {topSixFilterData.map((product) => (
          <PriceCard key={product.id} product={product}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceUpProduct;
