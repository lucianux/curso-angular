import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from  "@angular/router";
import { NotificationService } from '../../utility/notification.service';

@Component({
    selector: 'usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css'],
    providers: [NotificationService]
})

export class UsuarioComponent {

    usuario: any = {
        email: ''
    }

    constructor(
        private _authS: AuthService,
        private router: Router,
        private notiService: NotificationService)
    {
        this.usuario = JSON.parse(localStorage.getItem('user'));
        console.log("Usuario ", this.usuario.email);
    }

    public salir() {
        this._authS.logout();
        this.router.navigate(['']);
        this.notiService.showInfo("Salió de la aplicación.", "");
    }

}