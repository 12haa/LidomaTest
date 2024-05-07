import React from "react";
import Image from "next/image";
import House1 from "/public/images/House1.jpg";
import Tick from "/public/icons/Tick.svg";
import { Button } from "antd";

const ResidenceCard = () => {
  return (
    <div className=" flex  mx-auto items-center justify-center  gap-1      flex-col   ">
      <div className="items-center flex flex-col w-full  h-full relative  sm:max-w-fit md:max-w-fit mx-auto  mt-2 p-4 ">
        <div className="w-full">
          <Image
            src={House1}
            alt="house"
            className="rounded-3xl "
            width={400}
            height={200}
          />
        </div>
        <div className=" top-10 bg-green-1 rounded-full px-3.5 gap-2  py-5      absolute items-center justify-between flex  h-[28px] right-8 ">
          <p className="text-white font-sans text-md  mb-1 ">فعال</p>
          <Image
            src={Tick}
            alt="Tick"
            width={22}
            height={22}
            className="  text-white"
          />
        </div>
        <div
          className="absolute flex right-8 flex-col px-2 py-2  items-start  min-w-[450px]  gap-4  bottom-6   "
          dir="rtl"
        >
          <p className="text-white  font-sans font-semibold  text-lg z-50  ">
            {" "}
            ویلا سه خوابه استخردار لوکس در شیراز
          </p>
          <div className="rounded-full px-4 py-1 bg-gray-1 z-50  ">
            <p className="font-sans text-white text-sm font-extralight leading-8">
              کد اقامتگاه : 158841
            </p>
          </div>
          {/*TODO : ADD  SHADOW Overlay*/}
          {/*<div className="absolute p-4 bottom-0 image-shadow w-full "></div>*/}
        </div>
      </div>
      {/*Button*/}
      <div className="  flex flex-col   items-center     gap-2   ">
        <Button
          className="rounded-3xl  relative gap  mx-auto items-center gap-2 px-32   flex justify-center  py-7"
          type="default"
        >
          <p className="font-sans text-md mb-1 text-black font-semibold text-lg ">
            ویرایش
          </p>
          <Image src="/icons/Edit.svg" alt="edit" width={24} height={24} />
        </Button>

        <span className="mx-auto w-[100px]  h-0.5  mt-4 border-t-2"></span>
      </div>
    </div>
  );
};

export default ResidenceCard;
