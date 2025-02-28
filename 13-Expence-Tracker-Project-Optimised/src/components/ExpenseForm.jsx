import React, { useRef, useState } from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

function ExpenseForm({
  expense,
  setExpense,
  setExpenses,
  editedExpenseId,
  setEditedExpenseId,
}) {
  const [error, setError] = useState("");

  const validateConfig = {
    title: [
      { required: true, message: "Title is required" },
      { minLength: 2, message: "Title should be atleast 2 charaters long" },
    ],
    category: [{ required: true, message: "Please select a category" }],
    amount: [{ required: true, message: "Please enter an amount" }],
  };

  function validateFormData(formData) {
    const errorData = {};
    // console.log(formData);

    Object.entries(formData).forEach(([key, value]) => {
      // console.log(key, value);
      // console.log(validateConfig[key]);
      validateConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < rule.minLength) {
          errorData[key] = rule.message;
          return true;
        }
      });
    });

    // if (!formData.title) {
    //   errorData.title = "Title is required";
    // }
    // if (!formData.category) {
    //   errorData.category = "Category is required";
    // }
    // if (!formData.amount) {
    //   errorData.amount = "Amount is required";
    // }

    setError(errorData);
    return errorData;
  }

  // USING REACT STATE WITH CONTROLLED INPUT(value and onchange{})
  function handleSubmit(e) {
    e.preventDefault();

    const errorData = validateFormData(expense);
    const errorKeys = Object.keys(errorData);
    // console.log(errorKeys);
    if (errorKeys.length > 0) return;

    if (editedExpenseId) {
      setExpenses((prevState) => {
        return prevState.map((prevExpense) => {
          if (prevExpense.id === editedExpenseId) {
            return { ...expense, id: editedExpenseId };
          }
          return prevExpense;
        });
      });
    }

    if (!editedExpenseId) {
      setExpenses((prevState) => [
        ...prevState,
        { ...expense, id: crypto.randomUUID() },
      ]);
    }

    setExpense({
      title: "",
      category: "",
      amount: "",
    });

    setEditedExpenseId("");
  }

  function handleOnChange(e) {
    setExpense((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    setError((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  // USING REACT useRef (UNCONTROLLED INPUT, not using state) --->>>
  // const titleRef = useRef("");
  // const categoryRef = useRef("");
  // const amountRef = useRef("");

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   setExpenses((prevState) => [
  //     ...prevState,
  //     {
  //       id: crypto.randomUUID(),
  //       title: titleRef.current.value,
  //       category: categoryRef.current.value,
  //       amount: amountRef.current.value,
  //     },
  //   ]);

  //   titleRef.current.value = "";
  //   categoryRef.current.value = "";
  //   amountRef.current.value = "";
  // }

  // <<<<<<<<<<    --------------   >>>>>>>>>>

  // USING NORMAL JS - new FormData() METHOD --->>
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const expense = getFormData(e.target);
  //   setExpenses((prevState) => [
  //     ...prevState,
  //     { ...expense, id: crypto.randomUUID() },
  //   ]);
  //   // clear form after submit
  //   e.target.reset();
  // }

  // function getFormData(form) {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (let [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <CustomInput
        id="title"
        type="text"
        label="Title"
        name="title"
        value={expense.title}
        onChange={handleOnChange}
        error={error.title}
      />

      <CustomSelect
        id="category"
        label="Category"
        name="category"
        value={expense.category}
        onChange={handleOnChange}
        error={error.category}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="Select Category"
      />

      <CustomInput
        id="amount"
        type="number"
        label="Amount"
        name="amount"
        value={expense.amount}
        onChange={handleOnChange}
        error={error.amount}
      />

      {/* <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          // ref={amountRef}
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleOnChange}
          // onChange={(e) =>
          //   setExpense((prev) => ({ ...prev, amount: e.target.value }))
          // }
        />
        <p className="error">{error.amount}</p>
      </div> */}

      <button className="add-btn">{editedExpenseId ? "Edit" : "Add"}</button>
    </form>
  );
}

export default ExpenseForm;
