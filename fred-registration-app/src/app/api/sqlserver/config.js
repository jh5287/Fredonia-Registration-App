const sql = require('mssql');

const config = {
    server: 'localhost',
    database: 'registration',
    user: 'sa',
    password: 'Pooter1203',
    options: {
        trustServerCertificate: true,
        encrypt: true
    }
};



export const pool = new sql.ConnectionPool(config);

