import React from "react";
import ResidenceCard from "@/app/(root)/_compoentns/ResidenceCard";
import { Button } from "antd";
import Image from "next/image";
import db from "@/db/db";

// async function getResidenceData() {
//   try {
//   } catch (err: any) {
//     error: err.message;
//   }
// }
const AvailableResidences = async () => {
  // const residences = await getResidenceData();
  const residences = await db.residence.findMany();

  return (
    <div
      className="grid px-2 md:pr-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mt-1 "
      dir="rtl"
    >
      {residences.map((residence, i) => (
        <ResidenceCard key={residence.id} residence={residence} />
      ))}
      <div className="p-4 md:hidden mt-4 w-full ">
        <Button
          className="rounded-3xl w-full sm:w-[70%] mx-auto items-center gap-2 max-md:px-6  flex justify-center lg:px-2 py-7 "
          type="default"
        >
          <p className="font-sans text-lg mb-1 text-black font-semibold">
            مشاهده بیشتر
          </p>
          <Image
            src="/icons/BlackPlus.svg"
            alt="edit"
            width={24}
            height={24}
            className="text-black"
          />
        </Button>
      </div>
    </div>
  );
};

export default AvailableResidences;
