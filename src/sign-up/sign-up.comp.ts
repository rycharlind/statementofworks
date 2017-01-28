import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SignUpService } from './sign-up.svc';
import { AngularFire, AngularFireAuth, FirebaseListObservable } from 'angularfire2';
import { UserProfile } from '../model/user-profile';
import { ErrorService } from '../error-service/error.svc'

@Component({
	selector: 'sl-sign-up',
	templateUrl: './sign-up.html',
	providers: [SignUpService]
})
export class SignUpComponent implements OnInit {
	errorMessage: string;
	userProfiles: FirebaseListObservable<any[]>;
	firstName: string;
	lastName: string;

	constructor(
		private router: Router,
		private errorService: ErrorService,
		af: AngularFire) {
		this.userProfiles = af.database.list('/userProfiles');
	}

	ngOnInit() {
		firebase.auth().onAuthStateChanged((user: firebase.User) => {
			if (user) {
				console.log(user);

				// Update User Profile info
				if (this.firstName) {
					let up = new UserProfile(this.firstName, this.lastName);
					firebase.database().ref('userProfiles/' + user.uid).set(up);
					// Send email verification
					user.sendEmailVerification();
				}

				// Navigate to the home page after user is registered
				this.router.navigate(['']);
			} else {
				console.log("No User");
			}
		});

		document.getElementsByClassName("qu-side-nav")[0].classList.add("sign-in-hide");
		document.getElementsByClassName("header")[0].classList.add("sign-in-hide");
		document.getElementById("appContainer").classList.add("sign-in-no-left");
	}

	ngOnDestroy(){
		document.getElementsByClassName("qu-side-nav")[0].classList.remove("sign-in-hide");
		document.getElementsByClassName("header")[0].classList.remove("sign-in-hide");
		document.getElementById("appContainer").classList.remove("sign-in-no-left");
	} 

	signUp(email, password, password2, fname, lname) {

		if (password !== password2) {
			this.errorService.displayError("Passwords do not match.");
			return;
		}

		this.firstName = fname;
		this.lastName = lname;

		firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
			if (error) {
				console.log(error.message);
				this.errorService.displayError(error.message);
			}
		});
	}

	goTo(route) {
		this.router.navigate([route]);
	}
}
