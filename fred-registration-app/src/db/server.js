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
  database: process.env.LOCAL_SERVER_DB,
  user: process.env.LOCAL_SERVER_USER,
  password: process.env.LOCAL_SERVER_PASS,
  options: {
      trustServerCertificate: true,
      encrypt: true
  }
};

export const pool = new sql.ConnectionPool(local_config);


