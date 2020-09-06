import { Component } from '@angular/core';
import { Comercio } from 'src/app/model/comercio';
import { ComercioService } from '../../services/comercio.service';
import { ResponseAlta } from '../../model/responseAlta';
import { Router } from '@angular/router';
import { NotificationService } from '../../utility/notification.service';

@Component({
    selector: 'agregacion',
    templateUrl: './agregacion.component.html',
    styleUrls: ['./agregacion.component.css'],
    providers: [ComercioService, NotificationService]
})

export class AgregacionComponent {
    comercioFormulario: any = {
        nombre: '',
        direccion: '',
        telefono: '',
        tipo: ''
    }

    constructor(
        private _comercioService: ComercioService,
        private router: Router,
        private notiService: NotificationService) {  }

    publicarComercio () {
        //console.log("Agregando: " + this.comercioFormulario.tipo);
        var response: string = "";
        this._comercioService.publicarComercio(this.comercioFormulario);
        this.router.navigate(['./comercios']);
        this.notiService.showInfo("Se publicó el comercio.", "");
    }
}