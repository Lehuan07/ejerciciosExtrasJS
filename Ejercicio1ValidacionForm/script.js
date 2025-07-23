/*
📋 Requisitos funcionales
//* 1- Crear un formulario con los siguientes campos:
//Nombre (texto)
//Email (texto)
//Edad (número)
//Botón "Enviar"

*2 - Al hacer clic en Enviar:
//Si algún campo está vacío:
//Mostrar un mensaje de error.
//Resaltar el campo en rojo.

*3 - Si la edad no es un número válido o es menor a 0:
//Mostrar un mensaje de error específico para la edad.

*4 - Si todo es correcto:
//Mostrar los datos ingresados debajo del formulario en un recuadro.
//Limpiar los campos del formulario.
//Quitar los estilos de error si los había.
*/


let formulario = document.querySelector("#formulario");


formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = document.querySelector("#nombre");
    let email = document.querySelector("#email");
    let edad = document.querySelector("#edad");
    let edadNumeros = parseInt(edad.value);
    let campoTrue = document.querySelector("#resultado")
    let campoError = document.querySelector("#errores");
    if(!nombre.value || !email.value || !edad.value){
        if(!nombre.value){
            nombre.style.borderColor = "red";
            nombre.style.backgroundColor = "#ffdddd";
        }
        if(!email.value){
            email.style.borderColor = "red"
            email.style.backgroundColor = "#ffdddd";
        }
        if(!edad.value){
            edad.style.borderColor = "red"
            edad.style.backgroundColor = "#ffdddd";
        }

        campoError.classList.add("active");
        campoError.innerHTML = `<h2>El campo resaltado esta vacio
        o mal completado </h2>`
    }
    else if(isNaN(edadNumeros) || edadNumeros < 0){
        edad.style.borderColor = "red"
        edad.style.backgroundColor = "#ffdddd";
        campoError.classList.add("active");
        campoError.innerHTML = `<h2>La edad no puede ser menor a 0 años</h2>`
        }
    else{
        nombre.style.borderColor = "gray";
        nombre.style.backgroundColor = "#fff";
        email.style.borderColor = "gray"
        email.style.backgroundColor = "#fff";
        edad.style.borderColor = "gray"
        edad.style.backgroundColor = "#fff";
        campoError.classList.remove("active");
        campoError.innerHTML = ``;

        campoTrue.classList.add("active");
        campoTrue.innerHTML = `<h2>🎉 Bienvenido ${nombre.value.trim()} </h2> <br>
        <p>Usted se acaba de registrar con el email ${email.value.trim()}</p> <br>
        <p> y su edad es ${edad.value.trim()}`

        nombre.value =""
        edad.value = ""
        email.value =""
    }
})