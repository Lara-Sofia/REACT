import React, { useState } from "react";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import CurrencyDisplay from "../CurrencyDisplay/CurrencyDisplay";

const CurrencyConverter = () => {
  const [usdAmount, setUsdAmount] = useState(0);
  const [eurAmount, setEurAmount] = useState(0);

  const handleUsdAmountChange = (amount) => {
    setUsdAmount(amount);
  };

  const handleEurAmountChange = (amount) => {
    setEurAmount(amount);
  };

  return (
    <div>
      <h2>Conversor de Monedas</h2>
      <CurrencyInput currency="USD" onAmountChange={handleUsdAmountChange} />
      <CurrencyInput currency="EUR" onAmountChange={handleEurAmountChange} />
      <CurrencyDisplay currency="USD" amount={usdAmount} />
      <CurrencyDisplay currency="EUR" amount={eurAmount} />
    </div>
  );
};

export default CurrencyConverter;
