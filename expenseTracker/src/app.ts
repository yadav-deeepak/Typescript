const expType = document.getElementById('expense-type')! as HTMLSelectElement;
const expDesc = document.getElementById('desc')! as HTMLInputElement;
const expAmt = document.getElementById('amount')! as HTMLInputElement;
const addExpBtn = document.querySelector('.add-expense-btn')! as HTMLButtonElement;

const debitDiv = document.querySelector('.expense-debit-item-container')! as HTMLDivElement;
const creditDiv = document.querySelector('.expense-credit-item-container')! as HTMLDivElement;

let expenseItems: Expense[] = [];

class Expense{
    private static currentId: number = 0;
    readonly id: number =  0;
    type: 'credit' | 'debit' = 'debit';
    description: string = '';
    amount: number = 0;

    constructor(type: 'credit' | 'debit', desc: string, amount: number){
        this.type = type;
        this.description = desc;
        this.amount = amount;
        this.id = ++Expense.currentId; 
    }
}

function DisplayExpenseItems(){
    debitDiv.innerHTML = '';
    creditDiv.innerHTML = '';
    for(let i = 0; i< expenseItems.length ; i++){
        let expItem = expenseItems[i];
        let containerDiv = expItem.type === 'credit' ? creditDiv : debitDiv;
        containerDiv?.insertAdjacentHTML('beforeend', `<h3>${expItem.description}</h3>`);
    }
}

addExpBtn.addEventListener('click', function(event){
    event.preventDefault(); // This will prevent the default behaviour 
    let type: 'credit' | 'debit' = expType.value === 'credit' ? 'credit' : 'debit';// we cant pass expType.value directly because it can have either credit or debit any of the type so this will give an error

    const exp = new Expense(type,expDesc.value,+expAmt.value);
    DisplayExpenseItems();
})