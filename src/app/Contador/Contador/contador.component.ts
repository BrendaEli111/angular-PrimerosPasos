import {Component} from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>la base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(base)">+ {{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumular(-base)">- {{base}}</button>
    `
})
export class contadorComponent {
    public title: String = 'Contador APP';
    public numero: number = 10;
    public base: number = 5;
  
    acumular(numero: number){
      this.numero+=numero;
    }
}