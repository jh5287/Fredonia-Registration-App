import { PrismaClient } from "@prisma/client";

export async function GET(request) {
    try {
        const prisma = new PrismaClient();
        const searchParams = request.nextUrl.searchParams;
        const searchCRN = searchParams.get('CRN');
        const searchCourseCode = searchParams.get('CourseCode');
        const res = await prisma.course.findMany({
            where: {
                CRN: searchCRN === null ? undefined: Number(searchCRN),
                CourseCode: searchCourseCode === null ? undefined: searchCourseCode
            }
        });

        return Response.json(res)
    }
    catch (err) {
        console.error("Prisma error: ", err);
        return new Response("Error");
    }

}