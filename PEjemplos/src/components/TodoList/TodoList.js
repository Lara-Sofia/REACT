import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Agregar</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleDeleteTodo(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
