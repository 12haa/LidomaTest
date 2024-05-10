"use client";
import React, { useState } from "react";
import Image from "next/image";
import plus from "../../../../public/icons/Plus.svg";
import residents from "../../../../public/icons/residents.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Modal } from "antd";
import ModalForm from "@/app/(root)/_compoentns/ModalForm";

const ResidenceTab = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  console.log(modalOpen);
  return (
    <section className="flex flex-col w-full   items-center  md:items-end   ">
      <div className="flex   items-center  gap-4 lg:gap-30 w-full max-md:px-4      mt-4 md:w-full md:px-20 lg:px-32   justify-between       ">
        <div className="flex   mt-2  items-center justify-center      ">
          <Button
            className="font   sm:text-sm text-blue-1 flex  gap-2   border-none "
            type="default"
            onClick={() => setModalOpen((prevState) => !prevState)}
          >
            <p className="text-[12px] font-semibold md:text-[14px]">
              افزودن اقامتگاه
            </p>
            <Image
              src={plus}
              alt="home Icon"
              width={16}
              height={18}
              className="mt-1"
            />
          </Button>
        </div>
        <div className=" md:gap-4 flex gap-3 md:pr-2   ">
          <p className=" text-[18px]  font-semibold pt-1">
            لیست اقامتگاه های من
          </p>
          <Image src={residents} alt="homeIcon" width={28} height={28} />
        </div>
      </div>
      {/*  residence tab items Start  */}
      <div className="flex items-center md:justify-end justify-center w-full mt-7 md:px-24 lg:px-36 ">
        <div className=" w-52 flex flex-col gap-2 cursor-pointer   ">
          <Link
            href="/residence/notavailable"
            className={`flex items-center justify-center ${
              pathname.endsWith("/residence/notavailable") && "text-blue-1"
            } text-xl `}
          >
            غیرفعال (6)
          </Link>
          <span
            className={`  h-0.5 rounded-t-xl  border-t-4 bg-blue-1  md:w-52 ${
              pathname.startsWith("/residence/notavailable") && "border-blue-1"
            } `}
          ></span>
        </div>

        <div className="flex flex-col gap-2 cursor-pointer  md:w-48">
          <Link
            href="/residence/available"
            className={`flex items-center justify-center text-black ${
              pathname.endsWith("/available") && "text-blue-1"
            } text-xl `}
          >
            فعال (15)
          </Link>
          <span
            className={` w-52  h-0.5 rounded-t-xl  border-t-4  md:w-48 ${
              pathname.startsWith("/residence/available") && "border-blue-1"
            }  `}
          ></span>
        </div>
      </div>
      <div>
        <ModalForm setModalOpen={setModalOpen} modalOpen={modalOpen} />
      </div>
    </section>
  );
};

export default ResidenceTab;
