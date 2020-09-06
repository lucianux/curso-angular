import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComercioService } from '../../services/comercio.service';
import { Comercio } from 'src/app/model/comercio';
import { Observable, Observer } from 'rxjs';

@Component({
    selector: 'edicion',
    templateUrl: './edicion.component.html',
    styleUrls: ['./edicion.component.css'],
    providers: [ComercioService]
})

export class EdicionComponent implements OnInit {

    comercioEditable: Comercio;
    comercioLoaded: Promise<boolean>;

    constructor(
        private rutaActiva: ActivatedRoute,
        private comercioS: ComercioService,
        private router: Router) { }
    
    ngOnInit() {
        var uid:string = this.rutaActiva.snapshot.params.uid;

        //this.comercioEditable = this.comercioS.obtenerComercio(this.uid);
        //this.comercioEditable = this.comercioS.obtenerComercio2(this.uid);
        this.comercioS.obtenerComercio3(uid).subscribe(
            (value: Comercio) => {
                this.comercioEditable = new Comercio();
                this.comercioEditable = value;
                this.comercioEditable.id = uid;
                // console.log("Comercio a editar ", this.comercioEditable);
                this.comercioLoaded = Promise.resolve(true);
            }
        );

        console.log("Comercio edit ", this.comercioEditable);
    }

    public actualizarComercio(actualizado: Comercio) {
        this.comercioS.actualizarComercio(actualizado);
        this.router.navigate(['./comercios']);
    }

}