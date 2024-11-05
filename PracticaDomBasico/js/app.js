import {Estudiante} from "./Estudiante.class.js";

/*const maria = new Estudiante(1,"Gomez","Maria");

console.log(maria);*/

const listaEstudiantes = [
    {legajo: 1, apellido: 'Gomez', nombre: 'Maria'},
    {legajo: 2, apellido: 'Fernandez', nombre: 'Juana'},
    {legajo: 3, apellido: 'Sanchez', nombre: 'Ema'},

]
document.addEventListener('DOMContentLoaded', listar)

function listar(){
    const ul = document.getElementById('lista');
    ul.textContent = '';
    for(let estudiante of listaEstudiantes){
        const li = crearFila(estudiante);
        ul.appendChild(li);//al elemento de la lista se agrega como hijo la fila
    }
}

function crearFila(estudiante){
    const li = document.createElement('li');
    li.textContent = `Nombre: ${estudiante.nombre} - Legajo: ${estudiante.legajo}`;
    return li;
}

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const legajo = document.getElementById('legajo'); 

function agregarEstudiante(){

    const estudiante = new Estudiante(legajo.value,apellido.value,nombre.value);
    listaEstudiantes.push(estudiante);
    listar();
}


//Js es un lenguaje orientado a eventos

const btn = document.getElementById('btn');


btn.addEventListener('click',(event) =>{
    event.preventDefault();
    agregarEstudiante();
})

function imprimir(event){


   /* console.log(event);//imprimir el objeto de evento
    event.preventDefault();
    console.log('imprimiendo...');*/
}