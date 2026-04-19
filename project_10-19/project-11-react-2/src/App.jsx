import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import BalanceCard from "./components/BalanceCard";

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

  function handleAddTransaction(newTransaction) {
    setTransaction([...transaction, newTransaction]);
  }

  function handleDelete(id) {
    setTransaction(
      transaction.map((tr) => {
        if (tr.id !== id) return tr;
        return { ...tr, isDeleted: !tr.isDeleted };
      }),
    );
  }

  return (
    <div className="container">
      <BalanceCard transaction={transaction}/>
      <TransactionForm onAdd={handleAddTransaction} />
      <TransactionList transaction={transaction} onDelete={handleDelete}/>
    </div>
  );
}
