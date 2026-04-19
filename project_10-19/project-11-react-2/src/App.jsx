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

  function handleForm(newTransaction) {
    setTransaction([...transaction,newTransaction]);
  }
  return (
    <div className="container">
      <BalanceCard/>
      <TransactionForm/>
      <TransactionList/>
    </div>
  );
}
