/**Seleccionar elementos del Dom */

const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for(let i = 0; i < 6; i++ ){
        let indiceAleatorio = Math.floor(Math.random() * 16); //floor redondea el número
        colorHex +=digitos[indiceAleatorio];
    }

    return colorHex;

}


boton.addEventListener('click',function(){
let colorAleatorio = generarColorHexAleatorio();
//Actualizar texto
color.textContent = colorAleatorio;
//Actualizar Color de fondo
document.body.style.backgroundColor = colorAleatorio;
});