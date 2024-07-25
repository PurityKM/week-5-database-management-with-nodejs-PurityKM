const con = require('../config/database');

// Example query for creating the Payment Methods table
const createPaymentMethodsTable = `
  CREATE TABLE IF NOT EXISTS Payment_Methods (
    payment_method_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    payment_method_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
  )`;

// Create the Payment Methods table
con.query(createPaymentMethodsTable, (err, result) => {
    if (err) throw err;
    console.log('Payment Methods table created or already exists');
});

module.exports = {
    createPaymentMethodsTable
};