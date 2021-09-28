import React, {useState} from 'react';
import '../../assets/style/componenst/NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

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
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={stopEditinHandler} />}
        </div>
    )
}


export default NewExpense;