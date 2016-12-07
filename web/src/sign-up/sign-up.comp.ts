import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SignUpService } from './sign-up.svc';
import { AngularFire, AngularFireAuth } from 'angularfire2';

@Component({
	selector: 'sl-sign-up',
	templateUrl: './sign-up.html',
	providers: [SignUpService]
})
export class SignUpComponent implements OnInit {
	errorMessage: string;

	constructor(
		private signUpService: SignUpService,
		private router: Router,
		af: AngularFire) {
	}

	ngOnInit() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log(user);
				this.router.navigate(['home']);
			} else {
				console.log("No User");
			}
		});
	}

	signUp(email, password) {
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
			if (error) {
				console.log(error.message);
			}
		});
	}
}