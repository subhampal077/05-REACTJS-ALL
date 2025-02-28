import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

import ExpenseData from "./components/ExpenseData";
import { useLocalStorage } from "../hook/useLocalStorage";

function App() {
  // const [expenses, setExpenses] = useState(ExpenseData);

  const [expenses, setExpenses] = useLocalStorage("expensesData", ExpenseData);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [editedExpenseId, setEditedExpenseId] = useState("");

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editedExpenseId={editedExpenseId}
          setEditedExpenseId={setEditedExpenseId}
        />

        <ExpenseTable
          setExpense={setExpense}
          expenses={expenses}
          setExpenses={setExpenses}
          setEditedExpenseId={setEditedExpenseId}
          categoryOptions={[
            "Grocery",
            "Clothes",
            "Bills",
            "Education",
            "Medicine",
          ]}
        />
      </div>
    </main>
  );
}

export default App;
