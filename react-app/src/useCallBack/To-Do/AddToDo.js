import React, { useState } from "react";

function AddToDo({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleAddClick = () => {
    if (text.trim()) {
      onAddTodo({ id: Date.now(), text });
      setText("");
    }
  };

  return (
    <div>
      <h2>Add ToDo</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo text"
      />
      <button onClick={handleAddClick}>Add To Do</button>
    </div>
  );
}

export default React.memo(AddToDo);
