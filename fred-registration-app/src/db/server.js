// This file is used to connect to the MSSQL database. 
//It uses the mssql package to connect to the database.
const sql = require('mssql')

const config = {
  server: 'fredonia-registration.database.windows.net',
  database: 'Fredonia Registration',
  user: 'FredoniaRegAdim',
  password: 'kzBahXz8q%w$',
  options: {
    encrypt: true
  }
}

const pool = new sql.ConnectionPool(config)


export default pool;
