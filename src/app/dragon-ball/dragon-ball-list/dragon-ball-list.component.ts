import { Component, Input } from '@angular/core';
import { Personaje } from '../dragon-ball-interface/dragon-ball-interface.component';
import { DragonBallService } from '../dragon-ball-service/dragon-ball.service';

@Component({
  selector: 'app-dragon-ball-list',
  templateUrl: './dragon-ball-list.component.html',
  //styleUrls: ['./dragon-ball-list.component.css']
})
export class DragonBallListComponent {
  
  
  //@Input('personajesList')
  //personajes: Personaje[] = [];
  

  constructor (private dragonballService: DragonBallService) {
    
  }
  
  get personajes() {
    return this.dragonballService.personajes;  
  }
}
