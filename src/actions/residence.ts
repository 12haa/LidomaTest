"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";

export async function AddResidence(residence: any, imageUrls: string) {
  try {
    await db.residence.create({
      data: {
        area: residence.residenceArea,
        dailyBassesPrice: residence.dailyBassesPrice,
        peakBasesPrice: residence.peakBasesPrice,
        pricePerExtraPerson: residence.pricePerExtraPerson,
        residenceArea: residence.area,
        residenceExactAddress: residence.residenceExactAddress,
        residenceBedCount: residence.residenceBedCount,
        residenceBedLinenCount: residence.residenceBedLinenCount,
        residenceCity: residence.residenceCity,
        residenceMaxCapacity: residence.residenceMaxCapacity,
        residenceName: residence.residenceName,
        residenceNormalCapacity: residence.residenceNormalCapacity,
        residenceProvince: residence.residenceProvince,
        residenceType: residence.residenceType,
        weeklyBasesPrice: residence.weeklyBasesPrice,
        isResidenceActive: residence.isResidenceActive,
        imagePath: imageUrls,
        isPetsAllowed: residence.isPetsAllowed,
        isSmokingAllowed: residence.isSmokingAllowed,
        ownerShip: residence.ownerShip,
        paperIsWorkRequired: residence.paperIsWorkRequired,
        partyAllowence: residence.partyAllowence,
      },
    });
    revalidatePath("/residence/available");
    revalidatePath("/residence/notavailable");

    return {
      data: residence,
      message: "Residence Added Successfully!",
    };
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
}
export async function changeResidenceActivationStatus(id: string) {
  try {
    const residence = await db.residence.update({
      where: {
        id: id,
      },
      data: {
        isResidenceActive: true,
      },
    });
    revalidatePath("/residence/available");
    revalidatePath("/residence/notavailable");

    return {
      data: residence,
      message: "Residence Activated Successfully!",
    };
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
}

export async function EditResidence(residence: any, id: string) {
  try {
    await db.residence.update({
      where: {
        id: id,
      },
      data: {
        area: residence.residenceArea,
        dailyBassesPrice: residence.dailyBassesPrice,
        peakBasesPrice: residence.peakBasesPrice,
        pricePerExtraPerson: residence.pricePerExtraPerson,
        residenceArea: residence.area,
        residenceExactAddress: residence.residenceExactAddress,
        residenceBedCount: residence.residenceBedCount,
        residenceBedLinenCount: residence.residenceBedLinenCount,
        residenceCity: residence.residenceCity,
        residenceMaxCapacity: residence.residenceMaxCapacity,
        residenceName: residence.residenceName,
        residenceNormalCapacity: residence.residenceNormalCapacity,
        residenceProvince: residence.residenceProvince,
        residenceType: residence.residenceType,
        weeklyBasesPrice: residence.weeklyBasesPrice,
        isResidenceActive: residence.isResidenceActive,
        isPetsAllowed: residence.isPetsAllowed,
        isSmokingAllowed: residence.isSmokingAllowed,
        ownerShip: residence.ownerShip,
        paperIsWorkRequired: residence.paperIsWorkRequired,
        partyAllowence: residence.partyAllowence,
      },
    });
    revalidatePath("/residence/available");
    revalidatePath("/residence/notavailable");
    return {
      data: residence,
      message: "Residence Edited Successfully!",
    };
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
}

export async function searchDatabaseForEnteredUrl(searchTerm: string) {
  const result = await db.residence.findMany({
    where: {
      OR: [
        { residenceName: { contains: searchTerm } },
        { residenceType: { contains: searchTerm } },
      ],
    },
  });
  return result;
}
