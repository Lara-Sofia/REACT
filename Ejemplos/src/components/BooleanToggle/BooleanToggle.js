import React, { useState } from "react";

const BooleanToggleComponent = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isOn ? "Encendido" : "Apagado"}</button>
    </div>
  );
};

export default BooleanToggleComponent;
