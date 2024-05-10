let userInput = document.getElementById("task-input");
console.log(userInput);

function pushToTaskList() {
    let task = userInput.value ;
    console.log(task);
    if(task === ""){
        alert("Please enter a task to add to list");
        return;
    }

    let todoListContainer = document.getElementById("list-container");
    // Task List Item 
    let taskListItem = document.createElement("div");
    taskListItem.className = "listItem";
    // console.log(taskListItem);

    // Task List Para 
    let taskOutputPara = document.createElement("p");
    taskOutputPara.innerText = task;
    taskOutputPara.setAttribute("id" , "outputPara");
    taskListItem.appendChild(taskOutputPara);
    console.log(todoListContainer);

    // Task List Button
    let taskListItemButtonContainer = document.createElement("div");
    taskListItemButtonContainer.className = "listItembutton";
    taskListItem.appendChild(taskListItemButtonContainer);
    // console.log(taskListItemChild);

    todoListContainer.appendChild(taskListItem);
    // console.log(todoListContainer);
}