import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    public nombre: String = 'Ironman';
    public edad: number = 45

    get NombreCapitalizado(): String{
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): String{
        return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre(): void{
        this.nombre='Spiderman';
    }
    cambiarEdad(): void{
        this.edad=30;
    }
}