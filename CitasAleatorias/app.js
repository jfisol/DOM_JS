let botonElemento = document.getElementById('boton-cambiar-cita');
let citaElemento = document.getElementById('cita');
let autorElemento = document.getElementById('autor');

/*Generar un entero Aleatorio */
function GenerarEnteroAleatorio(min,max){
    return Math.floor ( Math.random()* (max-min)+min);

}

function cambiarCita(){
    let indiceAleatorio = GenerarEnteroAleatorio(0,citas.length);
    console.log(indiceAleatorio);
    citaElemento.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElemento.innerText = citas[indiceAleatorio].autor;
}

// Para seleccionar una cita de forma aleatoria
// cuando se inicia la aplicacion.
let indiceAleatorio = GenerarEnteroAleatorio(0, citas.length);
cambiarCita();

// Para cambiar la cita al hacer click en el boton.
botonElemento.addEventListener('click', cambiarCita);