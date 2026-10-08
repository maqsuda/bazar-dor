import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-7xl mx-auto flex justify-between items-center">
      <div>
        <button className="py-5 px-30 bg-green-500 rounded-full my-3 "></button>
        <h2 className="text-3xl font-bold">আজকের বাজারের দাম এক নজরে</h2>
        <p className="py-2">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন- <br />
          সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <button className="py-2 px-10 bg-green-500 rounded-full my-3 font-bold text-white">
          সব পণ্য দেখুন
        </button>
      </div>
      <div>
        <Image
          src={"/bazar-hero.png"}
          width={400}
          height={400}
          alt="image"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
