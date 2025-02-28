import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./components/expenseData";
import "./App.css";
import { useLocalStorage } from "./components/hooks/useLocalStorage";

function App() {

  const [formData, setFormData] = useLocalStorage("formData", {
    title: "",
    category: "",
    amount: "",
  });

  // const [expenses, setExpenses] = useState(expenseData);

  const [expenses, setExpenses] = useLocalStorage("expenses", expenseData);

  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId","");


  return (
    <>
      <main>
        <h1 className="heading">Track Your Expense</h1>

        <div className="expense-tracker">
          <ExpenseForm
            setExpenses={setExpenses}
            formData={formData}
            setFormData={setFormData}
            editingRowId={editingRowId}
            setEditingRowId={setEditingRowId}
          />

          <ExpenseTable
            expenses={expenses}
            setExpenses={setExpenses}
            setFormData={setFormData}
            setEditingRowId={setEditingRowId}
          />
        </div>
      </main>
    </>
  );
}

export default App;
