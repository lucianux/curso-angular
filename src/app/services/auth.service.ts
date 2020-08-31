import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Injectable({ providedIn: "root" })
export class AuthService {
    public usuario: any = {};

    constructor(public _afAtuh: AngularFireAuth){
        this._afAtuh.authState.subscribe( user => {
            console.log("Estado Autorización ", user);

            if (!user) {
                return;
            }
        });
    }

    public login () {
        //this._afAtuh.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this._afAtuh.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout () {
        this._afAtuh.signOut();
    }
}