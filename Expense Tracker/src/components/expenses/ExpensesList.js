import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no Expenses</h2>
    }
    if (props.items.length > 0) {

        return (
            <ul className='expenses-list'>
                {
                    props.items.map((data) =>
                        <ExpenseItem
                            key={data.id}
                            title={data.title}
                            date={data.date}
                            amount={data.amount}
                        />
                    )
                }
            </ul>)
    }
}

export default ExpensesList