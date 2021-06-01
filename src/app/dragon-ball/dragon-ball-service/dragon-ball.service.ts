import { Injectable } from "@angular/core";
import { Personaje } from "../dragon-ball-interface/dragon-ball-interface.component";

@Injectable()
export class DragonBallService {

    private _personajes: Personaje [] =  [
        {
            nombre: "Bulma",
            poder: 0
        },
        {
            nombre: "Kame Sennim",
            poder: 0
        }
    ]

    private _personaje: Personaje = {
        nombre: "",
        poder: 0
    }
    
    get personajes (): Personaje [] {
        return [...this._personajes]
    }

    constructor() {
        console.log("DragonBallService inicializado...");
    }

    agregarPersonaje (personaje: Personaje) {
        this._personajes.push(personaje);
        console.log("Se ha agregado el personaje al listado", this.personajes)
    }   

    

      

    
}