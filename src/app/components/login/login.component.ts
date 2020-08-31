import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    usuario: any = {
        email: '',
        password: ''
    }

    constructor(public _authS: AuthService) {}

    ngOnInit() {}

    public ingresar() { this._authS.login(); }

    public ingresarConEmail() { this._authS.ingresarConEmail(this.usuario.email, this.usuario.password); }

    public salir() { this._authS.logout(); }
}