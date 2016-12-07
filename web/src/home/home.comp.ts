import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
	selector: 'sl-home',
	templateUrl: './home.html',
	providers: []
})
export class HomeComponent implements OnInit {

	items: FirebaseListObservable<any[]>;
	email: string;

	constructor(af: AngularFire) {
		this.items = af.database.list('/projects');
	}

	ngOnInit() {
		var user = firebase.auth().currentUser;
		if (user) {
			this.email = user.email;
		}
	}
}