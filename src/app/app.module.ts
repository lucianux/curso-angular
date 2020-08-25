import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from "./app.routing";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ComerciosComponent } from './components/comercios/comercios.component';
import { AgregacionComponent } from './components/agregacion/agregacion.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregacionComponent,
    ComerciosComponent,
    RegistroComponent,
    ContactoComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
