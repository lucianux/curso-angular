import { Component, OnInit } from '@angular/core';
import { ComercioService } from '../../services/comercio.service';
import { Comercio } from '../../model/comercio';
import { Observable } from 'rxjs';
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
            (data: Array<Comercio>) => {
                this.comerciosDePollos = data.filter(i => i.tipo === 'pollos');
                this.comerciosDePizzas = data.filter(i => i.tipo === 'pizzas');
                this.comerciosDeHeladerias = data.filter(i => i.tipo === 'heladerias');
                //console.log(this.data);
            },
            err => console.log(err)
        );
    }

    ngOnInit() {
        
    }
}