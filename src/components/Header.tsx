import Image from "next/image";
import UserInfoPage from "./UserInfo";

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
        <UserInfoPage />
      </div>
    </div>
  );
};

export default Header;
