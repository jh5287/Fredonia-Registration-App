import { PrismaClient } from "@prisma/client";

export async function GET(request) {
  try {
    const prisma = new PrismaClient();
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");

    const res = await prisma.StudentRegistration.findMany({
      where: {
        Student: {
          Email: email,
        },
      },
      select: {
        CRN: true,
        TermID: true,
        Status: true,
        Grade: true,
        Term: {
          select: {
            TermName: true,
          },
        },
      },
    });

    return Response.json(res);
  } 
  catch (err) {
    console.error("Prisma error: ", err);
    return new Response("Error fetching data", { status: 500 });
  }
}
