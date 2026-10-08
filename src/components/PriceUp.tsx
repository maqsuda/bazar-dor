import React from "react";

const PriceUp = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();

  const filterData = data.filter((p) => p.change.dir === "up");
  //   const Navs = data.data;
  console.log(filterData);

  return <div></div>;
};

export default PriceUp;
