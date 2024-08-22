import React from "react";

function TodoList({ todos, onRemoveTodo }) {
  console.log("Rendering TodoList");

  return (
    <div>
      <h2>ToDo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(TodoList);
