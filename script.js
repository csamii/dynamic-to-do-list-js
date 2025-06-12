document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput  = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    
})

function addTask (){
    const taskText = taskInput.value.trim();
    if(taskText == ""){
        alert("Enter a task");
        return
    }
    const list = document.createElement("li");
    list.textContent = taskText;
    document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.onclick = function() {
        taskList.removeChild(list);
    };
    list.append(removeButton);
    taskList.appendChild(list);
    taskInput.value = "";
}

addButton.addEventListener("click", addTask);