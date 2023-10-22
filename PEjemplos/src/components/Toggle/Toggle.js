import React, { useState } from "react";

const Toggle = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <button onClick={toggleMessage}>Mostrar/Ocultar</button>
      {showMessage && (
        <p>¡Mensaje oculto! Aparece cuando se hace clic en el botón.</p>
      )}
    </div>
  );
};

export default Toggle;
