"use client";
import React, { useState } from "react";
import PriceCard from "./PriceCard";

const SortedData = () => {
  const [sortOrder, setSortOrder] = useState("asc");

  // const sortedData = [...data].sort((a, b) =>
  //   sortOrder === "asc" ? a.price - b.price : b.price - a.price,
  // );
  console.log("Sorted .... ", sortOrder);
  return (
    <select
      defaultValue="ডিফল্ট"
      className="select"
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option disabled={true}>ডিফল্ট</option>
      <option value="asc">দাম: কম থেকে বেশি</option>
      <option value="desc">দাম: বেশি থেকে কম</option>
    </select>
  );
};

export default SortedData;
