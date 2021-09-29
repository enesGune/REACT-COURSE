import React, {useState} from 'react';
import '../../assets/style/componenst/NewExpense.css'
import ExpenseForm from './ExpenseForm';
import ExpenseFormUpdated from './ExpensesFormUpdated';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const startUpdatedHandler = () =>{
        setIsEditing(true)
    }

    const stopUpdatedHandler = () =>{
        setIsEditing(false)
    }

    const startEditingHandler = () =>{
        setIsEditing(true)
    }

    const stopEditinHandler = () =>{
        setIsEditing(false)
    }

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }
    return (
        <div className="new-expense" >
            {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
            {!isEditing && <button onClick={startUpdatedHandler} >Update Expense</button>}

            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={stopEditinHandler} />}
            {isEditing && <ExpenseFormUpdated onSaveExpenseData={saveExpenseDateHandler} onCancel={stopUpdatedHandler} />}

        </div>
    )
}


export default NewExpense;