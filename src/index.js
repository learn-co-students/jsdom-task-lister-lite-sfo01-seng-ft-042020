document.addEventListener("DOMContentLoaded", () => {
  // your code here
  listenToFormSubmit()

});


function listenToFormSubmit(){
const newTaskForm = document.getElementById("create-task-form");
const description = document.getElementById("new-task-description");

newTaskForm.addEventListener("submit", function (event) {
  




  event.preventDefault();
  const descriptionText = document.getElementById("new-task-description").value
  console.log(event)
  console.log("form was submitted");

  const descriptionEl = document.createElement("p");
  descriptionEl.innerText = descriptionText;

  const container = document.getElementById("main-content");
  container.append(descriptionEl);


  console.log(`${descriptionText}`)
  descriptionText.value = "";



});

}








