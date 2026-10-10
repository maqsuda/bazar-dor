import {
  toBanglaDigits,
  toBanglaUnit,
  type ProductTypes,
} from "@/types/categoryTypes";
import Link from "next/link";
import React from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { IoCaretUp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const PriceCard = ({ product }: { product: ProductTypes }) => {
  // console.log(product);
  return (
    <Link href={`/products/${product.id}`}>
      <div className="card bg-base-100 shadow-sm">
        <div className="flex mt-5 items-center pl-2 gap-3">
          <div>
            <span className="rounded-xl p-4 bg-base-200 mt-2">
              {product.image}
            </span>
          </div>
          <div className="items-center">
            <h2 className="text-xl font-bold">{product.nameBn}</h2>
            <p>প্রতি {toBanglaUnit(product.unit)}</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-3">
          <div>
            <h2>আজকের দাম</h2>
            <p>
              <span className="text-2xl font-bold">
                {toBanglaDigits(product.today)}
              </span>{" "}
              টাকা
            </p>
          </div>

          <div>
            {product.change.dir === "up" ? (
              <button className="flex gap-2 items-center px-5 py-2 rounded-full bg-base-300 text-green-500">
                <IoCaretUp />
                {toBanglaDigits(product.change.pct)}%
              </button>
            ) : product.change.dir === "down" ? (
              <button className="flex gap-2 items-center px-5 py-2 rounded-full bg-base-300 text-red-500">
                <TiArrowSortedDown /> {toBanglaDigits(product.change.pct)}%
              </button>
            ) : (
              <button className="flex gap-2 items-center px-5 py-2 rounded-full bg-base-300 text-gray-500">
                <FaArrowsAltH /> {toBanglaDigits(product.change.pct)}%
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PriceCard;
