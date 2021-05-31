import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  //styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  deletedHero : string = "";
  heroes : string[] = ['Hulk','Thor','Batman','Wonder Woman'];
  

  deleteHero() : void {
    
    //this.deletedHero = this.heroes.shift() ||'';
    this.deletedHero = this.heroes.shift() ||'';
    
    console.log("deleting..." + this.deletedHero);
    
  }

}
