import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { auth } from 'firebase/app';

@Injectable({ providedIn: "root" })
export class AuthService {
    public usuario: any = {};

    constructor(public _afAuth: AngularFireAuth, public router: Router) {
        this._afAuth.authState.subscribe(user => {
            console.log("Estado Autorización ", user);

            if (!user) {
                return;
            }
        });
    }

    public registrarConEmail(email: string, password: string) {
        return this._afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                alert("Registro exitoso.");
                console.log(result.user);
            }).catch((error) => {
                alert(error.message)
            })
    }

    public ingresarConEmail(email: string, password: string) {
        return this._afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                if (result) {
                    localStorage.setItem('user', JSON.stringify(result.user));
                } else {
                    localStorage.setItem('user', null);
                }
                console.log("Resultado logueo", result);
                
                this.router.navigate(['']);
            }).catch((error) => {
                //console.log(error);
                //alert(error.message);
                if (error.code === "auth/wrong-password") {
                    alert("Ingresó incorrectamente la password");
                } else {
                    if (error.code === "auth/user-not-found") {
                        alert("No existe ese usuario");
                    } else {
                        alert("Hubo un problema en el acceso.");
                    }
                }
            })
    }

    public login() {
        //this._afAtuh.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this._afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    public logout() {
        localStorage.setItem('user', null);
        this._afAuth.signOut();
    }
}