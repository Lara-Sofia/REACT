import React, { useState, useEffect } from "react";

const EffectStateComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Aumentar ({count})</button>
    </div>
  );
};

export default EffectStateComponent;
