import { PrismaClient } from "@prisma/client";

export async function GET(request) {
  try {
    const prisma = new PrismaClient();
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");

    const res = await prisma.StudentRegistration.findMany({
      where: {
        Student: {
          User: {
            Email: email,
          },
        },
      },
      select: {
        TermID: true,
        Status: true,
        Grade: true,
        Term: {
          select: {
            Semester: true,
            Year: true,
          },
        },
        Course: {
          select: {
            CRN: true, 
            Title: true,
            CourseCode: true,
            Credits: true,
            CourseAttribute: {
              select: {
                Attribute: {
                  select: {
                    Description: true, 
                  }
                }
              }
            }
          },
        },
      },
    });
    return Response.json(res);
  } catch (err) {
    console.error("Prisma error: ", err);
    return new Response("Error fetching data", { status: 500 });
  }
}
