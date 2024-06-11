// config/db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Carrega as variáveis do arquivo .env

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados');
    connection.release(); // Liberar a conexão de volta ao pool
  }
});

module.exports = pool.promise();



// CREATE DATABASE `mfs_lavacar`; 


// USE mfs_lavacar;

// CREATE TABLE schedules (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     cpf VARCHAR(14) NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     phone VARCHAR(20) NOT NULL,
//     carModel VARCHAR(255) NOT NULL,
//     placaCar VARCHAR(20) NOT NULL,
//     date DATE NOT NULL,
//     time TIME NOT NULL,
//     service VARCHAR(50) NOT NULL,
//     payment VARCHAR(50) NOT NULL
// );

