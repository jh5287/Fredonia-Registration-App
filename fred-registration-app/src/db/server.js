// This file is used to connect to the MSSQL database. 
//It uses the mssql package to connect to the database.
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


const local_config = {
  server: '127.0.0.1',
  database: 'TestDb',
  user: 'sa',
  password: 'MyPass@word',
  options: {
      trustServerCertificate: true,
      encrypt: true
  }
};

export const pool = new sql.ConnectionPool(local_config);


