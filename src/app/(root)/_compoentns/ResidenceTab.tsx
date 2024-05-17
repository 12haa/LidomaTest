"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import plus from "../../../../public/icons/Plus.svg";
import residents from "../../../../public/icons/residents.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Modal } from "antd";
import ModalForm from "@/app/(root)/_compoentns/ModalForm";
import AddResidenceButton from "@/app/(root)/_compoentns/AddResidenceButton";

const ResidenceTab = ({}: {}) => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col w-full items-end justify-evenly">
      <div className="flex gap-4 max-md:px-16 mt-4">
        <Link href="/residence" className=" text-[18px]  font-semibold pt-1">
          لیست اقامتگاه های من
        </Link>
        <Image src={residents} alt="homeIcon" width={28} height={28} />
      </div>
      {/*  residence tab items Start  */}
      <div className="flex items-start mt-7 mr-4">
        <div className=" w-40 flex flex-col gap-2 cursor-pointer">
          <Link
            href="/residence/notavailable"
            className={`flex items-center justify-center ${
              pathname.endsWith("/residence/notavailable") && "text-blue-1"
            } text-xl `}
          >
            غیرفعال (6)
          </Link>
          <span
            className={`h-0.5 rounded-t-xl border-t-4 bg-blue-1 w-40 ${
              pathname.startsWith("/residence/notavailable") && "border-blue-1"
            } `}
          ></span>
        </div>

        <div className="flex flex-col gap-2 cursor-pointer w-40 ">
          <Link
            href="/residence/available"
            className={`flex items-center justify-center text-black ${
              pathname.endsWith("/available") && "text-blue-1"
            } text-xl `}
          >
            فعال (15)
          </Link>
          <span
            className={` w-40  h-0.5 rounded-t-xl border-t-4 md:w-48 ${
              pathname.startsWith("/residence/available") && "border-blue-1"
            }  `}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default ResidenceTab;
