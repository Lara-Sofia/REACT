import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar acción con los datos del formulario
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormComponent;
