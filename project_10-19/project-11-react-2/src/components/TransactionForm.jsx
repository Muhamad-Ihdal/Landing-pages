import { useState } from "react";
import { generateId, normalize } from "../utils/utils";

export default function TransactionForm({ onAdd }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");

  function handleSubmit(e) {
    e.preventDefault();
    if (!normalize(desc) || amount <= 0) {
      alert(
        "Gagal ditambahkan: Description harus diisi!!! atau Amount harus angka positif",
      );
      return;
    }
    const id = "TRX-" + generateId();
    onAdd({
      id,
      type,
      desc,
      amount:Number(amount),
      isDeleted: false,
    });
  }

  function handleInputDesc(e) {
    setDesc(e.target.value);
  }
  function handleInputAmount(e) {
    setAmount(e.target.value);
  }
  function handleSelectType(e) {
    setType(e.target.value);
  }

  return (
    <>
      <form className="trFormContainer" onSubmit={handleSubmit}>
        <div className="formGroup descGroup">
          <label htmlFor="descInput">Description:</label>
          <input
            value={desc}
            type="text"
            placeholder="Masukan penjelasan..."
            id="descInput"
            onChange={handleInputDesc}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="amountInput">Amount(Rp):</label>
          <input
            value={amount}
            type="number"
            id="amountInput"
            placeholder="Input (IDR)..."
            onChange={handleInputAmount}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="typeDropdown">Type:</label>
          <select value={type} id="typeDropdown" onChange={handleSelectType}>
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
