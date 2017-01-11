import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { SignInService } from './sign-in.svc';
import { AngularFire, AngularFireAuth } from 'angularfire2';
import { UserService } from '../firebase-service/user.svc';

@Component({
	selector: 'sl-sign-in',
	templateUrl: './sign-in.html',
	providers: [SignInService, UserService]
})
export class SignInComponent implements OnInit {
	errorMessage: string;

	constructor(
		private userService: UserService,
		private router: Router,
		private zone: NgZone,
		af: AngularFire) {
	}

	ngOnInit() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log(user);
				this.router.navigate(['sows']);
			} else {
				console.log("No User");
			}
		});
	}

	ngAfterViewInit() {
	}

	signIn(email, password) {
		this.userService.signIn(email, password);
	}

	goTo(route) {
		this.router.navigate([route]);
	}

	forgotPassword(email) {
		firebase.auth().sendPasswordResetEmail(email);
	}

}