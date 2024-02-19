

import pool from '../../../db/server';

export async function GET(request) {
    try {
        await pool.connect();
        const result = await pool.request().query('SELECT * FROM Course');
        return result.recordset;
    } catch (err) {
        console.error('SQL error: ', err);
    }
}