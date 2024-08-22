import { useCallback, useState } from "react";

import AddToDo from "./AddToDo";
import FilterTodos from "./FilterToDo";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const handleAddTodo = useCallback((todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }, []);

  const handleRemoveTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  //   mounting, updating unmounting

  const getFilteredTodos = useCallback(() => {
    switch (filter) {
      case "COMPLTED":
        return todos.filter((todo) => todo.complted);

      case "INCOMPLETE":
        return todos.filter((todo) => !todo.complted);

      default:
        return todos;
    }
  }, [filter, todos]);

  return (
    <div>
      <AddToDo onAddTodo={handleAddTodo} />
      <FilterTodos filter={filter} setFilter={setFilter} />
      <TodoList todos={getFilteredTodos()} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default TodoApp;
