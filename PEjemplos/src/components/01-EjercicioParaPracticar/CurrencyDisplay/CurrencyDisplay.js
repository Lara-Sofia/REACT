import React from "react";

const CurrencyDisplay = ({ currency, amount }) => {
  return (
    <div>
      <h3>{currency}:</h3>
      <p>
        {currency} {amount}
      </p>
    </div>
  );
};

export default CurrencyDisplay;
