"use client";
import React from "react";
import Image from "next/image";
import plus from "../../../../public/icons/Plus.svg";
import residents from "../../../../public/icons/residents.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ResidenceTab = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <section className="flex flex-col w-full items-center  md:items-end ">
      <div className="flex w-full  items-center justify-between mt-4   px-6">
        <div className="flex  gap-2 font-sans ">
          <p className="font text-md text-blue-1  ">افزودن اقامتگاه</p>
          <Image src={plus} alt="home Icon" width={18} height={18} />
        </div>
        <div className="flex  gap-4   p-1">
          <p className="font-sans  text-[20px] leading-1 pt-1">
            لیست اقامتگاه های من
          </p>
          <Image src={residents} alt="home Icon" width={28} height={28} />
        </div>
      </div>
      {/*  residence tab items Start  */}
      <div className="flex items-center md:justify-end justify-center  w-full mt-7 ">
        <div className="flex flex-col gap-2 cursor-pointer  ">
          <Link
            href="/residence/notavailable"
            className={`flex items-center justify-center ${
              pathname.endsWith("/residence/notavailable") && "text-blue-1"
            } text-xl `}
          >
            غیرفعال (6)
          </Link>
          <span
            className={`w-48 h-0.5 rounded-t-xl  border-t-4 bg-blue-1  ${
              pathname.startsWith("/residence/notavailable") && "border-blue-1"
            } `}
          ></span>
        </div>

        <div className="flex flex-col gap-2 cursor-pointer">
          <Link
            href="/residence/available"
            className={`flex items-center justify-center text-black ${
              pathname.endsWith("/available") && "text-blue-1"
            } text-xl `}
          >
            فعال (15)
          </Link>
          <span
            className={`w-48 h-0.5 rounded-t-xl  border-t-4  ${
              pathname.startsWith("/residence/available") && "border-blue-1"
            }  `}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default ResidenceTab;
