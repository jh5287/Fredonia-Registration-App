import { PrismaClient } from '@prisma/client';

export async function GET(request) {
    try {
        const prisma = new PrismaClient();
        const searchParams = request.nextUrl.searchParams;
        const query = Number(searchParams.get('catID'));
        const res = await prisma.courseCatalog.findMany({
          where: {
            CatalogID: query,
          },
          select: {
            RecommendedSemester: true, 
            RecommendedYear: true, 
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
        return new Response("Error: ", err)
      }
}