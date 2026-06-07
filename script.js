const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();
    const date = taskDate.value;
    const time = taskTime.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task-content">
            <div>
                <input type="checkbox" class="complete">
                <span class="task-text">${taskText}</span>
            </div>

            <div class="buttons">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>

        <div class="task-info">
            Date: ${date || "Not Set"} |
            Time: ${time || "Not Set"}
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";

    const checkbox = li.querySelector(".complete");
    const taskSpan = li.querySelector(".task-text");
    const editBtn = li.querySelector(".edit");
    const deleteBtn = li.querySelector(".delete");

    checkbox.addEventListener("change", () => {
        taskSpan.classList.toggle("completed");
    });

    editBtn.addEventListener("click", () => {
        const newTask = prompt("Edit Task:", taskSpan.textContent);

        if(newTask !== null && newTask.trim() !== ""){
            taskSpan.textContent = newTask;
        }
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
}