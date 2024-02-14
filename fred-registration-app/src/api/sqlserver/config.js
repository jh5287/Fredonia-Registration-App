const sql = require('mssql');

const config = {
    server: 'fred-registration.database.windows.net',
    database: 'fredonia-registration',
    user: process.env.FREDONIA_SQLSERVER_USERNAME,
    password: process.env.FREDONIA_SQLSERVER_PASSWORD,
    options: {
        trustServerCertificate: true,
        encrypt: true
    }
};

export const pool = new sql.ConnectionPool(config);

