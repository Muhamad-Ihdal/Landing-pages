export default function BalanceCard() {
  return (
    <>
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
    </>
  );
}
