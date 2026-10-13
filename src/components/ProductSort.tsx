"use client";

import { useState } from "react";
import PriceCard from "@/components/PriceCard";
import { type ProductTypes } from "@/types/categoryTypes";

const ProductSort = ({ data }: { data: ProductTypes[] }) => {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "asc") {
      return Number(a.today) - Number(b.today);
    }

    if (sortOrder === "desc") {
      return Number(b.today) - Number(a.today);
    }

    return 0;
  });
  return (
    <>
      {" "}
      <div className="flex justify-end items-center py-5 px-5 rounded-xl bg-white mt-5">
        {" "}
        <h2 className="text-xl pr-2">সাজান</h2>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select"
        >
          {" "}
          <option value="default">ডিফল্ট</option>{" "}
          <option value="asc">দাম: কম থেকে বেশি</option>{" "}
          <option value="desc">দাম: বেশি থেকে কম</option>{" "}
        </select>{" "}
      </div>
      <h2 className="text-3xl font-bold">সব পণ্য</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-2">
        {" "}
        {sortedData.map((product) => (
          <PriceCard key={product.id} product={product} />
        ))}{" "}
      </div>{" "}
    </>
  );
};

export default ProductSort;
