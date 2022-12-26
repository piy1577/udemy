import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [input, setInput] = useState({
        title: "",
        amount: 0.01,
        date: new Date("2019-01-01"),
    });

    const titlechangehandler = event =>
        setInput(prevState => {
            return { ...prevState, title: event.target.value };
        });

    const amountchangehandler = event =>
        setInput(prevState => {
            return { ...prevState, amount: event.target.value };
        });

    const datechangehandler = event =>
        setInput(prevState => {
            return { ...prevState, date: new Date(event.target.value) };
        });

    const submitHandler = event => {
        event.preventDefault();
        props.save(input);
        props.Form(false);
    };

    const cancelhandler = () => {
        props.Form(false)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={titlechangehandler}
                        value={input.title}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountchangehandler}
                        value={input.amount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={datechangehandler}
                        value={input.date.toISOString().substring(0, 10)}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={cancelhandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
