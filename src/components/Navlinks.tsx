import type { categoryTypes } from "@/types/categoryTypes";
import Link from "next/link";
import React from "react";

const Navlinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data: categoryTypes[] = await res.json();
  //   const Navs = data.data;
  // console.log(data);
  return (
    <div className="w-7xl mx-auto">
      <Link href={"/"}>Home</Link>
      {data.map((nav, ind) => (
        <Link
          className="px-5 py-2 font-bold"
          key={ind}
          href={`/products/category/${nav.slug}`}
        >
          {nav.icon}
          {nav.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
