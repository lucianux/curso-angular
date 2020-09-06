import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../utility/notification.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [NotificationService]
})

export class LoginComponent implements OnInit {
    usuario: any = {
        email: '',
        password: ''
    }

    constructor(
        public _authS: AuthService,
        private notiService: NotificationService)
    {
    }

    ngOnInit() {}

    public ingresar() { this._authS.login(); }
    public salir() { this._authS.logout(); }

    public ingresarConEmail() {
        this._authS.ingresarConEmail(this.usuario.email, this.usuario.password);
        this.notiService.showInfo("Ingresó a la aplicación", "");
    }

}