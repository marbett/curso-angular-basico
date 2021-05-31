import { Component } from "@angular/core";


@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html'

})
export class HeroDetailComponent {
    name: string = 'Ironman';
    age: number = 45;

    get nameAndAge() : string {
        return `${this.name} is ${this.age} years old`;
    }

    getNameUpperCase(): string {
        return `${this.name.toUpperCase()}`;
    }

    changeName() : void {
        this.name = 'Spiderman';

    }

    changeAge() : void {
        this.age = 40;

    }

}