import NotFound from "@/app/not-found";
import {
  calculateMarketStats,
  toBanglaDigits,
  toBanglaUnit,
} from "@/types/categoryTypes";
// import React, { useState } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { IoCaretUp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const ProductsPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = await params;
  //   console.log(productId);

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${productId}`,
  );
  const data = await res.json();
  if (!data) {
    NotFound();
  }

  const marketsData = data.markets;
  const sortedData = [...marketsData].sort((a, b) => a.min - b.min);

  // console.log(marketsData);

  const stats = calculateMarketStats(data);

  // Usage
  // const result = getMarketWisePrices(productId);

  // console.table(result);

  return (
    <div className="w-7xl mx-auto mt-10">
      <div className="flex justify-between items-center py-5 px-5 rounded-xl bg-base-100 ">
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
            <p>
              {data.change.pct > 0
                ? `গতকালের তুলনায় আজ দাম বেড়েছে ${toBanglaDigits(data.change.pct)} টাকা`
                : data.change.pct < 0
                  ? `গতকালের তুলনায় আজ দাম কমেছে ${toBanglaDigits(data.change.pct)} টাকা`
                  : `গতকালের তুলনায় আজ দাম বেড়েছে ${toBanglaDigits(data.change.pct)} টাকা`}
            </p>
          </div>
        </div>
        <div className="text-center bg-base-300 p-4 rounded-xl">
          <h2>আজকের দাম</h2>
          <p>{toBanglaDigits(data.today)}</p>
          <p>টাকা / {toBanglaUnit(data.unit)}</p>
          <div>
            {" "}
            {data.change.dir === "up" ? (
              <p className="flex justify-center items-center gap-1 text-green-500">
                {" "}
                <IoCaretUp /> {toBanglaDigits(data.change.pct)}%
              </p>
            ) : data.change.dir === "down" ? (
              <p className="flex justify-center items-center gap-1 text-red-500">
                <TiArrowSortedDown />
                {toBanglaDigits(data.change.pct)}%
              </p>
            ) : (
              <p className="flex justify-center items-center gap-1 text-gray-500">
                <FaArrowsAltH />
                {toBanglaDigits(data.change.pct)}%
              </p>
            )}
          </div>
        </div>
      </div>

      {/* দামের সারসংক্ষেপ */}
      <div className=" bg-base-100 mt-10 p-5 rounded-xl">
        <h2 className="text-4xl font-bold mt-5">দামের সারসংক্ষেপ</h2>

        <div className="flex justify-between gap-5 items-center mt-5">
          <div className="p-5 bg-base-300 rounded-lg text-center">
            <h2>সর্বনিম্ন দাম</h2>
            <p>{stats.minimum}</p>
            <p>সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="p-5 bg-base-300 rounded-lg">
            <h2>সর্বাধিক দাম</h2>
            <p>{stats.maximum}</p>
            <p>সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="p-5 bg-base-300 rounded-lg">
            <h2>গড় দাম</h2>
            <p>{stats.average}</p>
            <p>প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>
        {/* দামের সারসংক্ষেপ */}
        <h2 className="text-4xl font-bold mt-10">বাজারভিত্তিক আজকের দাম</h2>
        <div className="flex justify-between items-center mt-10 bg-base-200 p-5 rounded-xl">
          <table className="w-full p-5">
            <thead>
              <tr>
                <th className="text-start ">বাজার</th>
                <th className="text-start">বিভাগ</th>
                <th className="text-end">সর্বনিম্ন</th>
                <th className="text-end">সর্বোচ্চ</th>
              </tr>
            </thead>

            <tbody>
              {sortedData.map((item, index) => (
                <tr key={item.market ?? index}>
                  <td className="border-b border-gray-300">{item.market}</td>
                  <td className="border-b border-gray-300">{item.division}</td>
                  <td className="border-b border-gray-300 text-end">
                    {item.min}
                  </td>
                  <td className="border-b border-gray-300 text-end">
                    {item.max}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <p className="py-3">মোট {data.length} টি পণ্য দেখানো হচ্ছে</p> */}
        <div className="grid grid-cols-3 gap-5 my-2"></div>
      </div>
    </div>
  );
};

export default ProductsPage;
