const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

// Get all the expenses route
router.get('/get-expenses', expenseController.getExpenses);

// Get a single expense route
router.get('/get-expense/:expenseId', expenseController.getExpense);

// Create an expense route
router.post('/create-expense', expenseController.createExpense);

// Edit an expense route
router.put('/edit-expense/:expenseId', expenseController.editExpense);

// Delete an expense route
router.delete('/delete-expense/:expenseId', expenseController.deleteExpense);

module.exports = router;
