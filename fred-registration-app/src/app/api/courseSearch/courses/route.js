import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request){
  try{
    const prisma = new PrismaClient();

    //Get query params
    const searchParams = request.nextUrl.searchParams;
    console.log(searchParams); 

    const crn = Number(searchParams.get('CRN'));
    const courseCode = Number(searchParams.get('courseCode'));
    const courseTitle = Number(searchParams.get('courseTitle'));
    const credits = Number(searchParams.get('credits'));
    const department = Number(searchParams.get('department'));

    console.log(crn); 


    //const res = await prisma.Course.findMany();
    
    return NextResponse.json("TEST"); 
  } catch(err){
    console.error("Prisma error: ", err)
    return new NextResponse("Error");  
  }
}