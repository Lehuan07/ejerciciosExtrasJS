

// Seleccionar elementos del DOM
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');



// 📦 Array donde se guardan las tareas
let tasks = [];

//


// 🧠 Cargar tareas desde localStorage al iniciar
function loadTasksFromLocalStorage() {
  // Completá: recuperar desde localStorage y parsear a tasks

    let recuperarTask = localStorage.getItem(localStorage.getItem("misTareas"));
    if(recuperarTask){
        tasks = JSON.parse(recuperarTask)
    }
}

// 💾 Guardar tareas en localStorage
function saveTasksToLocalStorage() {
    // Completá: convertir tasks a JSON y guardar
    localStorage.setItem("misTareas", JSON.stringify(tasks))
}

// 🆕 Crear <li> para cada tarea
function createTaskElement(taskText, isCompleted = false, index) {
    // Completá: crear li, checkbox, botón "X", estilos y eventos
    let li = document.createElement("li");
    let =
}

// ➕ Agregar nueva tarea con validación
function addTask() {
    let inputText = newTaskInput.value.trim();
    if (!inputText) {
    alert("⚠️ Escribí una tarea");
    return;
    }
  // Completá: evitar duplicados, crear objeto, guardar y renderizar
}

// ❌ Eliminar tarea
function deleteTask(index) {
  // Completá: eliminar del array, guardar y renderizar
}

// ✅ Cambiar estado de completado
function toggleCompleted(index) {
  // Completá: cambiar propiedad, guardar y renderizar
}

// 🔍 Filtrar tareas
function filterTasks(filterType) {
  // "todas", "completadas", "pendientes"
  // Completá: filtrar el array y renderizar
}

// 🔢 Actualizar contador
function updateCounter() {
  // Completá: contar y mostrar total en el DOM
}

// 🔁 Renderizar lista completa
function renderTasks(taskArray = tasks) {
  // Completá: vaciar UL, recorrer array y crear cada li
}
