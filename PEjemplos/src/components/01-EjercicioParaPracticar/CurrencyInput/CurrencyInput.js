import React, { useState } from "react";

const CurrencyInput = ({ currency, onAmountChange }) => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    setAmount(newAmount);
    onAmountChange(newAmount);
  };

  return (
    <div>
      <label>{currency}:</label>
      <input type="number" value={amount} onChange={handleAmountChange} />
    </div>
  );
};

export default CurrencyInput;
