import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request){
  try{
    const prisma = new PrismaClient();
    const res = await prisma.department.findMany();
    
    return NextResponse.json(res); 
  } catch(err){
    console.error("Prisma error: ", err)
    return new NextResponse("Error");  
  }
}