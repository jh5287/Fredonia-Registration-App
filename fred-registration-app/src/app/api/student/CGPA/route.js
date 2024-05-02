import { PrismaClient } from "@prisma/client";

export async function GET(request) {
  const prisma = new PrismaClient();
  try {
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");
    const studentCGPA = await prisma.studentCGPA.findMany({
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

    const cgpaResult = studentCGPA[0];
    const foundationsResult = studentFoundationsCGPA[0];
    console.log("CGPA: ", cgpaResult);
    console.log("FCGPA: ", foundationsResult);
    const CGPAS = {}

    if (cgpaResult) {
      CGPAS.CGPA = cgpaResult.CGPA;
    }
    else {
      CGPAS.CGPA = 0.00;
    }

    if (foundationsResult) {
      CGPAS.FoundationsCGPA = foundationsResult.CGPA;
    }
    else {
      CGPAS.FoundationsCGPA = 0.00;
    }

    console.log("CGPAS: ", CGPAS);


    await prisma.$disconnect();
    return Response.json(CGPAS);
  } catch (err) {
    console.error("Prisma error: ", err);
    await prisma.$disconnect();
    return new Response("Error fetching data", { status: 500 });
  }
}
