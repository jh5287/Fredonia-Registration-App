'use server';

import { pool } from './config';
import 'mssql'

export async function GetAllCourses() {
    try {
        await pool.connect();
        const result = await pool.request().query('SELECT * FROM Course');
        return result.recordset;
    } catch (err) {
        console.error('SQL error: ', err);
    }
}