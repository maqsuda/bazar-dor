"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const UserInfoPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const handleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
      {user ? (
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>

          <h2>{user?.name}</h2>
          {/* <Link href={"/profile"}>
            <div>
              <FaChevronDown className="rounded-full" />
            </div>
          </Link> */}
          {/* drop down menu */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0}>
              <FaChevronDown className="rounded-full " />
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box w-56 p-2 shadow-sm"
            >
              <h2 className="text-lg font-bold mt-4">{user?.name}</h2>
              <h2>{user?.email}</h2>

              <Link href={"/profile"} className="mt-4">
                👤 আমার প্রোফাইল
              </Link>
              <div onClick={handleSignout} className="text-red-600 mt-2 cursor-pointer">
                <span>↩</span> সাইন আউট
              </div>
            </ul>
          </div>

          {/* menu end */}
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center gap-2">
            <Link href={"/sign-in"} className="px-2 font-bold">
              সাইন ইন
            </Link>
            <Link
              href={"/sign-up"}
              className="px-3 py-2 rounded-xl bg-[#05893E] font-bold"
            >
              সাইন আপ
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfoPage;
