/*
🧩 Cosas que vas a tener que implementar:
*Un array de objetos con juegos.
*Función para mostrar los juegos.
Función para filtrar por input (keyup).
Función para filtrar por <select> (change).
Usar .includes() para comparar texto.
Mostrar u ocultar juegos usando .classList.add("oculto") o .style.display = "none".
*/

const juegos = [
    { nombre: "Age of Empires II", tipo: "RTS", año: 1999 },
    { nombre: "StarCraft", tipo: "RTS", año: 1998 },
    { nombre: "Civilization VI", tipo: "4X", año: 2016 },
    { nombre: "SimCity 4", tipo: "Tycoon", año: 2003 },
    { nombre: "Frostpunk", tipo: "Builder", año: 2018 },
    { nombre: "XCOM 2", tipo: "Táctico", año: 2016 },
    { nombre: "Planet Coaster", tipo: "Tycoon", año: 2016 },
    { nombre: "Total War: Shogun 2", tipo: "RTS", año: 2011 },
    { nombre: "Europa Universalis IV", tipo: "4X", año: 2013 },
    { nombre: "Cities: Skylines", tipo: "Builder", año: 2015 },
    { nombre: "Company of Heroes", tipo: "RTS", año: 2006 },
    { nombre: "Anno 1800", tipo: "Builder", año: 2019 },
];


let listaJuegos = document.querySelector("#lista-juegos");
let input = document.querySelector("#buscar");
let seleccionTipo = document.querySelector("#filtroTipo");

// Función que muestra los juegos en pantalla
function mostrarJuegos(juegosFiltrados) {
    listaJuegos.innerHTML = "";

    juegosFiltrados.forEach(juego => {
        const li = document.createElement("li");
        li.classList.add("liClass")
        li.textContent = `${juego.nombre} | ${juego.tipo}`;
        listaJuegos.appendChild(li);
    });
}

// Función central para filtrar por texto y tipo
function filtrarJuegos() {
    let texto = input.value.toLowerCase();
    let tipoSeleccionado = seleccionTipo.value;

    let juegosFiltrados = juegos.filter(juego => {
        const coincideTexto = juego.nombre.toLowerCase().includes(texto) || juego.tipo.toLowerCase().includes(texto);
        const coincideTipo = tipoSeleccionado === "Todos" || juego.tipo === tipoSeleccionado;

        return coincideTexto && coincideTipo;
    });

    mostrarJuegos(juegosFiltrados);
}

// Listeners que disparan la función de filtrado
input.addEventListener("keyup", filtrarJuegos);
seleccionTipo.addEventListener("change", filtrarJuegos);

// Mostrar todos al inicio
mostrarJuegos(juegos);