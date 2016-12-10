import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../model/project';
import { UserService } from '../firebase-service/user.svc';

@Component({
	selector: 'sl-home',
	templateUrl: './home.html',
	providers: [UserService]
})

export class HomeComponent implements OnInit {

	items: FirebaseListObservable<any[]>;
	email: string;

	constructor(
		private userService: UserService,
		af: AngularFire, private router: Router) {
		this.items = af.database.list('/projects');
	}

	ngOnInit() {
		this.userService.authUser();
	}

	getUser(){
		console.log(this.userService.user);
	}

	addProject(name, status) {
		var project = new Project(name, status);
		this.items.push(project);
	}
}