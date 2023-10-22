import React from "react";

const Subtraction = ({ num1, num2, onSubtract }) => {
  const handleSubtractClick = () => {
    onSubtract(num1 - num2);
  };

  return (
    <div>
      <h3>Resta:</h3>
      <button onClick={handleSubtractClick}>Restar</button>
    </div>
  );
};

export default Subtraction;
