"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubSignIn = () => {
  return (
    <button
      onClick={() =>
        authClient.signIn.social({
          provider: "github",
          callbackURL: "/",
        })
      }
      className="flex items-center gap-1 px-4 py-2 text-xs rounded-xl border border-base-300 cursor-pointer"
    >
      <FaGithub />
      GitHub দিয়ে চালিয়ে যান
    </button>
  );
};

export default GithubSignIn;
