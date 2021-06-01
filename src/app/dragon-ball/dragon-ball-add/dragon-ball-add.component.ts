import { Component, Input } from '@angular/core';
import { DragonBallMainComponent } from '../dragon-ball-main/dragon-ball-main.component';
import { Personaje } from '../dragon-ball-interface/dragon-ball-interface.component';


@Component({
  selector: 'app-dragon-ball-add',
  templateUrl: './dragon-ball-add.component.html',
  //styleUrls: ['./dragon-ball-add.component.css']
})
export class DragonBallAddComponent {

  @Input()
  personajes: Personaje[] = [];
  
  @Input()
  personaje: Personaje = {
    nombre: "",
    poder: 0
  };
  
  /*
  agregar (event: any) {
    event.preventDefault();
    console.log(event);
  }
  */
  agregarNgSubmit() {
    if (this.personaje.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.personaje)
    console.log(this.personajes);
    this.personaje = {
      nombre: "",
      poder: 0
    }

  }
  
  /*
  cambiarNombre(event: any) {
    console.log(event);
    console.log(event.target.value);

  }
  */

}
