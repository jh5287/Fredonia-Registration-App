'use server';

import { PrismaClient } from '@prisma/client';

import { pool } from './config';
import 'mssql'

const prisma = new PrismaClient();

export async function GetAllCourses() {
    try {
        await pool.connect();
        const result = await pool.request().query('SELECT * FROM Course');
        return result.recordset;
    } catch (err) {
        console.error('SQL error: ', err);
    }
}

export async function GetAllCoursesP() {
    try {
        const allCourses = await prisma.course.findMany();
        console.log(allCourses);
    }
    catch (err) {
        console.error('Prisma error: ', err);
    }
}

export async function POST(req, res) {
    try {
        const searchString = req.query
    }
    catch (err) {
        console.error('Prisma error: ', err);
    }
}