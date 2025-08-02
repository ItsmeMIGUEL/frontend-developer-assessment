// DOM manipulation code to handle adding new tasks.
document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTask");

  addTaskButton.addEventListener("click", () => {
    const newTask = document.createElement("li");
    newTask.textContent = "New Task";
    taskList.appendChild(newTask);
  });
});
