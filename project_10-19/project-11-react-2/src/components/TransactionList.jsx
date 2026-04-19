export default function TransactionList() {
  return (
    <>
      <section className="trListContainer">
        <h1>History transaction</h1>
        {transaction.map((tr) => {
          return;
        })}
      </section>
    </>
  );
}

function transactionCard() {
  return (
    <>
      <article className="transactionCard">
        <div
          className={`statusIndicator ${tr.type === "expense" ? "expense" : "income"}`}
        ></div>

        <div className="cardContent">
          <div className="infoMain">
            <span className="idTag">#{tr.id}</span>
            <h4 className="description">{tr.desc}</h4>
            <span className="typeLabel">{tr.type}</span>
          </div>

          <div className="infoAmount">
            <p className="amount">
              {tr.type === "expense" ? "-" : "+"} Rp {tr.amount}
            </p>
          </div>
        </div>

        <button
          className="deleteBtn"
          aria-label="Hapus transaksi"
          onClick={handleForm}
        >
          &times;
        </button>
      </article>
    </>
  );
}
