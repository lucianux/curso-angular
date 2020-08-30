import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Comercio } from '../model/comercio';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ResponseComercios } from '../model/responseComercios';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Injectable()
export class ComercioService {
    baseUrl = 'http://localhost:3001'
    private coleccionDeComercios: AngularFirestoreCollection<Comercio>;
    comercios: Observable<Comercio[]>;

    constructor(private _http: HttpClient, private afs: AngularFirestore) {
        this.coleccionDeComercios = afs.collection<Comercio>('comercios');
        this.comercios = this.coleccionDeComercios.valueChanges();
    }

    public obtenerComercios(): Observable<Comercio[]> {
        //var comercios: Comercio[] = this.afs.firestore.collection('comercios');
        return this.comercios;
    }

    public publicarComercio(comercio: Comercio) {
        return this._http.post(this.baseUrl + '/alta', comercio);
    }

    public eliminarComercio(id: number) {
        // elimina un comercio
        console.log("Elimina un producto");
    }
}