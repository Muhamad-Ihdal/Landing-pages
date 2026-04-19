import { useState } from "react";
// import TransactionForm from "./components/TransactionForm";
// import TransactionList from "./components/TransactionList";
// import BalanceCard from "./components/BalanceCard";

export default function App() {
  const [transaction, setTransaction] = useState([
    {
      id:'dfdsa',
      type:'income',
      amount:200000,
      desc:'gajian',
      isDeleted:false,
    },
    {
      id:'dfd432',
      type:'expense',
      amount:10000,
      desc:'beli bensin',
      isDeleted:false,
    }
  ]);

  // function handleForm() {

  // }
  return (
    <div className="container">
      <section className="balanceCardContainer">
        <h1>Dashboard</h1>
        <p>Saldo Saat ini!</p>
        <p>Rp2.300.000 (contoh)</p>
        <div className="incomeAndExpense">
          <article className="income">
            <p>Income</p>
            <p>Rp2.300.000 (contoh)</p>
          </article>
          <article className="expense">
            <p>Expense</p>
            <p>Rp2.300.000 (contoh)</p>
          </article>
        </div>
      </section>


      <form className="trFormContainer">
        <label htmlFor="descInput">Description:</label>
        <input type="text" placeholder="Masukan penjelasan..." id="descInput" required/>

        <label htmlFor="amountInput">Amount(Rp):</label>
        <input type="number" id="amountInput" placeholder="Input Rupiah(IDR)..." />

        <label htmlFor="typeDropdown">Type:</label>
        <select id="typeDropdown">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </form>

      <section className="trListContainer">
        {transaction.map()}
      </section>
    </div>
  );
}
