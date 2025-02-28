import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Select from "./Select";

function ExpenseForm({
  setExpenses,
  formData,
  setFormData,
  editingRowId,
  setEditingRowId,
}) {
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter Title" },
      { minLength: 2, message: "Title should be at least 2 characters long" },
    ],
    category: [{ required: true, message: "Please enter Category" }],
    amount: [
      { required: true, message: "Please enter Amount" },
      { pattern: /^(0|[1-9]\d*)$/, message: "Please enter a valid number" },
    ],
  };

  function validate(formData) {
    const errorData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        // console.log(rule)
        if (rule.required == true && !value) {
          errorData[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < 2) {
          errorData[key] = rule.message;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
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

    setErrors(errorData);
    return errorData;
  }

  //   const [title, setTitle] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [amount, setAmount] = useState("");

  // const myRef = useRef(0);

  // const titleRef = useRef(0);
  // const categoryRef = useRef(0);
  // const amountRef = useRef(0);

  // console.log(myRef.current.value);

  // useEffect(() => {
  //   // myRef.current.style.backgroundColor = "red";
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    // // console.log(e.target);    // using basic js
    // const formData = new FormData(e.target);

    // const data = {};
    // for (const [key, value] of formData.entries()) {
    //   data[key] = value;
    // }
    // setExpenses((prevState) => [
    //   ...prevState,
    //   { ...data, id: crypto.randomUUID() },
    // ]);
    // e.target.reset();

    // +++++++++++++++++++++++++++++++++++++++++++++//

    // using react

    // const expense = { title, category, amount };
    // console.log(expense);
    // setExpenses((prevState) => [
    //   ...prevState,
    //   { ...expense, id: crypto.randomUUID() },
    // ]);

    // setTitle("");
    // setCategory("");
    // setAmount("");

    // ++++++++++++++++++++++++++++++++++++++++++++++++ //

    const errorResult = validate(formData);

    if (Object.keys(errorResult).length !== 0) {
      return;
    }

    if (editingRowId) {
      setExpenses((prevState) =>
        prevState.map((element) => {
          if (element.id === editingRowId) {
            return { ...formData, id: editingRowId };
          }
          return element;
        })
      );

      setFormData({
        title: "",
        category: "",
        amount: "",
      });

      setEditingRowId("");
      return;
    }

    // console.log(formData);
    setExpenses((prevState) => [
      ...prevState,
      { ...formData, id: crypto.randomUUID() },
    ]);

    setFormData({
      title: "",
      category: "",
      amount: "",
    });

    // ++++++++++++++++++++++++++++++++++++++++++++//
    // using useRef()

    // const data = {
    //   title: titleRef.current.value,
    //   category: categoryRef.current.value,
    //   amount: amountRef.current.value,
    //   id: crypto.randomUUID()
    // };

    // setExpenses((prevState) => [...prevState, data]);
  };

  const handleChange = (e) => {
    // console.log(e.target.name)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    // setErrors({});
    setErrors({});
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          {/* <label htmlFor="title">Title</label>
          <input
            // required
            id="title"
            name="title"
            value={formData.title}

            // onChange={(e) => {
            //   //   console.log(e.target.value);
            //   return setFormData((prevState) => ({
            //     ...prevState,
            //     title: e.target.value,
            //   }));
            // }}

            onChange={handleChange}
          />
          <p className="error-text">{errors.title}</p> */}

          <Input
            label="Title"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            errors={errors.title}
          />
        </div>

        <div className="input-container">
          {/* <label htmlFor="category">Category</label>
          <select
            // required
            id="category"
            name="category"
            value={formData.category}

            // onChange={(e) => {
            //   //   console.log(e.target.value);
            //   return setFormData((prevState) => ({
            //     ...prevState,
            //     category: e.target.value,
            //   }));
            // }}

            onChange={handleChange}
          >
            <option hidden>Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>

          <p className="error-text">{errors.category}</p> */}

          <Select
            label="Category"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            defaultOption="Select Category"
            options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
            errors={errors.category}
          />
        </div>

        <div className="input-container">
          {/* <label htmlFor="amount">Amount</label>
          <input
            // required
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            // onChange={(e) => {
            //   //   console.log(e.target.value);
            //   return setFormData((prevState) => ({
            //     ...prevState,
            //     amount: e.target.value,
            //   }));
            // }}
            onChange={handleChange}
          />

          <p className="error-text">{errors.amount}</p> */}

          <Input
            label="Amount"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            errors={errors.amount}
          />
        </div>

        <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
      </form>

      {/* <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            required
            id="title"
            name="title"
            // value={formData.title}
            // onChange={(e) => {
            //   //   console.log(e.target.value);
            //   return setFormData((prevState) => ({
            //     ...prevState,
            //     title: e.target.value,
            //   }));
            // }}

            ref={titleRef}
          />
        </div>

        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            required
            id="category"
            name="category"
            // value={formData.category}
            // onChange={(e) => {
            //   //   console.log(e.target.value);
            //   return setFormData((prevState) => ({
            //     ...prevState,
            //     category: e.target.value,
            //   }));
            // }}

            ref={categoryRef}
          >
            <option hidden>Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            required
            type="number"
            id="amount"
            name="amount"
            // value={formData.amount}
            // onChange={(e) => {
            //   //   console.log(e.target.value);
            //   return setFormData((prevState) => ({
            //     ...prevState,
            //     amount: e.target.value,
            //   }));
            // }}

            ref={amountRef}
          />
        </div>

        <button className="add-btn">Add</button>
      </form> */}
    </>
  );
}

export default ExpenseForm;
