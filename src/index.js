document.addEventListener("DOMContentLoaded", () => {
  listenToFormSubmit();
  listenToListClick();
});

  const listenToListClick = () => {
    const listContainer = document.getElementById('list');
    listContainer.addEventListener('click', (event) => {
      if (event.target.dataset.name === 'button') {
        taskEl.remove();
      }
    });
  }

  const listenToFormSubmit = () => {
    const addTaskForm = document.getElementById("create-task-form");
    addTaskForm.addEventListener('submit', event => {
      //prevent default action(post request)
      event.preventDefault();
      const taskInput = document.getElementById("new-task-description");
      //value of what user puts in input field
      const inputText = taskInput.value;
      
      const taskEl = document.createElement('li');
      const deleteTaskButton = document.createElement('button');
      deleteTaskButton.dataset.name = 'button';
      deleteTaskButton.innerText = 'X';
      taskEl.innerText = inputText;
      const toDoList = document.getElementById('tasks');
      toDoList.appendChild(taskEl)
      taskEl.append(deleteTaskButton)
      taskInput.value = ""
    });
  }

