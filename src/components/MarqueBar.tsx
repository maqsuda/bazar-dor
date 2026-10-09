import { toBanglaDigits, toBanglaUnit } from "@/types/categoryTypes";
import React from "react";
import { IoCaretUp } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";






const MarqueBar = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();
  //   console.log(data);

  return (
    <div className="px-2">
      <MarqueeText direction="right" duration={15}>
        {data.map((nav, ind) => (
          <div
            className="px-5 py-2 font-bold flex gap-2 items-center"
            key={ind}
          >
            {nav.image} {nav.nameBn} {toBanglaDigits(nav.today)}টাকা/{toBanglaUnit(nav.unit)}
            {nav.change.dir === "up" ? (
              <IoCaretUp className="text-red-500" />
            ) : (
              <TiArrowSortedDown className="text-green-500" />
            )}{" "}
            {nav.change.pct > 0 ? (
              <span className="text-red-500">{nav.change.pct} %</span>
            ) : (
              <span className="text-green-500">{nav.change.pct} %</span>
            )}
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default MarqueBar;
