import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../model/project';

@Component({
	selector: 'sl-home',
	templateUrl: './home.html',
	providers: []
})
export class HomeComponent implements OnInit {

	items: FirebaseListObservable<any[]>;
	email: string;

	constructor(af: AngularFire, private router: Router) {
		this.items = af.database.list('/projects');
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

	addProject(name, status) {
		var project = new Project(name, status);
		this.items.push(project);
	}
}