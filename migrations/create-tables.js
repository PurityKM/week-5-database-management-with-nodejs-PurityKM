const con = require('../config/database');
const { createUserTable } = require('../models/user');
const { createCategoriesTable } = require('../models/category');
const { createExpensesTable } = require('../models/expense');
const { createPaymentMethodsTable } = require('../models/paymentMethod');
const { createBudgetsTable } = require('../models/budget');

// Execute all table creation queries
con.query(createUserTable, (err, result) => {
    if (err) throw err;
    console.log('Users table created or already exists');

    con.query(createCategoriesTable, (err, result) => {
        if (err) throw err;
        console.log('Categories table created or already exists');

        con.query(createPaymentMethodsTable, (err, result) => {
            if (err) throw err;
            console.log('Payment Methods table created or already exists');

            con.query(createBudgetsTable, (err, result) => {
                if (err) throw err;
                console.log('Budgets table created or already exists');

                con.query(createExpensesTable, (err, result) => {
                    if (err) throw err;
                    console.log('Expenses table created or already exists');

                    // Close the connection
                    con.end(err => {
                        if (err) throw err;
                        console.log('Connection closed');
                    });
                });
            });
        });
    });
});