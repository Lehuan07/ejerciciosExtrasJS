// 📦 Elementos del DOM
const newTaskInput = document.getElementById("newTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const filterButtons = document.querySelectorAll("[data-filter]");

// 📌 Array para las tareas
let tasks = [];

// 🧠 Cargar tareas guardadas
function loadTasksFromLocalStorage() {
  const data = localStorage.getItem("misTareas");
  if (data) {
    tasks = JSON.parse(data);
  }
}

// 💾 Guardar tareas
function saveTasksToLocalStorage() {
  localStorage.setItem("misTareas", JSON.stringify(tasks));
}

// 🆕 Crear elemento <li>
function createTaskElement(taskText, isCompleted, index) {
  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;
  if (isCompleted) {
    li.classList.add("completada");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isCompleted;
  checkbox.addEventListener("change", () => {
    tasks[index].isCompleted = checkbox.checked;
    saveTasksToLocalStorage();
    renderTasks();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", () => {
    tasks.splice(index, 1);
    saveTasksToLocalStorage();
    renderTasks();
  });

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(deleteBtn);
  return li;
}

// 🔁 Renderizar todas las tareas
function renderTasks(taskArray = tasks) {
  taskList.innerHTML = "";
  taskArray.forEach((task, i) => {
    const li = createTaskElement(task.taskText, task.isCompleted, i);
    taskList.appendChild(li);
  });
  updateCounter();
}

// ➕ Agregar nueva tarea
function addTask() {
  const input = newTaskInput.value.trim();
  if (!input) {
    alert("⚠️ Escribí una tarea");
    return;
  }

  const duplicado = tasks.some(t => t.taskText === input);
  if (duplicado) {
    alert("⚠️ Esa tarea ya existe");
    return;
  }

  tasks.push({ taskText: input, isCompleted: false });
  saveTasksToLocalStorage();
  renderTasks();
  newTaskInput.value = "";
}

newTaskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterTasks(btn.dataset.filter);
  });
});

// 🔢 Contador
function updateCounter() {
  taskCounter.textContent = `Total: ${tasks.length} tareas`;
}

// 🔍 Filtro
function filterTasks(tipo) {
  let filtradas;
  if (tipo === "completadas") {
    filtradas = tasks.filter(t => t.isCompleted);
  } else if (tipo === "pendientes") {
    filtradas = tasks.filter(t => !t.isCompleted);
  } else {
    filtradas = tasks;
  }
  renderTasks(filtradas);
}

// 📲 Listeners
addTaskBtn.addEventListener("click", addTask);

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterTasks(btn.dataset.filter);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  loadTasksFromLocalStorage();
  renderTasks();
});
