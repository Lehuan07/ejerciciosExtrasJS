/*
JS:
Capturar el valor del input cuando se hace clic en el botón.

Si está vacío, mostrar un mensaje de error (usando estilo rojo como ya sabés).

Si tiene texto:

Agregarlo como un <li> dentro del <ul id="listaTareas">.

Cada tarea debe tener un botón ❌ para eliminarla.
*/

let boton = document.querySelector("#agregarBtn");
let lista = document.querySelector("#listaTareas");
let tarea = document.querySelector("#tarea");

boton.addEventListener("click", function(event){
    event.preventDefault();
    let letraTexto = tarea.value.trim()
    if(!letraTexto){
        alert("Complete el campo para agregar tareas")
    }
    else{
        let agregarTarea = document.createElement("li");
        agregarTarea.textContent = letraTexto;

        let btneliminar = document.createElement("button");
        btneliminar.textContent = "X";

        btneliminar.addEventListener("click", () => {
            agregarTarea.remove(); 
        })

        lista.appendChild(agregarTarea);
        agregarTarea.appendChild(btneliminar);
        tarea.value = "";
        
    }
})