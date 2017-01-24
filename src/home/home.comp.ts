import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../model/project';
import { Sow } from '../model/sow';
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

	}

	ngOnInit() {
		this.userService.authUser();
	}

}