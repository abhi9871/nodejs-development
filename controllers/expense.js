const Expense = require('../models/expense');

// Create an expense
exports.createExpense = async (req, res, next) => {
    const { expenseAmount, expenseCategory, expenseDescription } = req.body;
    try {
    const createdExpense = await Expense.create({
        amount: expenseAmount,
        category: expenseCategory,
        description: expenseDescription
    });
    console.log(createdExpense);
    res.status(200).json(createdExpense);
} catch(err) {
    console.log(err);
}
};

// Get all the expenses
exports.getExpenses = async (req, res, next) => {
    try{
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    } catch(err) {
        console.log(err);
    }
};

// Get an expense by id
exports.getExpense = async (req, res, next) => {
    const expenseId = req.params.expenseId;
    try {
        const expense = await Expense.findByPk(expenseId);
        console.log(expense);
        res.status(200).json(expense);
    } catch (err) {
      console.log(err);  
    }
};

// Edit an expense
exports.editExpense = async (req, res, next) => {
    const expenseId = req.params.expenseId;
    const { expenseAmount, expenseCategory, expenseDescription } = req.body;
    try {
        const expense = await Expense.findByPk(expenseId);
        expense.amount = expenseAmount;
        expense.category = expenseCategory;
        expense.description = expenseDescription;
        const updatedExpense = await expense.save();
        console.log(updatedExpense);
    } catch (err) {
      console.log(err);  
    }
};

// Delete an expense
exports.deleteExpense = async (req, res, next) => {
    const expenseId = req.params.expenseId;
    try {
       const expense = await Expense.findByPk(expenseId);
       const deletedExpense = await expense.destroy();
       console.log('Deleted Expense:' , deletedExpense.toJSON());
       res.status(200);
    } catch (err) {
        console.log(err);  
    }
};
