import { PrismaClient } from "@prisma/client";

export async function GET(request) {
    try {
        const prisma = new PrismaClient();
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get('CRN');
        console.log(query);
        const res = await prisma.course.findMany({
            where: {
                CRN: query === null ? undefined: Number(query)
            }
        });

        return Response.json(res)
    }
    catch (err) {
        console.error("Prisma error: ", err);
        return new Response("Error");
    }

}