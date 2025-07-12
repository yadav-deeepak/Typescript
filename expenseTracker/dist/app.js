"use strict";
const expType = document.getElementById('expense-type');
const expDesc = document.getElementById('desc');
const expAmt = document.getElementById('amount');
const addExpBtn = document.querySelector('.add-expense-btn');
let expenseItems = [];
class Expense {
    constructor(type, desc, amount) {
        this.id = 0;
        this.type = 'debit';
        this.description = '';
        this.amount = 0;
        this.type = type;
        this.description = desc;
        this.amount = amount;
        this.id = ++Expense.currentId;
    }
}
Expense.currentId = 0;
addExpBtn.addEventListener('click', function (event) {
    event.preventDefault(); // This will prevent the default behaviour 
    let type = expType.value === 'credit' ? 'credit' : 'debit'; // we cant pass expType.value directly because it can have either credit or debit any of the type so this will give an error
    const exp = new Expense(type, expDesc.value, +expAmt.value);
    console.log(exp);
    expenseItems.push(exp);
    console.log(expenseItems);
});
