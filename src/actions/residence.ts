"use server";

import db from "@/db/db";

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
      },
    });

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
