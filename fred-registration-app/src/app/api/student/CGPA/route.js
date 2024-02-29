import { PrismaClient } from "@prisma/client";

export async function GET(request) {
  try {
    const prisma = new PrismaClient();
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");
    const studentCGPA = await prisma.StudentCGPA.findMany({
      where: {
        Student: {
          Email: email,
        },
      },
      select: {
        CGPA: true 
      }
    });

    await prisma.$disconnect();
    return Response.json(studentCGPA);
  } catch (err) {
    console.error("Prisma error: ", err);
    await prisma.$disconnect();
    return new Response("Error fetching data", { status: 500 });
  }
}
