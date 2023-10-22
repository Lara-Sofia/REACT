import React from "react";

const Addition = ({ num1, num2, onAdd }) => {
  const handleAddClick = () => {
    onAdd(num1 + num2);
  };

  return (
    <div>
      <h3>Suma:</h3>
      <button onClick={handleAddClick}>Sumar</button>
    </div>
  );
};

export default Addition;
