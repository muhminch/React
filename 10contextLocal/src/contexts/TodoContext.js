import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const UseTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
