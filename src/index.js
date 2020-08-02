document.addEventListener("DOMContentLoaded", (event) => {
  // your code here
    creatingTask();
});


const creatingTask = () => {
    const form = document.getElementById("create-task-form");
    
    const contentText = document.getElementById("new-task-description");
    
    const todoList = document.getElementById("tasks");
    form.addEventListener('submit', function(event) {
          event.preventDefault();
        let li = document.createElement('li');
        // let btn = document.createElement('button');
        // btn.setAttribute('id', 'btn');
        // btn.innerText = "X";
        // <button type="button" onclick="alert('Hello world!')">Click Me!</button>
        // li.setAttribute
        li.innerText = contentText.value;
        // li.append(btn);
        todoList.append(li);
    })

    // listenToDelete();
}


// const listenToDelete = () => {
//     const listItems = document.querySelectorAll('ul li i');

//     for ( const li of listItems ){
//         li.addEventListener('click', function() {
//             li.parentNode.remove();
//         })
//     }
// }
