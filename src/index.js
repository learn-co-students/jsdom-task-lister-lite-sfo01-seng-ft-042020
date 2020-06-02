document.addEventListener("DOMContentLoaded", () => {
  submit = document.getElementById("submit")

  submit.addEventListener("click", function() {
    task = document.getElementById("new-task-description")
    if (task.value) {
        todos = document.getElementById("tasks");
        newTask = document.createElement("li");
        todos.appendChild(newTask);
        newTask.textContent = document.getElementById("new-task-description").value;
    }
    event.preventDefault();
  })
});
