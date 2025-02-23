import React, { useState } from "react";
import { UseTodo } from "../contexts/todoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = UseTodo();

  const add = (e) => {
    e.preventDeault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return <div>TodoForm</div>;
}

export default TodoForm;
