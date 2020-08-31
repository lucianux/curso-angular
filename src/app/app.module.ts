import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from "./app.routing";
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
//import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ComerciosComponent } from './components/comercios/comercios.component';
import { AgregacionComponent } from './components/agregacion/agregacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregacionComponent,
    ComerciosComponent,
    RegistroComponent,
    ContactoComponent,
    AcercadeComponent,
    NavbarComponent,
    LoginComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
