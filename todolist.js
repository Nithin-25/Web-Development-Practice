const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const tasks = [];


function addTask() {

    const text = taskInput.value;

    if (text.trim() === "") {
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}


function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");

        li.textContent = task.text;

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            deleteTask(task.id);
        };

        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}


function deleteTask(id) {

    const updatedTasks = tasks.filter(
        task => task.id !== id
    );

    tasks.length = 0;

    tasks.push(...updatedTasks);

    displayTasks();
}