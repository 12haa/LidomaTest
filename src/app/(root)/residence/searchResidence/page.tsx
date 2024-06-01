import React from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { searchDatabaseForEnteredUrl } from "@/actions/residence";
import ResidenceCard from "@/app/(root)/_compoentns/ResidenceCard";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { q: string };
}) => {
  // const searchParams = useSearchParams();
  // const q = searchParams.get("q") || "";
  // console.log(q, "im QQQ");
  const { q } = searchParams;

  const residence = await searchDatabaseForEnteredUrl(q);

  return (
    <div className="items-center mt-4 mx-auto flex gap-20">
      {residence.length > 0 ? (
        residence.map((res) => <ResidenceCard residence={res} key={res.id} />)
      ) : (
        <p>No Residence Found</p>
      )}
    </div>
  );
};

export default SearchPage;
