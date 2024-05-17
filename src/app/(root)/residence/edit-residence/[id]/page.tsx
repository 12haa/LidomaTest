import React from "react";

import db from "@/db/db";
import AddResidenceButton from "@/app/(root)/_compoentns/AddResidenceButton";
import ResidenceCard from "@/app/(root)/_compoentns/ResidenceCard";

interface EditResidencePageParams {
  params: {
    id: string;
  };
}
const EditResidencePage = async ({ params }: EditResidencePageParams) => {
  const residences = await db.residence.findUnique({
    where: {
      id: params.id,
    },
  });
  return (
    <div className="items-center flex-col">
      <ResidenceCard residence={residences!} />
      <AddResidenceButton initialValues={residences} isEdit={true} />
    </div>
  );
};

export default EditResidencePage;
