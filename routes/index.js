// const express = require('express');
// const router = express.Router();
// const con = require('../config/database');

// // Example route to get all users
// router.get('/users', (req, res) => {
//   con.query('SELECT * FROM Users', (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json(result);
//   });
// });

// module.exports = router;
const express = require('express');
const router = express.Router();

// Define routes for Users
router.get('/users', (req, res) => {
    res.send('List of users');
});

// Define routes for Expenses
router.get('/expenses', (req, res) => {
    res.send('List of expenses');
});

// Define routes for Categories
router.get('/categories', (req, res) => {
    res.send('List of categories');
});

// Define routes for Payment Methods
router.get('/payment-methods', (req, res) => {
    res.send('List of payment methods');
});

// Define routes for Budgets
router.get('/budgets', (req, res) => {
    res.send('List of budgets');
});

module.exports = router;