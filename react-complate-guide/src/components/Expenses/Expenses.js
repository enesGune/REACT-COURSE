import ExpensesFilter from "./ExpenseFilter";
// import ExpenseItem from "./Expenseltem";
import React, {useState} from 'react';
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props)=>{

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChanceHandler = selectedYear =>{
        setFilteredYear(selectedYear)
    }
    // aşağıda yıla göre listelemek için bir fonksyon yazdık
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            
        
            <div className="expenses" >
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChanceHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {/* {filteredExpenses.length === 0 ? <p>No Expenses Found!</p> : filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}  />) } */}
                <ExpenseList items={filteredExpenses} />
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
                <ExpenseItem title={props.items[4].title} amount={props.items[4].amount} date={props.items[4].date} /> */}
            </div>
        </div>
    )
}
export default Expenses;