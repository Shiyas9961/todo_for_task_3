document.addEventListener("DOMContentLoaded", function() {
    loadTasks(); // Load tasks from local storage on page load
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let mainSec = document.createElement("div")
    mainSec.className = "first_sec"
    li.appendChild(mainSec)

    mainSec.textContent = taskInput.value;

    // Add delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn_dlt";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Add update button
    let updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.className = "btn_edit";
    updateBtn.onclick = function() {
        let newTask = prompt("Enter the updated task:", mainSec.textContent);
        if (newTask !== null) {
            mainSec.textContent = newTask;
        }
    };

    let smallSec = document.createElement("div")
    smallSec.className = "second-sec"

    li.appendChild(smallSec);
    smallSec.appendChild(deleteBtn)
    smallSec.appendChild(updateBtn)
    taskList.appendChild(li);

    updateLocalStorage();

    // Clear input field after adding task
    taskInput.value = "";
}

function updateLocalStorage() {
    let taskList = document.getElementById("taskList").getElementsByTagName("li");
    let tasks = [];

    for (let i = 0; i < taskList.length; i++) {
        tasks.push(taskList[i].querySelector('.first_sec').textContent);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    let storedTasks = localStorage.getItem("tasks");

    if (storedTasks !== null) {
        let tasks = JSON.parse(storedTasks);
        let taskList = document.getElementById("taskList");

        tasks.forEach(function(task) {
            let li = document.createElement("li");
            let mainSec = document.createElement("div")
            mainSec.className = "first_sec"
            li.appendChild(mainSec)

             mainSec.textContent = task;

            // Add delete button
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "btn_dlt";
            deleteBtn.onclick = function() {
                taskList.removeChild(li);
                updateLocalStorage(); // Update local storage after deleting task
            };

            // Add update button
            let updateBtn = document.createElement("button");
            updateBtn.textContent = "Update";
            updateBtn.className = "btn_edit";
            updateBtn.onclick = function() {
                let newTask = prompt("Enter the updated task:", mainSec.textContent);
                if (newTask !== null) {
                    mainSec.textContent = newTask;
                    updateLocalStorage(); // Update local storage after updating task
                }
            };

            let smallSec = document.createElement("div")
            smallSec.className = "second-sec"

            li.appendChild(smallSec);
            smallSec.appendChild(deleteBtn)
            smallSec.appendChild(updateBtn)
            taskList.appendChild(li);
        });
    }
}