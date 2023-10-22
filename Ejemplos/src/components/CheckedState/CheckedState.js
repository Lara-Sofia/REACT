import React, { useState } from "react";

const CheckedState = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {isChecked ? "Marcado" : "Desmarcado"}
      </label>
    </div>
  );
};

export default CheckedState;
