"use server";
import React from "react";
import db from "@/db/db";

const HomePage = async () => {
  const residence = await db.residence.findMany();
  return (
    <main className="flex items-center flex-col flex-1 size-full mt-4"></main>
  );
};

export default HomePage;
