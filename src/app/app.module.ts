import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
//import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroModule } from './hero/hero.module';
//import { CounterModule } from './counter/counter.module';
import { CounterDetailComponent } from './counter/detail/counter-detail.component';
import { DragonBallModule } from './dragon-ball/dragon-ball.module';


@NgModule({
  declarations: [
    AppComponent,
    CounterDetailComponent,
    //HeroDetailComponent,
    //HeroListComponent
  ],
  imports: [
    BrowserModule,
    HeroModule,
    DragonBallModule,
    //CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
