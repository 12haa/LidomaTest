"use client";
import Navbar from "@/app/(root)/_compoentns/Navbar";
import ResidenceTab from "@/app/(root)/_compoentns/ResidenceTab";

import AddResidenceButton from "@/app/(root)/_compoentns/AddResidenceButton";
import React, { useEffect, useState } from "react";
import ModalForm from "@/app/(root)/_compoentns/ModalForm";
import { usePathname, useRouter } from "next/navigation";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    router.push("/residence");
  }, []);

  return (
    <main className="size-full  mt-1 flex flex-col">
      <div className="flex items-center py-3 justify-center w-full border-b-2 mb-4 md:mb-0">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="flex w-full items-center justify-between px-4 sm:px-8 md:px-32 ">
        <div
          className={`flex ${
            pathname.startsWith("/residence/edit-residence") ? "hidden" : ""
          }`}
        >
          <AddResidenceButton />
        </div>
        <ResidenceTab />
      </div>
      {children}
    </main>
  );
}
