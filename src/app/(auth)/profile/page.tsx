"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      // image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };

  const handleShowForm = () => {
    setShow(!show);
  };

  const handleSignout = async () => {
    await authClient.signOut();
    redirect("/");
  };

  return (
    <div className="w-2xl mx-auto">
      <div className="flex justify-center">
        <div className="w-20 h-20  bg-base-300 rounded-xl border"></div>
      </div>

      <h2 className="text-4xl font-bold mt-5">আমার প্রোফাইল</h2>
      <p className="text-xl">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

      <div className="flex justify-between items-center bg-base-100 rounded-xl p-5 mt-10">
        <div className="flex justify-baseline gap-3">
          <div className="border">
            <img src={"user?.image"} width={50} height={50} alt="alter"></img>
          </div>
          <div>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleSignout}
            className="text-red-600 border border-red-500 py-2 px-3 rounded-xl"
          >
            ↩ সাইন আউট
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center bg-base-100 rounded-xl p-5 mt-10">
        <h2 className="text-3xl ">তথ্য</h2>

        <div className="mt-10">
          <form onSubmit={handleUpdateProfile}>
            <fieldset className="fieldset   rounded-box w-full">
              <label className="label">নাম</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Name"
              />

              <button
                type="submit"
                onClick={handleShowForm}
                className="text-white bg-green-500 w-full rounded-lg mt-5 py-2 "
              >
                আপডেট
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
