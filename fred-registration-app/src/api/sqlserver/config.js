const sql = require('mssql');

const config = {
    server: 'fred-registration.database.windows.net',
    database: 'fredonia-registration',
    user: 'FredoniaRegAdmin',
    password: 'kzBahXz8q%w$',
    options: {
        trustServerCertificate: true,
        encrypt: true
    }
};

export const pool = new sql.ConnectionPool(config);

