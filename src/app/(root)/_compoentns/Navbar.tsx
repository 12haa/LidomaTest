import React from "react";
import { Input } from "antd";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full  sm:w-full md:w-[90%] lg:px-8 ">
      <div className="flex items-center  bg-[#F2F2F2] p-2 rounded-2xl w-full py-3 text-black gap-4">
        <input
          className="bg-transparent focus:outline-none text-xl placeholder-[#535353]  text-black flex-1"
          type="text"
          dir="rtl"
          placeholder="جستجوی اقامتگاه ها"
        />
        <Image
          src="/icons/Search.svg"
          className=""
          alt=""
          width={24}
          height={24}
        />
      </div>
    </nav>
  );
};

export default Navbar;
