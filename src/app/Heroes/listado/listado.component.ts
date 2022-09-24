import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroe : String = '';
  borrarHeroe(){
    this.heroe = this.heroes.pop() || '';
  }
  get heroeBorrado(): String{
    return this.heroe
  }
}
