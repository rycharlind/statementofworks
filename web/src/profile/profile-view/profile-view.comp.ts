import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFire, AngularFireAuth} from 'angularfire2';

@Component({
	selector: 'sl-profile-view',
	templateUrl: './profile-view.html',
	providers: []
})
export class ProfileViewComponent implements OnInit {

	email: string;

	constructor(af: AngularFire) {
	}

	ngOnInit() {
		var user = firebase.auth().currentUser;
		if (user) {
			this.email = user.email;
		}
	}
}