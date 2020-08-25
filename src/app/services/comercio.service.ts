import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Comercio } from '../model/comercio';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ComercioService {
    baseUrl = 'http://localhost:3001'
    constructor(private _http: HttpClient) { }

    public obtenerComercios() {
        return this._http.get(this.baseUrl + '/comercios');
    }

    public publicarComercio(comercio: Comercio) {
        return this._http.post(this.baseUrl + '/alta', comercio);
    }
}