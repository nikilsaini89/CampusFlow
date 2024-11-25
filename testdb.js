const mysql = require('mysql2');  // Use mysql2 for better compatibility
require('dotenv').config();  // Load the .env file

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'cumsdbms'  // Name of the database
});

// Test the connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

// Close the connection
connection.end();
