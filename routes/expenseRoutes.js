const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { readExpenses, createExpense, deleteExpense, editExpenseForm, updateExpense } = require("../controllers/expenseController");

router.get("/", auth, readExpenses);
router.post("/create", auth, createExpense);
router.get("/delete/:id", auth, deleteExpense);
router.get("/edit/:id", auth, editExpenseForm);
router.post("/update/:id", auth, updateExpense);








module.exports=router;