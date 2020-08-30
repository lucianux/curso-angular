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
    comercioFormulario: Comercio;

    constructor(private _comercioService: ComercioService) {
        this.comercioFormulario = new Comercio();
        //this.comercioFormulario.title = "";
    }

    publicarComercio () {
        console.log("Send " + this.comercioFormulario.tipo);
        var response: string = "";
        this._comercioService.publicarComercio(this.comercioFormulario).subscribe(
            data => {
                var respuesta: ResponseAlta = <ResponseAlta> data;
                response = respuesta.response;
                console.log("Respuesta " + response);
            }
        );
    }
}