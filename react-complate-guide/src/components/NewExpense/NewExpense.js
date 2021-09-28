import React from 'react';
import '../../assets/style/componenst/NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense" >
            <ExpenseForm onSaveExpenseata={saveExpenseDateHandler}  />
        </div>
    )
}


export default NewExpense;