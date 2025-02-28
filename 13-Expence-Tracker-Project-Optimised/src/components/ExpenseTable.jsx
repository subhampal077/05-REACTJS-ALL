import React, { useState } from "react";
import { useFilter } from "../../hook/useFilter";
import ContextMenu from "./ContextMenu";

function ExpenseTable({
  setExpense,
  expenses,
  setExpenses,
  categoryOptions,
  setEditedExpenseId,
}) {
  // const [category, setCategory] = useState("");

  //useFilter custom hook
  const [filteredData, setFilterVal] = useFilter(
    expenses,
    (data) => data.category
  );
  const [sortCallabck, setSortCallabck] = useState(() => () => {});
  const [position, setPosition] = useState({
    left: "",
    right: "",
    display: "",
  });
  const [expenseId, setExpenseId] = useState("");

  return (
    <>
      <ContextMenu
        setExpense={setExpense}
        position={position}
        setPosition={setPosition}
        expenses={expenses}
        setExpenses={setExpenses}
        expenseId={expenseId}
        setEditedExpenseId={setEditedExpenseId}
      />

      <table
        className="expense-table"
        onClick={() => {
          if (position.left) {
            setPosition({});
          }
        }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select
                onChange={(e) => setFilterVal(e.target.value.toLowerCase())}
              >
                <option value="">All</option>

                {categoryOptions.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  onClick={() => {
                    setSortCallabck(() => (a, b) => a.amount - b.amount);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  onClick={() => {
                    setSortCallabck(() => (a, b) => b.amount - a.amount);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.sort(sortCallabck).map((expense) => (
            <tr
              key={expense.id}
              onContextMenu={(e) => {
                e.preventDefault();

                setPosition({
                  left: e.clientX,
                  top: e.clientY,
                  display: "block",
                });

                setExpenseId(expense.id);
              }}
            >
              <td>{expense.title}</td>
              <td>{expense.category}</td>
              <td>₹{expense.amount}</td>
            </tr>
          ))}

          <tr>
            <th>Total</th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => setSortCallabck(() => () => {})}
            >
              Clear Sort
            </th>
            <th>
              ₹
              {
                // expenses
                //   .filter((expense) =>
                //     expense.category.toLowerCase().includes(category)
                //   )

                filteredData.reduce((acc, expense) => {
                  return (acc += +expense.amount);
                }, 0)
              }
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ExpenseTable;
