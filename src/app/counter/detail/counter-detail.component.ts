import { Component } from "@angular/core"

@Component({
    selector: 'app-counter-detail',
    template: `
        <h1>Hola {{name}}: {{title}}</h1>
        <h3>La base es: {{base}}</h3>
        <button (click) = "sum(base);"> + {{base}} </button>
        <span> {{count}} </span>
        <button (click) = "sum(-base);"> - {{base}} </button>


    `

})
export class CounterDetailComponent {
    title = 'Contador App';
    name: string = 'Marbett';
    count: number = 0;
    base: number = 5;

    sum (number: number) {
        this.count += number;

    }
}