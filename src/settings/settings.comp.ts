import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../model/project';
import { Sow } from '../model/sow';
import { Step } from '../model/step';
import { UserService } from '../firebase-service/user.svc';

@Component({
	selector: 'sl-settings',
	templateUrl: './settings.html',
	providers: [UserService]
})

export class SettingsComponent implements OnInit {

	newStep = new Step();
	steps: FirebaseListObservable<any[]>;

	constructor(
		private userService: UserService,
		af: AngularFire, private router: Router) {


	}

	ngOnInit() {
		this.userService.authUser();
	}

	goTo(path) {
		this.router.navigate([path]);
	}

}