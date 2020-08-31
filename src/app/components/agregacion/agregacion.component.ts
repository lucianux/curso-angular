import { Component } from '@angular/core';
import { Comercio } from 'src/app/model/comercio';
import { ComercioService } from '../../services/comercio.service';
import { ResponseAlta } from '../../model/responseAlta';

@Component({
    selector: 'agregacion',
    templateUrl: './agregacion.component.html',
    styleUrls: ['./agregacion.component.css'],
    providers: [ComercioService]
})

export class AgregacionComponent {
    //comercioFormulario: Comercio;
    comercioFormulario: any = {
        nombre: '',
        direccion: '',
        telefono: '',
        tipo: ''
    }

    constructor(private _comercioService: ComercioService) {
    }

    publicarComercio () {
        //console.log("Agregando: " + this.comercioFormulario.tipo);
        var response: string = "";
        this._comercioService.publicarComercio(this.comercioFormulario);
    }
}