"use client";
import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}) => {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent the default form submission behavior
    router.push(`/residence/searchResidence?q=${searchQuery}`);
  };
  return (
    <nav className="flex items-center w-full sm:w-full md:w-[90%] lg:px-8 ">
      <div className="flex items-center bg-[#F2F2F2] p-2 rounded-2xl w-full py-3 text-black gap-4">
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center h-full gap-4 outlin-none"
        >
          <input
            className="bg-transparent focus:outline-none text-xl placeholder-[#535353] text-black flex-1"
            type="text"
            dir="rtl"
            placeholder="جستجوی اقامتگاه ها"
            name="searchInput"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <Image
              src="/icons/Search.svg"
              className=""
              alt=""
              width={24}
              height={24}
            />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
