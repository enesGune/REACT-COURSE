import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense';
// bu bizim ilk custom componentimiz
const App = () => {
    // aşağıda bir fonksyon tanımladık ve sayfamızın içinmde bir p etiketi açmasını söyledik bu sayede 
    // daha sonrada etikete değişken tanımladık
    // ve root içine ekledik bu sayede sayfamızda oluşturduğumz etiket gözükğt
    //const para = document.createElement('p');
    //const logo = document.createElement('h1')
    //logo.textContent='LOGO';
    //para.textContent = 'world';
    //document.getElementById('root').append(para,logo);
    //console.log(logo,para);
    //const expensis =[
       // {title:"title",amount:2010203, date:new Date(2021,08,29)},
       // {title:"title",amount:2010203, date:new Date(2021,08,29)},
       // {title:"title",amount:2010203, date:new Date(2021,08,29)},
       // {title:"title",amount:2010203, date:new Date(2021,08,29)},

   // ];
   const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'New Computer',
        amount: 850,
        date: new Date(2021, 8, 12),
      },
  ];

  const addExpenseHandler = (expense) =>{
    console.log('app.js')
    console.log(expense)
  }

  //return(
   //   React.createElement(
    //      'div', {}, 
    //      React.createElement(Expenses ,{items:expenses})
    //  )
 // );//
    return (
        <div>
         <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items ={expenses}/>

        </div>
    );
}

export default App;