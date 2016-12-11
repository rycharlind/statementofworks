import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
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
		this.items = af.database.list('/sows');
	}

	ngOnInit() {
		this.userService.authUser();
	}

	getUser(){
		console.log(this.userService.user);
	}

	createSOW(
		sowName, 
		sowDescription, 
		sowTitle, 
		sowStartDate, 
		sowEndDate, 
		sowCost, 
		sowType, 
		sowSubType, 
		sowVendor, 
		sowBusinessOwner,
		sowFundingSource,
		sowFundingGlid ) {
			
			var sow = new Sow(
				sowName, 
				sowDescription,
				sowTitle,
				sowStartDate,
				sowEndDate,
				sowCost,
				sowType,
				sowSubType,
				sowVendor,
				sowBusinessOwner,
				sowFundingSource,
				sowFundingGlid
				);
			this.items.push(sow);
	}
}