import React, { useState, useRef } from "react";

const RefStateComponent = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    setCount(count + 1);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Aumentar ({count})</button>
    </div>
  );
};

export default RefStateComponent;
