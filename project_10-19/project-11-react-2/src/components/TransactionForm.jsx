export default function TransactionForm() {
  return (
    <>
      <form className="trFormContainer">
        <div className="formGroup descGroup">
          <label htmlFor="descInput">Description:</label>
          <input
            type="text"
            placeholder="Masukan penjelasan..."
            id="descInput"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="amountInput">Amount(Rp):</label>
          <input
            type="number"
            id="amountInput"
            placeholder="Input Rupiah(IDR)..."
          />
        </div>

        <div className="formGroup">
          <label htmlFor="typeDropdown">Type:</label>
          <select id="typeDropdown">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <button type="submit" className="submitBtn">
          +
        </button>
      </form>
    </>
  );
}
