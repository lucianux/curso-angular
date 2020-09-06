import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Comercio } from '../model/comercio';
import { map, take, first } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ResponseComercios } from '../model/responseComercios';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Injectable()
export class ComercioService {
    private coleccionDeComercios: AngularFirestoreCollection<Comercio>;
    comercio: Comercio;
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

    public actualizarComercio(comercio: Comercio) {
        var comercioActualizable: AngularFirestoreDocument;
        comercioActualizable = this.afs.doc<Comercio>(`comercios/${comercio.id}`);
        comercioActualizable.update(comercio);
    }

    // http://localhost:4200/editar/1CTYLA7iGZfPyhyG5J3M
    public obtenerComercio(uid: string): Comercio {
        var outcome: Comercio = new Comercio();
        var comercioDoc: AngularFirestoreDocument;
        comercioDoc = this.afs.doc<Comercio>(`comercios/${uid}`);
        var com: any;
        com = comercioDoc.valueChanges();
        com.subscribe((value: Comercio) => {
            this.comercio = new Comercio();
            this.comercio = value;
            this.comercio.id = uid;
            //Object.assign(this.comercio, value);
            //Object.keys(value).forEach(key=>this.comercio[key]=value[key]);

            console.log("ComercioDoc ", this.comercio);
        });
        return this.comercio;
    }

    // public obtenerComercio2(uid: string): Comercio {
    //     this.afs.doc<Comercio>(`comercios/${uid}`).valueChanges().pipe(take(1)).subscribe(com => {
    //         return com;
    //     });
    // }

    // public async obtenerComercio2(uid: string): Comercio {
    //     try {
    //         return await this.afs.doc<Comercio>(`comercios/${uid}`).valueChanges().pipe(take(1)).toPromise();
    //     } catch (err) {
    //         console.log(err);

    //     }
    // }

    public obtenerComercio3(uid: string): Observable<firebase.firestore.DocumentData> {
        var comercioDoc: AngularFirestoreDocument;
        comercioDoc = this.afs.doc<Comercio>(`comercios/${uid}`);
        return comercioDoc.valueChanges();
    }

    public eliminarComercio(comercio: Comercio) {
        var borrarComercio: AngularFirestoreDocument;
        borrarComercio = this.afs.doc<Comercio>(`comercios/${comercio.id}`);
        borrarComercio.delete();
    }
}