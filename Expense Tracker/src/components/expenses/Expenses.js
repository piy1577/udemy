import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filterexpenses = props.expenses.filter(
        (data) => data.date.getFullYear().toString() === filteredYear
    );

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    Change={filterChangeHandler}
                />
                <ExpensesChart expenses={filterexpenses} />
                <ExpensesList items={filterexpenses} />
            </Card>
        </li>
    );
};

export default Expenses;
