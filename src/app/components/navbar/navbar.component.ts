import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

    constructor() { }

    public isLogged(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }

    ngOnInit() { }
}