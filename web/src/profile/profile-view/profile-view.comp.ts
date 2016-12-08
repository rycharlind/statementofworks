import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFire, AngularFireAuth } from 'angularfire2';

@Component({
	selector: 'sl-profile-view',
	templateUrl: './profile-view.html',
	providers: []
})
export class ProfileViewComponent implements OnInit {

	email: string;

	constructor(
		af: AngularFire,
		private router: Router) {
	}

	ngOnInit() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log(user);
				this.email = user.email;
			} else {
				console.log("No User");
				this.router.navigate(['sign-in']);
			}
		});
	}
}