/*
*Un input de tipo number para que el usuario escriba un año.
*Un select con varias plataformas (y una opción "Todas").
*Un div donde se muestren los juegos filtrados.
*Si no hay coincidencias, mostrar un mensaje como “No se encontraron juegos”.

🧠 Lógica
Filtrar por:
Que el año coincida exactamente (juego.anio == añoIngresado)
Que la plataforma coincida o que el select tenga "Todas"
Mostrar el resultado con innerHTML.
Usar display: none si querés ocultar juegos que no cumplan.
*/

const juegos = [
    { nombre: "Age of Empires IV", plataforma: "PC", anio: 2021 },
    { nombre: "Halo Infinite", plataforma: "Xbox", anio: 2021 },
    { nombre: "God of War: Ragnarok", plataforma: "PS5", anio: 2022 },
    { nombre: "The Legend of Zelda: Tears of the Kingdom", plataforma: "Switch", anio: 2023 },
    { nombre: "Starfield", plataforma: "PC", anio: 2023 },
    { nombre: "Spider-Man 2", plataforma: "PS5", anio: 2023 },
    { nombre: "Forza Horizon 5", plataforma: "Xbox", anio: 2021 },
    { nombre: "Metroid Dread", plataforma: "Switch", anio: 2021 },
    { nombre: "Baldur's Gate 3", plataforma: "PC", anio: 2023 },
    { nombre: "FIFA 22", plataforma: "PS5", anio: 2021 }
];

let input = document.querySelector("#number");
let select = document.querySelector("#plataforma");
let mostrarDiv = document.querySelector("#mostrar");

function mostrarJuegos(juegos){
    mostrarDiv.innerHTML = "";
    
    if(juegos.length === 0){
        mostrarDiv.innerHTML = "<p style='color:white;'>No se encontraron juegos.</p>";
        return;
    }

    juegos.forEach(juego => {
        const card = document.createElement("div")
        card.classList.add("card")

        card.innerHTML = `
        <h2>${juego.nombre}</h2>
        <p><strong>Plataforma:</strong> ${juego.plataforma} </p>
        <p><strong>Año:</strong> ${juego.anio} </p>
        `

        mostrarDiv.appendChild(card)
    });
}


function filtrarJuegos() {
    let numero = parseInt(input.value);
    let plataforma = select.value;

    const juegosFiltrados = juegos.filter(juego => {
        let coincideAnio = isNaN(numero) || juego.anio === numero;
        let coincidePlataforma = plataforma === "Todas" || juego.plataforma === plataforma;
        return coincideAnio && coincidePlataforma;
    });

    mostrarJuegos(juegosFiltrados);
}


input.addEventListener("keyup", filtrarJuegos);
select.addEventListener("change", filtrarJuegos);

mostrarJuegos(juegos)
