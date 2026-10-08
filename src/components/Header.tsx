import Image from "next/image";
import Navlinks from "./Navlinks";
import MarqueBar from "./MarqueBar";
import PriceUp from "./PriceUp";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-bd", {
    dateStyle: "full",
  });
  //   console.log(date);

  return (
    <div>
      <div className="w-7xl mx-auto flex justify-between items-center ">
        <div className="flex justify-between items-center gap-3">
          <div>
            <Image
              className="bg-[#05893E] rounded-xl"
              src={"/logo-icon.png"}
              width={40}
              height={40}
              alt="logo"
            ></Image>
          </div>
          <div>
            <h2 className="text-2xl font-bold">বাজার দর</h2>
            <p>{date}</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <button className="px-2 font-bold">সাইন ইন</button>
          <button className="px-3 py-2 rounded-xl bg-[#05893E] font-bold">
            সাইন আপ
          </button>
        </div>
      </div>
      <hr className="my-3 text-gray-300" />
      <Navlinks />
      <hr className="my-3 text-gray-300" />
      <MarqueBar />
      <hr className="my-3 text-gray-300" />

      <PriceUp />
    </div>
  );
};

export default Header;
