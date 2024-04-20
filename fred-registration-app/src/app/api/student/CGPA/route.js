import { PrismaClient } from "@prisma/client";

export async function GET(request) {
  try {
    const prisma = new PrismaClient();
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");
    const studentCGPA = await prisma.StudentCGPA.findMany({
      where: {
        Student: {
          User: {
            Email: email,
          },
        },
      },
      select: {
        CGPA: true 
      }
    });

    const studentFoundationsCGPA = await prisma.StudentFoundationsCGPA.findMany({
      where: {
        Student: {
          User: {
            Email: email,
          },
        },
      },
      select: {
        CGPA: true 
      }
    });


    const CGPAS = {
      CGPA: studentCGPA[0].CGPA, 
      FoundationsCGPA: studentFoundationsCGPA[0].CGPA 
    }


    console.log(CGPAS); 
    await prisma.$disconnect();
    return Response.json(CGPAS);
  } catch (err) {
    console.error("Prisma error: ", err);
    await prisma.$disconnect();
    return new Response("Error fetching data", { status: 500 });
  }
}
