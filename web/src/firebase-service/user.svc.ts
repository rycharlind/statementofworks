import { Injectable, ElementRef, Renderer } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from "@angular/router";

@Injectable()
export class UserService {
    public user:firebase.User;

    constructor(private renderer: Renderer, private router:Router) {
    }

    signIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            if (error) {
                console.log(error.message);
            }
        });
    }

    authUser() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            } else {
                console.log("No User");
                this.router.navigate(['sign-in']);
            }
        });
    }

}