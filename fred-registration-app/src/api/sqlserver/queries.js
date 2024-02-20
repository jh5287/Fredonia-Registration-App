"use server";

import { pool } from "./config";
import "mssql";
import sql from "mssql";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GetAllCourses() {
  try {
    await pool.connect();
    const result = await pool.request().query("SELECT * FROM Course");
    return result.recordset;
  } catch (err) {
    console.error("SQL error: ", err);
  }
}

export async function GetCourseBySemAndYr(semester, year) {
  try {
    const result = await prisma.courseCatalog.findMany({
      where: {
        AND: [
          {
            CatalogID: 1,
          },
          {
            RecommendedSemester: semester,
          },
          {
            RecommendedYear: year,
          },
        ],
      },
      include: {
        Course: true,
      },
    });
    return result;
  } catch (err) {
    console.error("Prisma error: ", err);
  }
}

export async function GetCatalog(catalogID) {
  try {
    const result = await prisma.courseCatalog.findMany({
      where: {
        CatalogID: catalogID,
      },
      include: {
        Course: true,
      },
    });
    console.log(result)
    return result;
  } catch (err) {
    console.error("Prisma error: ", err);
  }
}