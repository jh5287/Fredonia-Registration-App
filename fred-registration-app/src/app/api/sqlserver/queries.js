'use server';

import { pool } from '../../../db/server';
import 'mssql'
import sql from 'mssql';

export async function GetAllCourses() {
    try {
        await pool.connect();
        const result = await pool.request().query('SELECT * FROM Course');
        return result.recordset;
    } catch (err) {
        console.error('SQL error: ', err);
    }
}



export async function GetCourseBySemAndYr(semester, year) {
    try {
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

        return result.recordset;
    } catch (err) {
        console.error('SQL error: ', err);
    }
}

export async function GetCourseByCatalogID(catalogID) {
    try {
        await pool.connect();

        // Define SQL query with placeholders
        const query = `
            SELECT * 
            FROM CourseCatalog as CC JOIN Course
            ON (CC.CRN = Course.CRN)
            WHERE CC.CatalogID = @CatalogID;
        `;

        // Execute the query with parameters
        const result = await pool.request()
            .input('CatalogID', sql.Int, catalogID)
            .query(query);

        return result.recordset;
    } catch (err) {
        console.error('SQL error: ', err);
    }
}



export async function GetStudentData(studentID) {
    try {
        await pool.connect();

        // Define SQL query with placeholders
        const query = `
            select S.FirstName, SR.Grade, C.CourseCode, C.Title, C.Credits, SR.TermID 
            from Student as S 
            join StudentRegistration as SR 
            on (S.StudentID = SR.StudentID)
            join Course as C
            on (SR.CRN = C.CRN)
            where S.StudentID = @StudentID;
        `;

        // Execute the query with parameters
        const result = await pool.request()
            .input('StudentID', sql.Int, studentID)
            .query(query);

        return result.recordset;
    } catch (err) {
        console.error('SQL error: ', err);
    }
}






