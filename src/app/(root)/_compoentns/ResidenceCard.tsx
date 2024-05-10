"use client";
import React from "react";
import Image from "next/image";
import House1 from "/public/images/House1.jpg";

import { Button } from "antd";
import { usePathname } from "next/navigation";

const ResidenceCard = () => {
  const pathname = usePathname();

  return (
    <div className=" flex   mx-auto  items-center justify-center  gap-1     flex-col   ">
      <div className="items-center flex  flex-col w-full  h-full relative  sm:max-w-fit md:max-w-fit mx-auto  mt-2 p-4 ">
        <div className="w-full relative ">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 rounded-3xl"></div>
          <Image
            src={House1}
            alt="house"
            className="rounded-3xl "
            width={480}
            height={400}
          />
        </div>
        <div
          className={` top-10  rounded-full px-3.5 gap-2  py-5 ${
            pathname.startsWith("/residence/available")
              ? "bg-green-1"
              : "bg-red-1"
          }    absolute items-center justify-between flex  h-[28px] right-8 `}
        >
          <Image
            src={`${
              pathname.startsWith("/residence/available")
                ? "/icons/Tick.svg"
                : "/icons/Xmark.svg"
            }`}
            alt="Tick"
            width={22}
            height={22}
            className="  text-white"
          />
          <p className="text-white font-sans text-md  mb-1 ">
            {pathname.endsWith("/available") ? "فعال" : "غیرفعال"}
          </p>
        </div>
        {pathname.endsWith("/residence/available") && (
          <div
            className="absolute flex right-8 flex-col px-2 py-2  items-start  min-w-[450px]  gap-4  bottom-6   "
            dir="rtl"
          >
            <p className="text-white  font-sans font-semibold  max-md:text-lg text-md z-50  ">
              {" "}
              ویلا سه خوابه استخردار لوکس در شیراز
            </p>
            <div className="rounded-full px-4 py-1 bg-gray-1 z-50  ">
              <p className="font-sans text-white text-sm font-extralight leading-8">
                کد اقامتگاه : 158841
              </p>
            </div>
          </div>
        )}
      </div>
      {/*Button*/}
      <div className="  flex flex-col   items-center  w-full   gap-2   ">
        <div className="flex w-full gap-2  ">
          {pathname.endsWith("/residence/available") ? (
            <Button
              className="rounded-3xl  flex-shrink relative  max-md:w-[95%]  md:w-[92%] mx-auto items-center gap-2 px-32   flex justify-center  py-7"
              type="default"
            >
              <p className="font-sans text-md mb-1 text-black font-semibold text-lg ">
                ویرایش
              </p>
              <Image src="/icons/Edit.svg" alt="edit" width={24} height={24} />
            </Button>
          ) : (
            <div className="flex  gap-3 mx-auto  items-center  w-[95%] md:flex-col lg:flex-row center  ">
              <Button
                className="rounded-3xl    bg-green-1 relative   mx-auto items-center gap-2 xl:w-[80%] max-lg:px-8 max-md:w-[80%]
                 lg:px-4 md:w-[90%] lg:py-7 flex justify-center text-white  py-7"
                type="primary"
              >
                <Image
                  src="/icons/ShutDown.svg"
                  alt="edit"
                  width={20}
                  height={20}
                />
                <p className="font-sans text-md mb-1  font-semibold text-lg text-white ">
                  فعالسازی اقامتگاه
                </p>
              </Button>
              <Button
                className="rounded-3xl md:w-[90%] xl:w-[37%] max-md:w-[35%]    mx-auto items-center gap-2 px-6  flex justify-center lg:px-2 py-7 "
                type="default"
              >
                <p className="font-sans text-lg mb-1 text-black font-semibold">
                  ویرایش
                </p>
                <Image
                  src="/icons/Edit.svg"
                  alt="edit"
                  width={24}
                  height={24}
                />
              </Button>
            </div>
          )}
        </div>

        <span className="mx-auto max-md:w-[95%] md:w-[92%] h-1.5  mt-4 border-t-2"></span>
      </div>
    </div>
  );
};

export default ResidenceCard;
