let addTaskBtn = document.querySelector('#addTaskBtn')
let newTaskText = document.querySelector("#newTask")
let taskContainer = document.querySelector(".tasks-container")


addTaskBtn.addEventListener("click", function() {
    let newTask = document.createElement("div");
    newTask.textContent = newTaskText.value
    taskContainer.appendChild(newTask)
    console.log(newTask)
    newTaskText.value = ""
})