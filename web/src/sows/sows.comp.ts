import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../model/project';
import { Sow } from '../model/sow';
import { UserService } from '../firebase-service/user.svc';
import { SowDetailsComponent } from './sow-details/sow-details.comp';
import { SowsService } from './sows.svc';

@Component({
	selector: 'sl-sows',
	templateUrl: './sows.html',
	providers: [UserService]
})

export class SowsComponent implements OnInit {

	items: FirebaseListObservable<any[]>;
	email: string;
	sow: Sow;

	constructor(
		private userService: UserService,
		private sowsService: SowsService,
		af: AngularFire, private router: Router) {
		
		this.items = af.database.list('/sows');
		this.sow = new Sow();
	}

	ngOnInit() {
		this.userService.authUser();
	}

	getUser() {
		console.log(this.userService.user);
	}

	createSow() {
		console.log(this.sow)
		this.items.push(this.sow);
	}

	selectSow(sow: Sow) {
		this.sowsService.announceSowSelected(sow);
	}
}