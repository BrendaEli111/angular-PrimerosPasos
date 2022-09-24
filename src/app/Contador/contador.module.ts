import {NgModule} from '@angular/core';
import { contadorComponent } from './Contador/contador.component';

@NgModule({
    declarations: [
        contadorComponent
    ],
    exports: [
        contadorComponent //lo que se va a mostrar en el html
    ]
})
export class ContadorModule {

}