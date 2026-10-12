"use client";
import { authClient, signIn } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    console.log(user);

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In successfull!");
      console.log(data);
    }

    if (error) {
      toast.error("Something went error!");
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const resData = await signIn.social({
      provider: "google",
    });

    console.log("after google sign in", resData);
  };

  const handleGithubSignIn = async () => {
    const resData = await signIn.social({
      provider: "github",
    });

    console.log("after github sign in", resData);
  };

  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center pt-10">সাইন ইন</h2>
      <p className="text-center">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>

      <div className="hero bg-base-200 my-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={onSubmit}>
            <fieldset className="fieldset">
              <label className="label">ইমেইল</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="you@example.com"
              />
              <label className="label">পাসওয়ার্ড</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="কমপক্ষে ৮ অক্ষর"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn bg-[#05893E] text-white mt-4"
              >
                সাইন ইন
              </button>

              <p>____________________________OR_____________________________</p>
            </fieldset>
            <div className="flex gap-2 justify-between items-center">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center gap-1 px-2 py-2 text-xs rounded-xl border border-base-300 cursor-pointer"
              >
                <FcGoogle /> Google দিয়ে চালিয়ে যান
              </button>
              <button
                onClick={handleGithubSignIn}
                className="flex items-center px-4 py-2 text-xs rounded-xl border border-base-300 cursor-pointer"
              >
                <FaGithub />
                GitHub দিয়ে চালিয়ে যান
              </button>
            </div>
            <div>
              <p className="text-center">
                অ্যাকাউন্ট নেই?{" "}
                <Link className="text-blue-500" href={"/sign-up"}>
                  সাইন আপ করুন
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

export default SignInPage;
