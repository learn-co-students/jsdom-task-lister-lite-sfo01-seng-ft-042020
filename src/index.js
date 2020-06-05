document.addEventListener("DOMContentLoaded", () => {
  listenToFormSubmit();
});

function listenToFormSubmit() {
  // first of all the steps "FIND/SELECT/GET/GRAB the specific element in the DOM" that you wanna work with
  // to work with form --> get the "form element" itself
  const form = document.getElementById("create-task-form");

  // add an eventListener to a "FORM SUBMISSION"
  form.addEventListener("submit", function(e) {
    // prevent the browser from redirecting to the other page
    e.preventDefault();
     
    /* find an input field 
    --> "newTask" is the value of name attribute of "form : input" element in the DOM 
    which will be where user will type input into */
    const taskInput = e.target.newTask;
    // grab user's input value from the input field
    const taskValue = taskInput.value;
    
    // update with page to display the user's inputs
    // first grab the "ul" element in the DOM by its #id
    const ul = document.getElementById("tasks");
    // create a new li element
    const li = document.createElement("li");
    // add that li element inside the ul element as a child
    ul.appendChild(li);
    // display user's task inputs in a list format
    li.innerText = taskValue;
     
    // make the input field blank after each submission
    taskInput.value = "";
   });
}

