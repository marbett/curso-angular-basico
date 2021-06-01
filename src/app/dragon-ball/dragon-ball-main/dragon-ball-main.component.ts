import { Component } from '@angular/core';
import { Personaje } from '../dragon-ball-interface/dragon-ball-interface.component';
import { DragonBallService } from '../dragon-ball-service/dragon-ball.service';

@Component({
  selector: 'app-dragon-ball-main',
  templateUrl: './dragon-ball-main.component.html',
  styleUrls: ['./dragon-ball-main.component.css']
})
export class DragonBallMainComponent {

  
  personaje: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor (private dragonballService: DragonBallService) {    
  }

  agregarNuevoPersonaje (personaje: Personaje) {
    console.log("Estoy en el agregar nuevo personaje del main");
    console.log(personaje);
    this.dragonballService.personajes.push(personaje);
  }

  /*
  get personajes (): Personaje[]  {
    return this.dragonballService.personajes;
  }
  */
  
  
}
