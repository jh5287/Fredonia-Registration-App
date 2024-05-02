import { PrismaClient } from "@prisma/client";

export async function GET(request) {
  try {
    const prisma = new PrismaClient();
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");

    const res = await prisma.StudentCatalog.findMany({
      where: {
        Student: {
          User: {
            Email: email,
          },
        },
      },
      select: {
        CatalogID: true,
        Catalog: {
          select: {
            Program: {
              select: {
                ProgramName: true,
              },
            },
          },
        },
      },
    });

    const userCatalogs = res.map((data) => ({
      programName: data.Catalog.Program.ProgramName,
      catalogID: data.CatalogID,
    }));


    return Response.json(userCatalogs);
  } catch (err) {
    console.error("Prisma error: ", err);
    return new Response("Error fetching data", { status: 500 });
  }
}
