import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
    const [form, setForm] = useState(false);
    const onsavehandler = (input) => {
        props.onAddExpense(input);
    };
    const ClickHandler = () => {
        setForm(true);
    }
    return (
        <div className="new-expense">
            {!form && <button onClick={ClickHandler}>Add New Expense</button>}
            {form && <ExpenseForm save={onsavehandler} Form={setForm} />}
        </div>
    );
};

export default NewExpenses;
