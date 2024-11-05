const inputRojo = document.getElementById('rojo');
const inputVerde =document.getElementById('verde');
const inputAzul = document.getElementById('azul');

/*Obtener los elementos de parrafo */

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');


/*definir variables de color */

// Valores para definir el color RGB. 
// Cada valor debe estar en el rango: [0, 255].
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;


//reemplazamos el texto de cada uno de los parrafos
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;


//funcionalidad para actualizar color de fondo
function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
  }
  

//escuchar event listener para cada input

inputRojo.addEventListener('change',(e) =>{
     rojo = e.target.value; // acceso a la información de donde ocurrio ese evento
    textoRojo.textContent = rojo;
    actualizarColor(rojo,verde,azul);
});


// Para actualizar Green (Verde).
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.textContent = verde;
    actualizarColor(rojo, verde, azul);
  });


inputAzul.addEventListener('change',(e) => {
    verde = e.target.value;
    textoAzul.textContent = verde;
    actualizarColor(rojo, verde, azul);

});