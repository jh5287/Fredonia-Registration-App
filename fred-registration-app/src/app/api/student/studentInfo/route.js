import { PrismaClient } from "@prisma/client";

export async function GET(request) {
  try {
    const prisma = new PrismaClient();
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");

    const res = await prisma.user.findMany({
      where: {
        Email: email,
      },
      include: {
        Student: {
          include: {
            StudentProgram: {
             include: {
              Program:{}
             } 
            },
          },
        },
      },
    });
    console.log("Student Info: ",res); 
    return Response.json(res);
  } catch (err) {
    console.error("Prisma error: ", err);
    return new Response("Error fetching data", { status: 500 });
  }
}
