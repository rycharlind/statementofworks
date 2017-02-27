import { Injectable, ElementRef, Renderer } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from "@angular/router";
import { ErrorService } from '../error-service/error.svc';

@Injectable()
export class UserService {
    public user: firebase.User;

    constructor(
        private renderer: Renderer,
        private router: Router,
        private errorService: ErrorService) {
    }

    signIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
            if (error) {
                this.errorService.displayError(error.message);
            }
        });
    }

    authUser() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
                console.log(user);
            } else {
                console.log("No User");
                this.router.navigate(['sign-in']);
            }
        });
    }

    getName(): string {
        return this.user.email
    }

    getUID() {
        return this.user.uid;
    }

}
