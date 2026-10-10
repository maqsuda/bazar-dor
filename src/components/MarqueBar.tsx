import {
  toBanglaDigits,
  toBanglaUnit,
  type ProductTypes,
} from "@/types/categoryTypes";
import React from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { IoCaretUp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const MarqueBar = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: ProductTypes[] = await res.json();
  console.log(data);

  return (
    <div className="px-2">
      <MarqueeText direction="right" duration={15}>
        {data.map((nav, ind) => (
          <div
            className="px-5 py-2 font-bold flex gap-2 items-center"
            key={ind}
          >
            {nav.image} {nav.nameBn} {toBanglaDigits(nav.today)}টাকা/
            {toBanglaUnit(nav.unit)}
            {/* percent % start */}
            {nav.change.dir === "up" ? (
              <IoCaretUp className="text-green-500" />
            ) : nav.change.dir === "down" ? (
              <TiArrowSortedDown className="text-red-500" />
            ) : (
              <FaArrowsAltH className="text-gray-500" />
            )}
            {nav.change.pct > 0 ? (
              <span className="text-green-500">
                {toBanglaDigits(nav.change.pct)} %
              </span>
            ) : nav.change.pct < 0 ? (
              <span className="text-red-500">
                {toBanglaDigits(nav.change.pct)} %
              </span>
            ) : (
              <span className="text-gray-500">
                {toBanglaDigits(nav.change.pct)} %
              </span>
            )}
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default MarqueBar;
