import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { SignInService } from './sign-in.svc';
import { AngularFire, AngularFireAuth } from 'angularfire2';

@Component({
	selector: 'sl-sign-in',
	templateUrl: './sign-in.html',
	providers: [SignInService]
})
export class SignInComponent implements OnInit {
	errorMessage: string;

	constructor(
		private router: Router,
		private signInService: SignInService,
		private zone: NgZone,
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

	ngAfterViewInit() {
	}

	signIn(email, password) {
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
			if (error) {
				console.log(error.message);
			}
		});
	}

	goTo(route) {
		this.router.navigate([route]);
	}

}