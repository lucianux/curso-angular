import { Component } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response: Observable<any[]>;
  // comercios: Array<any>;

  constructor() {
    // this.comercios = Array<any>();
    // this.response = firestore.collection('comercios').valueChanges();

    // this.response.subscribe(
    //   data => {
    //     var datos: Array<any> = <Array<any>> data;
    //     this.comercios = datos;
    //     console.log("dato: " + datos[0].nombre);
    //   }
    // )
  }
}
