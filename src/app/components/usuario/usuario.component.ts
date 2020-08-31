import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from  "@angular/router";

@Component({
    selector: 'usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {

    usuario: any = {
        email: ''
    }

    constructor(private _authS: AuthService, private router: Router) {
        this.usuario = JSON.parse(localStorage.getItem('user'));
        console.log("Usuario ", this.usuario.email);
    }

    public salir() {
        this._authS.logout();
        this.router.navigate(['']);
    }

}