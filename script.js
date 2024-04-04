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

    // Clear input field after adding task
    taskInput.value = "";
}
