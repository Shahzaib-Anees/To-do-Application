let userInput = document.getElementById("task-input");
console.log(userInput);
let task;

function pushToTaskList() {
    task = userInput.value;
    console.log(task);
    if (task === " " || task.length <= 1) {
        alert("Please enter a task to add to list");
        return;
    }
    let todoListContainer = document.getElementById("list-container");
    // Task List Item 
    let taskListItem = document.createElement("div");
    taskListItem.className = "listItem";

    // Task Output Container 
    let taskOutputContainer = document.createElement("div");
    taskOutputContainer.setAttribute("id", "task-output-container");
    taskListItem.appendChild(taskOutputContainer);

    // Task List Para 
    let taskOutputPara = document.createElement("p");
    taskOutputPara.innerText = task;
    taskOutputPara.setAttribute("id", "outputPara");
    taskOutputContainer.appendChild(taskOutputPara);

    // Edit Input 
    var editInputField = document.createElement("input");
    editInputField.setAttribute("id", "editTaskInput");
    editInputField.value = task;
    taskOutputContainer.appendChild(editInputField);
    console.log(editInputField.parentElement);

    // Task List Button
    let taskListItemButtonContainer = document.createElement("div");
    taskListItemButtonContainer.className = "listItembutton";
    taskListItem.appendChild(taskListItemButtonContainer);
    todoListContainer.appendChild(taskListItem);

    // Edit Button 
    let editButton = document.createElement("button");
    editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    editButton.setAttribute("id", "edit-button");
    editButton.setAttribute("onclick", "editTask(this)");
    taskListItemButtonContainer.appendChild(editButton);

    // Delete Button 
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.setAttribute("onclick", "deleteTask(this)");
    taskListItemButtonContainer.appendChild(deleteButton);
    userInput.value = " ";
    console.log(userInput.value);
}



function deleteTask(element) {
    var parentElement = element.parentElement.parentElement;
    parentElement.style.display = "none";
    console.log("Delete Function has done its Work");
}


function editTask(element) {
    let paraEditParentElement = element.parentElement.parentElement.firstChild;
    console.log(paraEditParentElement);
    let editInput = paraEditParentElement.children[1];
    editInput.setAttribute("onblur", "changeModifier(this)");
    editInput.style.display = "flex";
    let originalParaTask = paraEditParentElement.children[0];
    originalParaTask.style.display = "none";

}

function changeModifier(input) {
    let modifiedTaskValue = input.value;
    let paragraphElement = input.parentElement.children[0];
    paragraphElement.style.display = "flex";
    input.style.display = "none";
    console.log(paragraphElement);
    console.log(modifiedTaskValue);
    if (modifiedTaskValue === "") {
        paragraphElement.innerText = task;
        alert("You have'nt make any change")
    } else {
        task = modifiedTaskValue;
        paragraphElement.innerText = task;
    }
}