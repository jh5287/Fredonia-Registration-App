
import {pool} from '@/db/server.js'
import sql from 'mssql';
import 'mssql'

export async function GET(request, params) {
    try {
        const { semester, year } = params.params;
        await pool.connect();

        const result = await prisma.courseCatalog.findMany({
            where: {
              AND: [
                {
                  catalogID: catalogID,
                },
                {
                  recommendedSemester: semester,
                },
                {
                  recommendedYear: year,
                },
              ],
            },
            include: {
              course: true,
            },
          });

        //return result.recordset;
        return new Response(JSON.stringify({ catalog: result }), { status: 200 })
    } catch (err) {
        console.error('SQL error: ', err);
    }
}