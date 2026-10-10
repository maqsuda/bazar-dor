import {
  toBanglaDigits,
  toBanglaUnit,
  type ProductTypes,
} from "@/types/categoryTypes";
import React from "react";
import { IoCaretUp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const ProductsPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = await params;
  //   console.log(productId);

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${productId}`,
  );
  const data: ProductTypes = await res.json();

  // const categoryData=await data[0].categoryNameBn;
  // console.log(data);
  return (
    <div className="w-7xl mx-auto mt-10">
      <div className="flex justify-between items-center py-5 px-5 rounded-xl bg-white ">
        <div className="flex">
          <div>
            <p className="rounded-xl text-4xl p-6 bg-base-300">
              {data.categoryIcon}
            </p>
          </div>
          <div className="ml-2">
            <h2 className="font-bold text-3xl">{data.nameBn}</h2>
            <p>
              প্রতি {toBanglaUnit(data.unit)}
              <span>-{data.categoryNameBn}</span>
            </p>
            {/* <p>
              {data.change.pct > 0
                ? `গতকালের তুলনায় আজ দাম বেড়েছে ${toBanglaDigits(data.change.pct)} টাকা`
                : `গতকালের তুলনায় আজ দাম কমেছে ${toBanglaDigits(data.change.pct)} টাকা`}
            </p> */}
          </div>
        </div>
        <div className="text-center bg-base-300 p-4 rounded-xl">
          <h2>আজকের দাম</h2>
          <p>{toBanglaDigits(data.today)}</p>
          <p>টাকা / {toBanglaUnit(data.unit)}</p>
          <div>
            {" "}
            {data.change.dir === "up" ? (
              <p className="flex justify-center items-center gap-1 text-red-500">
                {" "}
                <IoCaretUp /> {toBanglaDigits(data.change.pct)}%
              </p>
            ) : data.change.dir === "down" ? (
              <p className="flex justify-center items-center gap-1 text-green-500">
                <TiArrowSortedDown />
              </p>
            ) : (
              <p className="flex justify-center items-center gap-1 text-gray-500">
                <TiArrowSortedDown />
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-5 px-5 rounded-xl bg-white mt-10"></div>

      {/* <p className="py-3">মোট {data.length} টি পণ্য দেখানো হচ্ছে</p> */}
      <div className="grid grid-cols-3 gap-5 my-2">
        {/* {data.map((product) => (
          <PriceCard key={product.id} product={product}></PriceCard>
        ))} */}
      </div>
    </div>
  );
};

export default ProductsPage;
