import React from "react";
import { useState } from "react";
import styles from "./Todo.module.css";

const Todo = () => {
  const [inputvalue, setInputvalue] = useState("");
  const [todos, setTodos] = useState([]);
  const newitem = {
    value: inputvalue,
    id: Date.now(),
  };
  function Addtodo(e) {
    e.preventDefault();
    setTodos([...todos, newitem]);
  }
  function removetodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <>
      <div className="todoContainer">
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
        <button onClick={Addtodo}>addtodo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.value}</span>
              <button onClick={() => removetodo(todo.id)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
