// pages/api/search.ts
import { NextApiRequest, NextApiResponse } from "next";
import db from "@/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    // Example Prisma query to search for residences by name or some other field
    const residences = await db.residence.findMany({
      where: {
        residenceName: {
          contains: query,
        },
      },
    });

    return res.status(200).json(residences);
  } catch (error) {
    console.error("Search error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
