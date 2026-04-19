export default function BalanceCard({transaction}) {
  const income = transaction.filter(tr=> tr.type === 'income' && !tr.isDeleted).reduce((acumulator,currentValue)=>{
    return currentValue.amount + acumulator;
  },0)
  console.log("income: ",income)
  
  const expense = transaction.filter(tr=> tr.type === 'expense' && !tr.isDeleted).reduce((acumulator,currentValue)=>{
    return currentValue.amount + acumulator;
  },0)
  console.log("expense: ",expense)
  
  const balance = income - expense;
  console.log("balance: ",balance)
  return (
    <>
      <section className="balanceCardContainer">
        <h1>Dashboard</h1>
        <p>Current balance!</p>
        <p>Rp{balance} </p>
        <div className="incomeAndExpense">
          <article className="income">
            <p>Income</p>
            <p>Rp{income} </p>
          </article>
          <article className="expense">
            <p>Expense</p>
            <p>Rp{expense} </p>
          </article>
        </div>
      </section>
    </>
  );
}
