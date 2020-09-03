import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    uid: string = '';
    comercioEditable: Comercio;
    comObs: any;
    comercioLoaded: Promise<boolean>;

    time = new Observable<string>((observer: Observer<string>) => {
        setInterval(() => observer.next(new Date().toString()), 2000);
    });

    constructor(private rutaActiva: ActivatedRoute, private comercioS: ComercioService) { }
    
    ngOnInit() {
        
        this.uid = this.rutaActiva.snapshot.params.uid;
        //console.log(this.uid);
        //this.comercioEditable = this.comercioS.obtenerComercio(this.uid);
        //this.comercioEditable = this.comercioS.obtenerComercio2(this.uid);
        this.comObs = this.comercioS.obtenerComercio3(this.uid);
        this.comObs.subscribe(
            (value: Comercio) => {
                this.comercioEditable = new Comercio();
                this.comercioEditable = value;
                this.comercioEditable.id = this.uid;
                console.log("ComercioDoc ", this.comercioEditable);
                this.comercioLoaded = Promise.resolve(true);
            }
        );

        console.log("Comercio edit ", this.comercioEditable);
    }

}