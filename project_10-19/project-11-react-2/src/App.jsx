import { useState } from "react";
// import TransactionForm from "./components/TransactionForm";
// import TransactionList from "./components/TransactionList";
// import BalanceCard from "./components/BalanceCard";

export default function App() {
  const [transaction, setTransaction] = useState([
    {
      id: "TRX-dfdsa",
      type: "income",
      amount: 200000,
      desc: "gajian",
      isDeleted: false,
    },
    {
      id: "TRX-dfd432",
      type: "expense",
      amount: 10000,
      desc: "beli bensin",
      isDeleted: false,
    },
  ]);

  function handleForm() {
    setTransaction([])

  }
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
        <input
          type="text"
          placeholder="Masukan penjelasan..."
          id="descInput"
          required
        />

        <label htmlFor="amountInput">Amount(Rp):</label>
        <input
          type="number"
          id="amountInput"
          placeholder="Input Rupiah(IDR)..."
        />

        <label htmlFor="typeDropdown">Type:</label>
        <select id="typeDropdown">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </form>

      <section className="trListContainer">
        <h1>History transaction</h1>
        {transaction.map((tr) => {
          return (
            <>
              <article className="transactionCard">
                <div className={`statusIndicator ${tr.type === 'expense' ? 'expense': 'income'}`}></div>

                <div className="cardContent">
                  <div className="infoMain">
                    <span className="idTag">#{tr.id}</span>
                    <h4 className="description">{tr.desc}</h4>
                    <span className="typeLabel">{tr.type}</span>
                  </div>

                  <div className="infoAmount">
                    <p className="amount">{ tr.type === 'expense' ? "-":"+"} Rp {tr.amount}</p>
                  </div>
                </div>

                <button className="deleteBtn" aria-label="Hapus transaksi" onClick={handleForm}>
                  &times;
                </button>
              </article>
            </>
          );
        })}
      </section>
    </div>
  );
}
