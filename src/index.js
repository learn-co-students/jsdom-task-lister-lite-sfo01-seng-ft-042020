
// should be able to type a task into input field

// click on the submit button
// listen for a submit on the form element.


document.addEventListener("submit", submitButton)




function submitButton(event){
  event.preventDefault()
  // get the my todos container
   let myTodos = document.getElementById("tasks")
  //get the value of whatever is put in a textbox, assign it to a variable
  const taskContainer = document.getElementById("new-task-description")
  const taskValue = taskContainer.value 
  
  
  // add the value to the my todos container
  myTodos.innerText += taskValue
  console.log(myTodos)
  // myTodos
}

// update the dom with whatever was put into the text field




