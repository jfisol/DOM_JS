/*const formulario = document.getElementById('formulario');

console.log(formulario);

formulario.addEventListener('submit', evento => {
  console.log(evento);
  evento.preventDefault();//evita que se ejecute el comportamiento por defecto
});*/

//eventos Personalizados.

const titulo = document.getElementById('h-texto');
console.log(titulo); //ver por consola.

//vincular a un evento 
titulo.addEventListener('cambioTexto',evento => {
    //1.crear evento
    //2. lanzar evento
 console.log(evento);
 titulo.innerText = evento.detail.texto;
 titulo.style.color = evento.detail.color;

});

//creando evento

function cambioTexto(nuevoTexto, color){
    const evento = new CustomEvent("cambioTexto", {
        detail:
        {
        texto:nuevoTexto,
        color
        
    }}) 

    titulo.dispatchEvent(evento);//lanzar texto
}
