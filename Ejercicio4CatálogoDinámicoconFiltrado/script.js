/*
Requisitos:
    *- Mostrar las películas en el DOM.
    *- Agregar un campo de búsqueda (input).
    - Al escribir en el input, se deben filtrar las películas por:
        - Nombre
        - Categoría

Condiciones:
    *- Todo el proceso se realiza en el frontend (sin conexión a bases de datos o servidores).
    *- La búsqueda debe ser en tiempo real (evento input).
    *- La coincidencia no tiene que ser exacta (usar includes).
    *- Se debe ignorar mayúsculas/minúsculas en la comparación.

Extras (opcionales si querés ir más allá):
    - Agregar un <select> para filtrar por categoría.
    *- Mostrar mensaje si no hay coincidencias.
    - Estilos para que el catálogo sea visualmente atractivo.
    */

const peliculas = [
    { nombre: "El Señor de los Anillos", categoria: "Fantasía", anio: 2001 },
    { nombre: "Matrix", categoria: "Ciencia Ficción", anio: 1999 },
    { nombre: "Pulp Fiction", categoria: "Crimen", anio: 1994 },
    { nombre: "Toy Story", categoria: "Animación", anio: 1995 },
    { nombre: "Gladiador", categoria: "Acción", anio: 2000 },
    { nombre: "Interestelar", categoria: "Ciencia Ficción", anio: 2014 },
    { nombre: "La La Land", categoria: "Musical", anio: 2016 },
    { nombre: "Titanic", categoria: "Romance", anio: 1997 },
    { nombre: "Shrek", categoria: "Animación", anio: 2001 },
    { nombre: "El Padrino", categoria: "Crimen", anio: 1972 }
];

const lista = document.querySelector("#catalogoPeliculas");
const input = document.querySelector("#buscar");
const select = document.querySelector("#categoria");

function mostrarArray(peliculas) {
    lista.innerHTML = "";

    if (peliculas.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No se encontraron resultados.";
        lista.appendChild(li);
        return;
    }

    peliculas.forEach(pelicula => {
        const li = document.createElement("li");
        li.textContent = `${pelicula.nombre} | ${pelicula.categoria} (${pelicula.anio})`;
        lista.appendChild(li);
    });
}

function filtrarPeliculas() {
    const texto = input.value.toLowerCase();
    const categoriaSeleccionada = select.value;

    const filtradas = peliculas.filter(pelicula =>
        (pelicula.nombre.toLowerCase().includes(texto) ||
        pelicula.categoria.toLowerCase().includes(texto))
        &&
        (categoriaSeleccionada === "" || pelicula.categoria === categoriaSeleccionada)
    );

    mostrarArray(filtradas);
}

input.addEventListener("input", filtrarPeliculas);
select.addEventListener("change", filtrarPeliculas);

// Mostrar todo al principio
mostrarArray(peliculas);