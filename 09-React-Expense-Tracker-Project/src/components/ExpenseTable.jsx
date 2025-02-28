import React, { useEffect, useState } from "react";
import { useFilter } from "./hooks/useFilter";
import ContextMenu from "./ContextMenu";

function ExpenseTable({ expenses, setExpenses, setFormData, setEditingRowId }) {
  // const [selectCategory, setSelectCategory] = useState("");

  // console.log(window)
  // useEffect(() => {
  //   window.addEventListener("click", () => (setMenuPosition({ left: "", top: ""})));
  // }, [])

  const [filteredData, setQuery] = useFilter(expenses, (data) => data.category);

  // console.log(filteredData);

  const [menuPosition, setMenuPosition] = useState({ left: "", top: "" });

  const [rowId, setRowId] = useState("");

  const totalAmount = filteredData.reduce((acc, el) => {
    // console.log(el.amount)
    return acc + Number(el.amount);
  }, 0);
  // console.log(totalAmount);

  // const filterData = expenses.filter((expense) => {
  //   return expense.category.toLowerCase().includes(selectCategory);
  // });

  // console.log(filterData);

  return (
    <>
      <table
        className="expense-table"
        onClick={() => {
          if (menuPosition.left) {
            setMenuPosition({ left: "", top: "" });
          }
        }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select
                name="selectCategory"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              >
                <option value="">All</option>
                <option value="Grocery">Grocery</option>
                <option value="Clothes">Clothes</option>
                <option value="Bills">Bills</option>
                <option value="Education">Education</option>
                <option value="Medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={(e) => {
                    setExpenses((prevState) => [
                      ...prevState.sort((a, b) => a.amount - b.amount),
                    ]);
                  }}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={(e) => {
                    setExpenses((prevState) => [
                      ...prevState.sort((a, b) => b.amount - a.amount),
                    ]);
                  }}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((element) => {
            // console.log(element.category);
            return (
              <tr
                key={element.id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setMenuPosition({ left: e.clientX, top: e.clientY });
                  setRowId(element.id);
                }}
              >
                <td>{element.title}</td>
                <td>{element.category}</td>
                <td>₹{element.amount}</td>
              </tr>
            );
          })}
          <tr>
            <th>Total</th>
            <th></th>
            <th>₹{totalAmount}</th>
          </tr>
        </tbody>
      </table>

      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        setExpenses={setExpenses}
        expenses={expenses}
        rowId={rowId}
        setFormData={setFormData}
        setEditingRowId={setEditingRowId}
      />
    </>
  );
}

export default ExpenseTable;
