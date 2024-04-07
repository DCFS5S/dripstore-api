const mysql = require('mysql2/promise');

const getDBConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dripstore',
    port: 3306,
  });

  return connection;
}

module.exports = { getDBConnection };
