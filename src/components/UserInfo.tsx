"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const UserInfoPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
      {user ? (
        <div className="flex flex-col items-center gap-2">
          <Link href={"/profile"}>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image as string}
                />
              </div>
            </div>
          </Link>

          <h2>{user?.name}</h2>

          <button onClick={handleSignout} className="btn bg-green-600 btn-xs">
            Signout
          </button>
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
