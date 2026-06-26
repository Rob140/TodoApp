import React from "react";
import { useState } from "react";
import styles from "./Todo.module.css";

const Todo = () => {
  const [inputvalue, setInputvalue] = useState("");
  const [todos, setTodos] = useState([]);
  function Addtodo(e) {
    e.preventDefault();
    if (!inputvalue.trim()) return;
    setTodos((prev) => [...prev, { value: inputvalue.trim(), id: Date.now() }]);
    setInputvalue("");
  }
  function removetodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Todo List</h1>
      <form className={styles.form} onSubmit={Addtodo}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add a new task"
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
        <button className={styles.addButton} type="submit">
          Add
        </button>
      </form>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <span className={styles.text}>{todo.value}</span>
            <button
              className={styles.removeButton}
              onClick={() => removetodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
