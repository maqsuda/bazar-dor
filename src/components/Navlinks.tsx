import Link from "next/link";
import React from "react";

const Navlinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();
  //   const Navs = data.data;
  console.log(data);
  return (
    <div className="w-7xl mx-auto">
      {data.map((nav, ind) => (
        <Link className="px-5 py-2 font-bold" key={nav.ind} href={nav.slug}>
          {nav.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
