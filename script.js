document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput  = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    loadTasks()

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }
    
    function addTask (taskText, save = true){
        taskText = taskInput.value.trim();
        if(taskText == ""){
            alert("Enter a task");
            return
        }
        const list = document.createElement("li");
        list.textContent = taskText;
        document.createElement("li");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.onclick = function() {
            taskList.removeChild(list);
            removeTask(taskText);
        };
        list.append(removeButton);
        taskList.appendChild(list);

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
        taskInput.value = "";
    }

    function removeTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    })
})

