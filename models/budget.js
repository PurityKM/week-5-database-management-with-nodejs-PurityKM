const con = require('../config/database');

// Example query for creating the Budgets table
const createBudgetsTable = `
  CREATE TABLE IF NOT EXISTS Budgets (
    budget_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    category_id INT,
    amount DECIMAL(10, 2),
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
  )`;

// Create the Budgets table
con.query(createBudgetsTable, (err, result) => {
    if (err) throw err;
    console.log('Budgets table created or already exists');
});

module.exports = {
    createBudgetsTable
};