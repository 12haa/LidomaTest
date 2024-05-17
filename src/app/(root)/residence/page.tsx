import React from "react";
import ResidenceTab from "@/app/(root)/_compoentns/ResidenceTab";
import db from "@/db/db";
import ResidenceCard from "@/app/(root)/_compoentns/ResidenceCard";
import { Residence } from "@prisma/client";

const ResidencePage = async () => {
  const residences = await db.residence.findMany();
  return (
    <div
      className="grid px-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-4   "
      dir="rtl"
    >
      {residences.map((residence) => (
        <ResidenceCard key={residence.id} residence={residence} />
      ))}
    </div>
  );
};

export default ResidencePage;
