import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(public _authS: AuthService) {}

    ngOnInit() {}

    public ingresar() { this._authS.login(); }
    
    public salir() { }
}