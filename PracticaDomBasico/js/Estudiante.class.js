export class Estudiante{

    #legajo; //Atributos privados
    #apellido;
    #nombre;
    constructor(legajo, apellido, nombre){
        this.#apellido = apellido;
        this.#legajo = legajo;
        this.#nombre = nombre;

    }

    set legajo(legajo){
        this.#legajo = legajo;
    }
    get legajo(){
        return this.#legajo;
    }
    set apellido(apellido){
        this.#apellido = apellido;
    }
    get apellido(){
        return this.#apellido;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    get nombre(){
        return this.#nombre;
    }
}

