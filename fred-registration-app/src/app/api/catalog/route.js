
import {pool} from '@/db/server.js'

export async function GET(request) {
    try {
        await pool.connect();
        const result = await pool.request().query('SELECT * FROM Course');
        //return result.recordset;
        return new Response(JSON.stringify({ catalog: result.recordset }), { status: 200 })
    } catch (err) {
        console.error('SQL error: ', err);
    }
}