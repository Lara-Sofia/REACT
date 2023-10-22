import React, { useState, useRef, useEffect } from "react";

const CombinedHooksComponent = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleStopClick = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleStopClick}>Detener</button>
    </div>
  );
};

export default CombinedHooksComponent;
