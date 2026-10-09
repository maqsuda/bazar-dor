import React from "react";
import PriceCard from "./PriceCard";
import { TiArrowSortedDown } from "react-icons/ti";

const PriceDownProduct = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: ProductTypes[] = await res.json();

  const filterData = data.filter((p) => p.change.dir === "down");
  const topSixFilterData = filterData.slice(0, 6);

  return (
    <div className="w-7xl mx-auto mt-10">
      <h2 className="flex items-center text-3xl font-bold ">
        {" "}
        <TiArrowSortedDown className="text-green-500 text-3xl mr-2" />
        আজ দাম কমেছে
      </h2>
      <div className="grid grid-cols-3 gap-5 my-2">
        {topSixFilterData.map((product) => (
          <PriceCard key={product.id} product={product}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceDownProduct;
