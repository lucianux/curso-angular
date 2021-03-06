import { ModuleWithProviders } from "@angular/core";
import { Routes, Route, RouterModule } from "@angular/router";

// Componentes
import { ContactoComponent } from './components/contacto/contacto.component';
import { AcercadeComponent } from "./components/acercade/acercade.component";
import { ComerciosComponent } from './components/comercios/comercios.component';
import { AgregacionComponent } from './components/agregacion/agregacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EdicionComponent } from './components/edicion/edicion.component';

// Rutas
const appRoutes: Routes = [
    // Ruta vacía
    { path: "", component: ComerciosComponent },
    // Ruta con nombre
    { path: "contacto", component: ContactoComponent },
    { path: "acercade", component: AcercadeComponent },
    { path: "registro", component: RegistroComponent },
    { path: "comercios", component: ComerciosComponent },
    { path: "agregar", component: AgregacionComponent },
    { path: "usuario", component: UsuarioComponent },
    { path: "entrar", component: LoginComponent },
    { path: "editar/:uid", component: EdicionComponent },
    // Cualquier otra ruta
    { path: "**", component: ComerciosComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
