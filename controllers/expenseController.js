const Expense = require("../models/expenseModel");
exports.readExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.userId });
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  res.render("expenses", { expenses, total, title: "Your Expenses" });
};

exports.createExpense = async (req, res) => {
  const { amount, description, category } = req.body;
  await Expense.create({ amount, description, category, user: req.userId });
  res.redirect("/expenses");
};

exports.deleteExpense = async (req, res) => {
  await Expense.deleteOne({ _id: req.params.id, user: req.userId });
  res.redirect("/expenses");
};

exports.editExpenseForm = async (req, res) => {
  const expense = await Expense.findOne({ _id: req.params.id, user: req.userId });
  res.render("edit", { expense, title: "Edit Expense" });
};

exports.updateExpense = async (req, res) => {
  const { amount, description, category } = req.body;
  await Expense.updateOne(
    { _id: req.params.id, user: req.userId },
    { amount, description, category }
  );
  res.redirect("/expenses");
};