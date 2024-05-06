import React from "react";
import ResidenceCard from "@/app/(root)/_compoentns/ResidenceCard";
import { Button } from "antd";
import Image from "next/image";

const Residence = [
  {
    id: 1,
    title: "ویلا",
    imagePath: "/public/images/House1.jpg",
    isAvailable: "فعال",
  },
  {
    id: 1,
    title: "ویلا",
    imagePath: "/public/images/House1.jpg",
    isAvailable: "فعال",
  },
  {
    id: 1,
    title: "ویلا",
    imagePath: "/public/images/House1.jpg",
    isAvailable: "فعال",
  },
];
const AvailableResidences = () => {
  return (
    <div className="grid  max-sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-3   border-4 relative max-sm:w-full  items-center justify-center mt-3">
      {[1, 2, 3, 4, 5, 6].map((card) => (
        <ResidenceCard />
      ))}
      <div className=" mx-auto mt-6 flex  flex-col justify-center gap-2 md:hidden">
        <Button
          className="rounded-3xl w-[450px] mx-auto gap-2 items-center flex justify-center py-8"
          type="default"
        >
          <p className="font-sans text-md mb-1 text-black font-semibold text-lg ml-2">
            مشاهده بیشتر
          </p>
          <Image src="/icons/DarkPlus.svg" alt="edit" width={24} height={24} />
        </Button>
        <span className="mx-auto w-[440px] h-0.5  mt-4 border-t-2"></span>
      </div>
    </div>
  );
};

export default AvailableResidences;
