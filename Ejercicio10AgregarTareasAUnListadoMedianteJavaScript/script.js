

// Seleccionar elementos del DOM
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Función para agregar una nueva tarea
function addTask() {
    if(newTaskInput){
        alert("Esta vacio macho")
    }
    
}

// Agregar evento al botón de agregar tarea
addTaskBtn.addEventListener('click', addTask);