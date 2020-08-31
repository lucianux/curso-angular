import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    public isLogged: boolean = false;

    constructor() { }

    ngOnInit() { }
}