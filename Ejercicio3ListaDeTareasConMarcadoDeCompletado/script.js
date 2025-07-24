/*
🧠 Requisitos funcionales:
*Ingresar una tarea en el campo de texto y agregarla con un botón.
*Cada tarea debe aparecer como un <li> en la lista.
Cada <li> debe tener:
*El texto de la tarea.
*Un botón ❌ para eliminarla.
Si se hace clic sobre el texto de la tarea (no el botón), la tarea se marca como completada:
Puede ser tachada (con CSS: text-decoration: line-through) o con otro estilo que elijas.
*/

let boton = document.querySelector("#formulario");
let input = document.querySelector("#tarea");
let lista = document.querySelector("#lista")

function comprobarCampo(tareaTexto){
    if(!tareaTexto){
        alert("Complete la lista de tareas para poder agregarla")
        return;
    }else{
        return tareaTexto;
    }
}

function crearBtnEliminar(){
    let btneliminar = document.createElement("button");
    btneliminar.textContent = "X";
    
    return btneliminar;
}

boton.addEventListener("click", (event) =>{
    event.preventDefault();


    let tareaTexto = input.value.trim();    
    let retornoTarea = comprobarCampo(tareaTexto);
    

    if (!retornoTarea) return;

    let agregarTarea = document.createElement("li");

// Nuevo span para contener solo el texto
let spanTexto = document.createElement("span");
spanTexto.textContent = retornoTarea;

let botonEliminar = crearBtnEliminar();
botonEliminar.classList.add("botonEliminar");

botonEliminar.addEventListener("click", (e) => {
    e.stopPropagation();
    agregarTarea.remove();
});

spanTexto.addEventListener("click", () => {
    spanTexto.classList.toggle("completado");
});

agregarTarea.appendChild(spanTexto);
agregarTarea.appendChild(botonEliminar);
lista.appendChild(agregarTarea);
input.value = "";
})