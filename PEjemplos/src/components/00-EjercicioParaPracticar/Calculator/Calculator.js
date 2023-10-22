import React, { useState } from "react";
import Addition from "../Addition/Addition";
import Subtraction from "../Subtraction/Subtraction";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

  return (
    <div>
      <h2>Calculadora de Suma y Resta</h2>
      <div>
        <label>Número 1:</label>
        <input type="number" value={num1} onChange={handleNum1Change} />
      </div>
      <div>
        <label>Número 2:</label>
        <input type="number" value={num2} onChange={handleNum2Change} />
      </div>
      <Addition onAdd={handleAddition} />
      <Subtraction onSubtract={handleSubtraction} />
      <h3>Resultado: {result}</h3>
    </div>
  );
};

export default Calculator;
