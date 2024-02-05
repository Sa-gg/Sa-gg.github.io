let addTaskBtn = document.querySelector('#addTaskBtn')
let newTaskText = document.querySelector("#newTask")
let taskContainer = document.querySelector(".tasks-container")


addTaskBtn.addEventListener("click", function() {
    let newTask = document.createElement("div")
    newTask.classList.add("task")
    newTask.innerHTML = 
    `<p>${newTaskText.value}</p>
    <div class="checkDeleteTask">
        <i class="fa-solid fa-check check"></i>
        <i class="fa-solid fa-trash-can remove"></i>
    </div>`
    taskContainer.appendChild(newTask)
    newTaskText.value = ""
})



taskContainer.addEventListener("click", function(event) {
    const target = event.target;

    if (target.classList.contains("check")) {
        const taskText = target.parentNode.previousElementSibling;

        if (taskText.style.textDecoration === "line-through") {
            taskText.style.textDecoration = "none";
        } else {
            taskText.style.textDecoration = "line-through";
        }
    }


    if (target.classList.contains("remove")) {
        target.parentNode.parentNode.remove()
    }
    

});