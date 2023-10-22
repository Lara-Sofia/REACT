import React, { useState } from "react";

const ShowHide = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? "Ocultar" : "Mostrar"}
      </button>
      {isVisible && <div>¡Hola! Este es un componente visible.</div>}
    </div>
  );
};

export default ShowHide;
