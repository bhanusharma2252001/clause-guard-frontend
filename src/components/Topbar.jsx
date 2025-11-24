import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";

export default function Topbar() {
  const { user, logout } = useAuth();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <div className="
      w-full border-b border-gray-200 dark:border-[#1f1f1f]
      bg-white dark:bg-[#0f0f0f]
      px-6 py-4 flex items-center justify-between
    ">

      {/* SEARCH */}
      <div className="hidden sm:flex flex-1 max-w-md">
        <div className="relative w-full">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          <input
            placeholder="Search..."
            className="
              w-full bg-gray-50 dark:bg-[#1a1a1a]
              border border-gray-200 dark:border-[#262626]
              text-gray-900 dark:text-[#e8e8e8]
              rounded-2xl py-2.5 pl-10 pr-4 text-sm
              placeholder:text-gray-400 dark:placeholder:text-[#7a7a7a]
              focus:ring-2 focus:ring-black/10 dark:focus:ring-[#333333]
              transition
            "
          />
        </div>
      </div>

      {/* RIGHT SIDE ICONS */}
      <div className="flex items-center gap-6">

        <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1c1c1c] transition">
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-[#a1a1a1]" />
        </button>

        <button
          onClick={toggleDark}
          className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1c1c1c] transition"
        >
          {dark ? (
            <SunIcon className="w-6 h-6 text-[#e8e8e8]" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-600" />
          )}
        </button>

        <div className="hidden sm:block text-right">
          <p className="text-sm font-medium text-gray-900 dark:text-[#e8e8e8]">
            {user?.firstName || "User"}
          </p>
          <p className="text-xs text-gray-400 dark:text-[#a1a1a1]">
            {user?.email}
          </p>
        </div>

        <button
          onClick={logout}
          className="
            bg-white dark:bg-[#1a1a1a]
            border border-gray-200 dark:border-[#262626]
            text-sm rounded-xl px-4 py-1.5
            text-gray-700 dark:text-[#e8e8e8]
            hover:bg-gray-50 dark:hover:bg-[#2a2a2a]
            transition
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
}
