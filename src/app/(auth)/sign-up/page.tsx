"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
      confirmPassword: string;
    };

    const { data: resData, error } = await authClient.signUp.email({
      // name: data.name,
      // email: data.email,
      // password: data.password,
      // confirmPassword: data.password,
      ...data,
      callbackURL: "/",
    });
    console.log(resData);
    if (data) {
      redirect("/");
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
    // console.log(resData, error);
  };

  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center pt-10">
        অ্যাকাউন্ট তৈরি করুন
      </h2>
      <p className="text-center">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <div className="hero bg-base-200 my-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={onSubmit}>
            <fieldset className="fieldset">
              <label className="label">নাম</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="যেমন: রহিম উদ্দিন"
              />

              <label className="label">ইমেইল</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="you@example.com"
              />

              <label className="label">ImageURL</label>
              <input
                name="image"
                type="url"
                className="input"
                placeholder="Image"
              />

              <label className="label">পাসওয়ার্ড</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="কমপক্ষে ৮ অক্ষর"
              />
              <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
              <input
                type="password"
                name="confirmPassword"
                className="input"
                placeholder="আবার লিখুন"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn bg-[#05893E] text-white mt-4"
              >
                অ্যাকাউন্ট তৈরি করুন
              </button>

              <p>____________________________OR_____________________________</p>
            </fieldset>
            <div className="flex gap-2 justify-between items-center">
              <button className="flex items-center gap-1 px-2 py-2 text-xs rounded-xl border border-base-300">
                <FcGoogle /> Google দিয়ে চালিয়ে যান
              </button>
              <button className="flex items-center gap-1 px-4 py-2 text-xs rounded-xl border border-base-300">
                <FaGithub />
                GitHub দিয়ে চালিয়ে যান
              </button>
            </div>
            <div>
              <p className="text-center">
                অ্যাকাউন্ট আছে?
                <Link className="text-blue-500" href={"/sign-in"}>
                  সাইন ইন করুন
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center">
        <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
