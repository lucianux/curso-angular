import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Comercio } from '../model/comercio';
import { map } from 'rxjs/operators';

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
        //this.comercios = this.coleccionDeComercios.valueChanges();
        this.comercios = this.coleccionDeComercios.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Comercio;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    public obtenerComercios(): Observable<Comercio[]> {
        return this.comercios;
    }

    public publicarComercio(comercio: Comercio) {
        this.coleccionDeComercios.add(comercio);
    }

    public eliminarComercio(comercio: Comercio) {
        var borrarComercio: AngularFirestoreDocument;
        borrarComercio = this.afs.doc<Comercio>(`comercios/${comercio.id}`);
        borrarComercio.delete();
    }
}