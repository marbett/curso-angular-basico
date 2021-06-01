import { Component, EventEmitter, Input, Output } from '@angular/core';


import { Personaje } from '../dragon-ball-interface/dragon-ball-interface.component';
import { DragonBallService } from '../dragon-ball-service/dragon-ball.service';


@Component({
  selector: 'app-dragon-ball-add',
  templateUrl: './dragon-ball-add.component.html',
  //styleUrls: ['./dragon-ball-add.component.css']
})
export class DragonBallAddComponent {

  /*@Input()
  personajes: Personaje[] = [];*/
  
  @Input()
  personaje: Personaje = {
    nombre: "",
    poder: 0
  };
  
  /*
  @Output()
  onNewPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();
  */

  constructor (private dragonballService: DragonBallService) {
    
  }

  agregarNgSubmit() {
    if (this.personaje.nombre.trim().length === 0) {
      return;
    }
    
    console.log(this.personaje);
    //this.onNewPersonaje.emit(this.personaje);
    this.dragonballService.agregarPersonaje(this.personaje);
    this.personaje = {
      nombre: "",
      poder: 0
    }

  }
  
  
  /*
  agregar (event: any) {
    event.preventDefault();
    console.log(event);
  }
  */
  /*
  cambiarNombre(event: any) {
    console.log(event);
    console.log(event.target.value);

  }
  */

}
