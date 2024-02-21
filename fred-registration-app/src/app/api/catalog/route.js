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
          include: {
            Course: true,
          },
        });
        
        return Response.json(res);
      } catch (err) {
        console.error("Prisma error: ", err);
        return new Response("Error: ", err)
      }
}