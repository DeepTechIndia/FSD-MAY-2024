import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>To-Do List</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Entr a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" onClick={addTask}>
            Add task
          </button>

          <ul className="list-group mt-4 row">
            {tasks.map((task, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {task}
                <button
                  className="btn btn-danger"
                  onClick={() => removeTask(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
