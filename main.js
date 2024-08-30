

let tasks = [];

document.getElementById("add-task-btn").addEventListener("click", addTask);
document
  .getElementById("remove-task-btn")
  .addEventListener("click", removeLastTask);

function addTask() {
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value.trim();

  if (task) {
    tasks.push(task); 
    taskInput.value = ""; 
    displayTasks(); 
  }
}

function removeLastTask() {
  tasks.pop(); 
  displayTasks(); 
}

function displayTasks() {
  const taskList = document.getElementById("task-lists");
  taskList.innerHTML = ""; 

  tasks.forEach((task,position) => {
    const li = document.createElement("li");
    li.textContent =  `${position+1}. ${task}`;
    taskList.appendChild(li);
  });
}
