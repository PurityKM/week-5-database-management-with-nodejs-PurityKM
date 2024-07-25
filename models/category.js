const con = require('../config/database');

// Example query for creating the Categories table
const createCategoriesTable = `
  CREATE TABLE IF NOT EXISTS Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    category_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
  )`;

// Create the Categories table
con.query(createCategoriesTable, (err, result) => {
    if (err) throw err;
    console.log('Categories table created or already exists');
});

module.exports = {
    createCategoriesTable
};