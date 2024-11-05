//utilizamos un listener para escuchar 
//KEYDOWN escucha
document.addEventListener('keydown',function(tecla){
   
    //Ahora tenemos un objeto que esta cargado con una serie de atributos
    console.log(tecla.code);


});

//Uso de la libreria Keypress.js

//creamos un json
var configTeclado = {
    prevent_repeat : true, //para evitar repeticion "movimiento de mario al caminar manteniendo pulsada la tecla"
};

var eventoTeclado = new window.onkeypress.Listener(this,configTeclado);

eventoTeclado.