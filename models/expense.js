const con = require('../config/database');

// Example query for creating the Expenses table
const createExpensesTable = `
  CREATE TABLE IF NOT EXISTS Expenses (
    expense_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    category_id INT,
    amount DECIMAL(10, 2),
    date DATE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
  )`;

// Create the Expenses table
con.query(createExpensesTable, (err, result) => {
    if (err) throw err;
    console.log('Expenses table created or already exists');
});

module.exports = {
    createExpensesTable
};