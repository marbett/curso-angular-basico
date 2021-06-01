import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonBallDetailComponent } from './dragon-ball-detail/dragon-ball-detail.component';
import { DragonBallListComponent } from './dragon-ball-list/dragon-ball-list.component';
import { FormsModule } from '@angular/forms';
import { DragonBallMainComponent } from './dragon-ball-main/dragon-ball-main.component';
import { DragonBallAddComponent } from './dragon-ball-add/dragon-ball-add.component';
import { DragonBallService } from './dragon-ball-service/dragon-ball.service';




@NgModule({
  declarations: [
    
  
    DragonBallDetailComponent,
    DragonBallListComponent,
    DragonBallMainComponent,
    DragonBallAddComponent,
    
  ],
  exports: [
    DragonBallMainComponent,
    //DragonBallDetailComponent,
    //DragonBallListComponent,    
    //DragonBallAddComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DragonBallService
  ]
})
export class DragonBallModule { }
