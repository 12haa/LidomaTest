import React from "react";
import ResidenceCard from "@/app/(root)/_compoentns/ResidenceCard";
import db from "@/db/db";

const NotAvailableResidences = async () => {
  const residences = await db.residence.findMany({
    where: {
      isResidenceActive: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div
      className="grid px-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center mt-1"
      dir="rtl"
    >
      {residences.map((residence) => (
        <ResidenceCard residence={residence} key={residence.id} />
      ))}
    </div>
  );
};

export default NotAvailableResidences;
