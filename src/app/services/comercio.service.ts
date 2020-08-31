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
    private coleccionDeComercios: AngularFirestoreCollection<Comercio>;
    comercios: Observable<Comercio[]>;

    constructor(private afs: AngularFirestore) {
        this.coleccionDeComercios = afs.collection<Comercio>('comercios');
        this.comercios = this.coleccionDeComercios.valueChanges();
    }

    public obtenerComercios(): Observable<Comercio[]> {
        return this.comercios;
    }

    public publicarComercio(comercio: Comercio) {
        this.coleccionDeComercios.add(comercio);
    }

    public eliminarComercio(id: number) {
        // elimina un comercio
        console.log("Elimina un producto");
    }
}