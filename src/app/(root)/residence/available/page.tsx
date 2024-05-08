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
    <div
      className="grid  px-2 md:pr-14   grid-cols-1 md:grid-cols-2    lg:grid-cols-3   items-center  mt-1   "
      dir="rtl"
    >
      {[1, 2, 3, 4, 5].map((card, i) => (
        <ResidenceCard key={i} />
      ))}
    </div>
  );
};

export default AvailableResidences;
