document.addEventListener("DOMContentLoaded", function () {
  const addTaskButton = document.getElementById("addTaskButton");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    let taskText = taskInput.value.trim();

    if (taskInput !== "") {
      let li = document.createElement("li");
      li.textContent = taskText;

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "X";

      deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);

      taskInput.value = "";
    }
  });
});
