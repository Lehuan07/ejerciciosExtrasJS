

let caja = document.querySelector("#box");
let boton = document.querySelector("#toggleBtn");

function ocultarCaja(caja, boton) {
    boton.addEventListener("click", () => {
    caja.classList.toggle("remove");
    if (caja.classList.contains("remove")) {
    boton.textContent = "Mostrar Caja";
    } else {
    boton.textContent = "Ocultar Caja";
    }
    });

}


ocultarCaja(caja, boton)