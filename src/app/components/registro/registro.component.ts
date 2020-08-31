import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
    usuarioNuevo = {
        email: '',
        password: ''
    }

    constructor(private _authS: AuthService) {

    }

    public crearUsuario() {
        this._authS.registrarConEmail(this.usuarioNuevo.email, this.usuarioNuevo.password);
    }
}