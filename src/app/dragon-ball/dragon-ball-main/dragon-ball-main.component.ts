import { Component } from '@angular/core';
import { Personaje } from '../dragon-ball-interface/dragon-ball-interface.component';

@Component({
  selector: 'app-dragon-ball-main',
  templateUrl: './dragon-ball-main.component.html',
  styleUrls: ['./dragon-ball-main.component.css']
})
export class DragonBallMainComponent {

  personajes: Personaje [] =  [
    {
      nombre: "Bulma",
      poder: 0
    },
    {
      nombre: "Kame Sennim",
      poder: 0
    }
  ]
  personaje: Personaje = {
    nombre: "",
    poder: 0
  }

  
}
