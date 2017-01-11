import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFire, AngularFireAuth, FirebaseListObservable } from 'angularfire2';
import { UserProfile } from '../../model/user-profile';
import { UserService } from '../../firebase-service/user.svc';


@Component({
	selector: 'sl-profile-view',
	templateUrl: './profile-view.html',
	providers: [UserService]
})
export class ProfileViewComponent implements OnInit {

	firstName: string;
	lastName: string;
	email: string;
	isEmailVerified: boolean;

	constructor(
		private userService: UserService,
		af: AngularFire,
		private router: Router) {
	}

	ngOnInit() {
		this.userService.authUser();
	}

	getUserProfileInfo(user: firebase.User) {
		console.log("Get User Profile");
		firebase.database().ref('/userProfiles/' + user.uid).once('value').then((snapshot) => {
			console.log("Received user profile");
			this.firstName = snapshot.val().firstName;
			this.lastName = snapshot.val().lastName;
			this.email = user.email;
			this.isEmailVerified = user.emailVerified;
		});
	}
}