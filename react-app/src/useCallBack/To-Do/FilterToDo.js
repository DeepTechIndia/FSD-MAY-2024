import React from "react";

function FilterTodos({ filter, setFilter }) {
  console.log("Rendering Filter Todos");

  return (
    <div>
      <h2>Filter Todos</h2>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("COMPLETED")}>Completed</button>
      <button onClick={() => setFilter("INCOMPLETE")}>InComplete</button>
    </div>
  );
}

export default React.memo(FilterTodos);
