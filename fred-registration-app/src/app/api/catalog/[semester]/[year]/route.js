
import {pool} from '@/db/server.js'
import sql from 'mssql';
import 'mssql'

export async function GET(request, params) {
    try {
        const { semester, year } = params.params;
        await pool.connect();

        // Define SQL query with placeholders
        const query = `
            SELECT * 
            FROM CourseCatalog as CC JOIN Course
            ON (CC.CRN = Course.CRN)
            WHERE CC.CatalogID = @CatalogID
            AND CC.RecommendedSemester = @Semester
            AND CC.RecommendedYear = @Year;
        `;

        // Execute the query with parameters
        const result = await pool.request()
            .input('CatalogID', sql.Int, 1)
            .input('Semester', sql.VarChar, semester)
            .input('Year', sql.Int, year)
            .query(query);

        //return result.recordset;
        return new Response(JSON.stringify({ catalog: result.recordset }), { status: 200 })
    } catch (err) {
        console.error('SQL error: ', err);
    }
}