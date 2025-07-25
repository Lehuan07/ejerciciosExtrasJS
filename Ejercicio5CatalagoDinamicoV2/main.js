/*
Consigna: "Catálogo simple de juegos de estrategia"
Crear una pequeña aplicación web que muestre una lista de juegos de estrategia. Debe incluir:
*Una lista de juegos precargados en un array (mínimo 6).
Un input para buscar juegos por nombre.
Un botón que permita volver a mostrar todos los juegos luego de filtrar.
El listado se debe renderizar en una etiqueta <ul> con elementos <li>.

✅ Al iniciar, se deben mostrar todos los juegos.
✅ Al escribir en el input, se deben filtrar por coincidencia parcial del nombre (no exacta).
✅ Si no hay coincidencias, debe mostrar un mensaje que lo indique.
✅ El botón de "Mostrar todos" debe limpiar el filtro y volver a listar todos los juegos.
*/

const juegosEstrategia = [
    // Estrategia en tiempo real (RTS)
    { nombre: "Age of Empires II", categoria: "RTS", emoji: "🏰" },
    { nombre: "StarCraft", categoria: "RTS", emoji: "👽" },
    { nombre: "Warcraft III", categoria: "RTS", emoji: "⚔️" },
    { nombre: "Company of Heroes", categoria: "RTS", emoji: "🪖" },
    { nombre: "Total Annihilation", categoria: "RTS", emoji: "🤖" },
    { nombre: "Command & Conquer: Red Alert 2", categoria: "RTS", emoji: "🛰️" },
    { nombre: "Stronghold", categoria: "RTS", emoji: "🛡️" },
    
    // Estrategia por turnos (TBS)
    { nombre: "Heroes of Might and Magic III", categoria: "TBS", emoji: "🐉" },
    { nombre: "Advance Wars", categoria: "TBS", emoji: "🚁" },
    { nombre: "Wargroove", categoria: "TBS", emoji: "🎖️" },
    { nombre: "XCOM: Enemy Unknown", categoria: "TBS", emoji: "👾" },

    // Estrategia 4X
    { nombre: "Civilization IV", categoria: "4X", emoji: "🌍" },
    { nombre: "Stellaris", categoria: "4X", emoji: "🪐" },
    { nombre: "Endless Legend", categoria: "4X", emoji: "📜" },
    { nombre: "Master of Orion II", categoria: "4X", emoji: "🚀" },

    // Tycoon / Simulación económica
    { nombre: "RollerCoaster Tycoon 2", categoria: "Tycoon", emoji: "🎢" },
    { nombre: "Zoo Tycoon", categoria: "Tycoon", emoji: "🦓" },
    { nombre: "Game Dev Tycoon", categoria: "Tycoon", emoji: "💾" },
    { nombre: "Transport Tycoon Deluxe", categoria: "Tycoon", emoji: "🚂" },
    { nombre: "Two Point Hospital", categoria: "Tycoon", emoji: "🏥" },

    // City Builders
    { nombre: "SimCity 4", categoria: "City Builder", emoji: "🏙️" },
    { nombre: "Cities: Skylines", categoria: "City Builder", emoji: "🌆" },
    { nombre: "Caesar III", categoria: "City Builder", emoji: "🏛️" },
    { nombre: "Banished", categoria: "City Builder", emoji: "🌲" },
    { nombre: "Pharaoh", categoria: "City Builder", emoji: "🦂" },

    // Otros / híbridos
    { nombre: "Crusader Kings II", categoria: "Gran Estrategia", emoji: "👑" },
    { nombre: "Europa Universalis IV", categoria: "Gran Estrategia", emoji: "📖" },
    { nombre: "RimWorld", categoria: "Colony Sim", emoji: "🚀" },
    { nombre: "Factorio", categoria: "Automation", emoji: "⚙️" },
    { nombre: "Frostpunk", categoria: "Survival Strategy", emoji: "❄️" },
    { nombre: "Oxygen Not Included", categoria: "Colony Sim", emoji: "🧪" }
];


let lista = document.querySelector("#listaJuegos");
let buscador = document.querySelector("#input")
let btnMostrarTodos = document.querySelector("#btnMostrarTodos");

function mostrarJuegos(juegosEstrategia){
    lista.innerHTML = "";

    if(juegosEstrategia.length === 0){
        const li = document.createElement("li");
        li.textContent = "No se encontraron resultados.";
        lista.appendChild(li);
        return;
    }

    juegosEstrategia.forEach(juego => {
        const li = document.createElement("li");
        li.classList.add("juegosEstrategia")
        li.textContent = `${juego.emoji} ${juego.nombre} | ${juego.categoria}`
        lista.appendChild(li)
        return;
    });
}

function filtrarJuego(){
    const textoIngresado = buscador.value.toLowerCase();

    const filtro = juegosEstrategia.filter(juegos =>
    (juegos.nombre.toLowerCase().includes(textoIngresado) ||
    juegos.categoria.toLowerCase().includes(textoIngresado))
    )
    mostrarJuegos(filtro)
}


btnMostrarTodos.addEventListener("click", () =>{
    buscador.value = "";
    mostrarJuegos(juegosEstrategia)
})

buscador.addEventListener("input", filtrarJuego)

mostrarJuegos(juegosEstrategia)