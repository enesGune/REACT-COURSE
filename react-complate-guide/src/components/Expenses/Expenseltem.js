import '../../assets/style/componenst/Expenseltem.css';
import ExpenseDate from './ExpenseDate.js'
import React, {useState} from 'react';
// aşağıdaki props ile appjs den gönderdiğimiz datayı kullandık bu sayede vertabanınında aynı yöntemde kullanabiliriz

const ExpenseItem = (props) => {
    //const expenseDate = new Date(2021,2,28);
    //const expenseTitle = 'car-expense';
    //const expenseAmount = 294.67;
    // aşağıda data için yazdık fakat gelen date kısmı ayrıştıramadığımz için tolocalString ifadesini kullandık
    //const month =props.date.toLocaleString('en-US',{month:'long'});
    //const day =props.date.toLocaleString('en-US',{day:'2-digit'});
    //const year = props.date.getFullYear();
    const [id, setId] =  useState(props.id);
    

    const updateHandler =()=>{
        setId('');
        console.log(id)
        
       
    }


   

    return(
        <li>
            <div className="expense-item">
            <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>
                        {props.title}
                    </h2>
                    <div className="expense-item__price">
                        ${props.amount}

                    </div>
                </div>
                <div className="btn-block" >
                    <button onClick={updateHandler} >Update</button>
                    
                </div>
            
            </div>
        </li>
    )
}

export default ExpenseItem;