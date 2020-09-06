import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComercioService } from '../../services/comercio.service';
import { Comercio } from '../../model/comercio';
import { Observable } from 'rxjs';
import { ResponseComercios } from '../../model/responseComercios';
import { NotificationService } from '../../utility/notification.service';

@Component({
    selector: 'comercios',
    templateUrl: './comercios.component.html',
    styleUrls: ['./comercios.component.css'],
    providers: [ComercioService]
})

export class ComerciosComponent implements OnInit {

    comerciosDePollos: Array<Comercio>;
    comerciosDePizzas: Array<Comercio>;
    comerciosDeHeladerias: Array<Comercio>;

    constructor(
        private _comercioService: ComercioService,
        private router: Router,
        private notiService: NotificationService)
    {
        this.comerciosDeHeladerias = new Array<Comercio>();
        this.comerciosDePizzas = new Array<Comercio>();
        this.comerciosDePollos = new Array<Comercio>();

        this._comercioService.obtenerComercios().subscribe(
            (data: Array<Comercio>) => {
                this.comerciosDePollos = data.filter(i => i.tipo === 'pollos');
                this.comerciosDePizzas = data.filter(i => i.tipo === 'pizzas');
                this.comerciosDeHeladerias = data.filter(i => i.tipo === 'heladerias');
                // console.log(data);
            },
            err => console.log(err)
        );
    }

    public eliminarComercio(comercioAeliminar: Comercio) {
        //console.log("Eliminando " + comercio);
        this._comercioService.eliminarComercio(comercioAeliminar);
        this.notiService.showInfo("Se eliminó el comercio.", "");
    }

    public editarComercio(comercioActualizado: Comercio) {
        //console.log("Editando " + comercioActualizado);
        this.router.navigate(['./editar', comercioActualizado.id]);
    }

    public isLogged(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }

    ngOnInit() {
    }
}