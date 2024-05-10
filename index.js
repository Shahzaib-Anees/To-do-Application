let userInput = document.getElementById("task-input");
console.log(userInput);

function pushToTaskList() {
    let task = userInput.value;
    console.log(task);
    if (task === "") {
        alert("Please enter a task to add to list");
        return;
    }
    let todoListContainer = document.getElementById("list-container");
    // Task List Item 
    let taskListItem = document.createElement("div");
    taskListItem.className = "listItem";

    // Task List Para 
    let taskOutputPara = document.createElement("p");
    taskOutputPara.innerText = task;
    taskOutputPara.setAttribute("id", "outputPara");
    taskListItem.appendChild(taskOutputPara);

    // Task List Button
    let taskListItemButtonContainer = document.createElement("div");
    taskListItemButtonContainer.className = "listItembutton";
    taskListItem.appendChild(taskListItemButtonContainer);

    todoListContainer.appendChild(taskListItem);

    // Edit Button 
    let editButton = document.createElement("button");
    editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    editButton.setAttribute("id", "edit-button");
    editButton.setAttribute("onclick", "editTask()");
    taskListItemButtonContainer.appendChild(editButton);

    // Delete Button 
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.setAttribute("onclick", "deleteTask()");
    taskListItemButtonContainer.appendChild(deleteButton);
    userInput.value = " ";
}



function deleteTask() {
    let deleteTaskButton = document.getElementById("delete-button");
    var parentElement = deleteTaskButton.parentElement.parentElement;
    console.log(parentElement.nodeType);
    parentElement.setAttribute("id", "deleteButtonParent");
    console.log(parentElement);
    var deleteButtonParent = document.getElementById("deleteButtonParent");
    // deleteButtonParent.style.display = "none";
    // return;
}


