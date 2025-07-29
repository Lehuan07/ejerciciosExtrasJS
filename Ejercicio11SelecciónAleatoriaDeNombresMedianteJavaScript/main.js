/*
Crea un evento que se active al hacer clic en el botón «Agregar». Este evento debe llamar a una función que obtenga el valor del input, agregue el nombre a una lista en memoria y luego actualice la lista visible en el DOM.
Crea una función para renderizar los nombres en la lista. Esta función debe actualizar el contenido del elemento <ul> con los nombres almacenados en la lista en memoria.
Crea un evento que se active al hacer clic en el botón «Seleccionar aleatoriamente». Esta función debe seleccionar aleatoriamente un nombre de la lista en memoria y resaltarlo en la lista visible en el DOM. Además, se debe mostrar un mensaje indicando que se ha elegido ese nombre.
Verifica que el programa funcione correctamente. Al hacer clic en el botón «Seleccionar aleatoriamente», debe aparecer un nombre resaltado en la lista con el mensaje indicando que ha sido seleccionado aleatoriamente.
*/

let agregar = document.querySelector("#addBtn");
let inputName = document.querySelector("#inputName");
let lista = document.querySelector("#nameList")
let btnRandom = document.querySelector("#randomBtn")

let nombres = [];


function obtenerValor(){
    let inputValor = inputName.value.trim()
    if (inputValor != ""){
        nombres.push(inputValor);
        inputName.value = "";
        renderizarLista()
    }
    else{
        alert("El campo no puede estar vacio")
    }
}

inputName.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        obtenerValor()
    }
})


function renderizarLista(){
    lista.innerHTML = "";
    nombres.forEach(nombre =>{
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li)
    })
}

function seleccionAzar(){
    if (nombres.length === 0) return;

    const indice = Math.floor(Math.random() * nombres.length);
    const nombreSeleccionado = nombres[indice];

    lista.innerHTML = "";
    nombres.forEach((nombre, i) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        if (i === indice) {
            li.classList.add("selected")
        }
        lista.appendChild(li);
    });

    alert(`¡El nombre seleccionado es: ${nombreSeleccionado}!`);
}

agregar.addEventListener("click", obtenerValor)
btnRandom.addEventListener("click", seleccionAzar);