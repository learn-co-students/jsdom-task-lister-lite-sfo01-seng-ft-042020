document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks")
  const submitButton = document.getElementById('submit')
  
  submitButton.addEventListener('click', logSubmit)
  const todosLength = document.querySelectorAll.length
  
  function logSubmit(event) {
    event.preventDefault();
    const newTask = document.getElementById("new-task-description").value
    const newItem = document.createElement('li')
    newItem.innerHTML = newTask 
    newItem.setAttribute("id", `id_${todosLength}`)
    const listItem = taskList.appendChild(newItem)
    
    const spanDelete = document.createElement("span");
    spanDelete.setAttribute("id", newItem.id);
    spanDelete.setAttribute("class", "delete");
    spanDelete.innerHTML = "&nbsp;&#10007;&nbsp;"

    spanDelete.onclick = deleteItem;
    listItem.appendChild(spanDelete);
    clearInput();
  }


  function clearInput() {
    taskInput.value = ""

  }
});



function deleteItem(e) {
  const id = e.target.id;
  console.log("delete an item: " + id);
  document.getElementById(id).remove();
}         