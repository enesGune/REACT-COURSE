import React  ,{useState}from 'react';
import '../../assets/style/componenst/ExpenseForm.css'


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
   
    const [enteredAmount, setEnteredAmount] = useState('');

    const [enteredDate, setEnteredDate] = useState('');

    //const [userInput, setUserInput] = useState({
      //  enteredTitle:'',
        //enteredAmount:'', BU BİR ÇOKLU DTATE YÖNTEMİ 
        //enteredDate:''

    //})

    const titleCange = (event) => {
        setEnteredTitle(event.target.value);
        //setUserInput({
          //  ...userInput,
           // enteredTitle:event.terget.value
       // })
    }

    const amountChange = (event) =>{
        setEnteredAmount(event.target.value);
        //setUserInput({
          //  ...userInput,
            //enteredAmount:event.terget.value
        //})
    };

    const dateChange = (event) =>{
       setEnteredDate(event.target.value);
       //setUserInput({
        //...userInput,
        //enteredDate:event.terget.value
        //})
    };

    const submitHandler = (event) => {
        event.preventDefauld();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    };

    return (
        <form onSubmit={submitHandler}>
            
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleCange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChange} />
                </div>
            </div>
            <div className="new-expense__actions" >
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}


export default ExpenseForm;