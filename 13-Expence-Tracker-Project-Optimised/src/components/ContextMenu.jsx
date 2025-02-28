import React from "react";

function ContextMenu({
  setExpense,
  position,
  setPosition,
  expenses,
  setExpenses,
  expenseId,
  setEditedExpenseId,
}) {
  // console.log(expenseId, expenses);

  return (
    <div
      className="context-menu"
      style={{
        display: position?.display,
        left: position?.left,
        top: position?.top,
      }}
    >
      <div
        onClick={() => {
          setEditedExpenseId(expenseId);

          const { title, category, amount } = expenses.find(
            (expense) => expense.id === expenseId
          );

          setExpense({ title, category, amount });

          setPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== expenseId)
          );

          setPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}

export default ContextMenu;
