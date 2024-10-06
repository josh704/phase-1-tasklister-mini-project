document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
      event.preventDefault(); 
      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value.trim();
      if (taskDescription) {
          const taskItem = document.createElement("li");
          taskItem.textContent = taskDescription;

          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.addEventListener("click", () => {
              taskItem.remove(); 
          });
          taskItem.appendChild(deleteButton);
          taskList.appendChild(taskItem);
          taskInput.value = '';
      } else {
          alert("Please enter a task description.");
      }
  });
});
