import { Component, OnInit } from '@angular/core';
import { ComercioService } from '../../services/comercio.service';
import { Comercio } from '../../model/comercio';
import { ResponseComercios } from '../../model/responseComercios';

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

    constructor(private _comercioService: ComercioService) {
        this.comerciosDeHeladerias = new Array<Comercio>();
        this.comerciosDePizzas = new Array<Comercio>();
        this.comerciosDePollos = new Array<Comercio>();

        this._comercioService.obtenerComercios().subscribe(
            data => {
                //console.log(respuesta.shops);
                var respuesta: ResponseComercios = <ResponseComercios> data;
                this.comerciosDePollos = respuesta.shops.filter(i => i.type === 'pollos');
                this.comerciosDePizzas = respuesta.shops.filter(i => i.type === 'pizzas');
                this.comerciosDeHeladerias = respuesta.shops.filter(i => i.type === 'heladerias');
            },
            err => { console.log(err);
            },
            () => { console.log("Terminó la petición");
            }
        );
    }

    ngOnInit() {
        
    }
}