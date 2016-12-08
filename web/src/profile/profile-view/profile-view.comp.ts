import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFire, AngularFireAuth, FirebaseListObservable } from 'angularfire2';
import { UserProfile } from '../../model/user-profile';

@Component({
	selector: 'sl-profile-view',
	templateUrl: './profile-view.html',
	providers: []
})
export class ProfileViewComponent implements OnInit {

	userProfiles: FirebaseListObservable<any[]>;
	firstName: string;
	lastName: string;
	email: string;
	isEmailVerified: boolean;

	constructor(
		af: AngularFire,
		private router: Router) {
			this.userProfiles = af.database.list('/userProfiles');
	}

	ngOnInit() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log(user);
				this.getUserProfileInfo(user);
			} else {
				console.log("No User");
				this.router.navigate(['sign-in']);
			}
		});
	}

	getUserProfileInfo(user: firebase.User) {
		this.email = user.email;
		this.isEmailVerified = user.emailVerified;
		firebase.database().ref('/userProfiles/' + user.uid).once('value').then((snapshot) => {
			this.firstName = snapshot.val().firstName;
			this.lastName = snapshot.val().lastName;
		});
	}
}