import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request){
  try{
    const prisma = new PrismaClient();

    //Get query params
    const searchParams = request.nextUrl.searchParams;

    const crn = searchParams.get('CRN') ? Number(searchParams.get('CRN')) : null;
    const courseCode = searchParams.get('courseCode');
    const courseTitle = searchParams.get('courseTitle');
    const credits = searchParams.get('credits') ? Number(searchParams.get('credits')) : null;
    const department = searchParams.get('department');

    const query = {};

    if (crn) query.CRN = crn;
    if (courseCode) query.CourseCode = courseCode;
    if (courseTitle) query.Title = courseTitle;
    if (credits) query.Credits = credits;
    if (department) {
      query.Department = {
        Name: department
      }
    } 


    const res = await prisma.Course.findMany({
      where: query,
      include: {
        Department: true,
      }, 
    });

    return NextResponse.json(res); 
  } catch(err){
    console.error("Prisma error: ", err)
    return new NextResponse("Error");  
  }
}