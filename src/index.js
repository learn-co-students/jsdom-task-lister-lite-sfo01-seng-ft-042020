document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
 
  listenToSubmit();
  
  
  

});


function listenToSubmit(){
  const submitButton = document.getElementById('submit')
  submitButton.addEventListener('click', logSubmit)


  
}

function logSubmit(event) {
  event.preventDefault();
  const priority = document.getElementById('priority-select').value
  const taskList = document.getElementById("tasks")
  const newTask = document.getElementById("new-task-description").value
  const newItem = document.createElement('li')
  newItem.innerHTML = newTask 
  const iconDelete = document.createElement("i");
  iconDelete.setAttribute("id", newItem.id);
  iconDelete.setAttribute("class", "fa fa-window-close delete-icon");
  newItem.appendChild(iconDelete);
  newItem.setAttribute("class", priority.toLowerCase());
  taskList.appendChild(newItem);

  listenToDelete();
  clearInput();
}

function clearInput() {
  const taskInput = document.getElementById("new-task-description");  taskInput.value = ""

}

function listenToDelete() {
  const listItems = document.querySelectorAll('ul li i')
  
  for (const li of listItems) {
    li.addEventListener('click', function() {
      li.parentNode.remove()
    })
  } 
}

function addPriorityStyle(item) {
  console.log(item)
}