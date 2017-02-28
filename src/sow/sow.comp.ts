import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../model/project';
import { Sow } from '../model/sow';
import { UserService } from '../firebase-service/user.svc';
import { SowService } from '../sow/sow.svc';
import { ActivityService } from './sow-activities/activity.svc';

@Component({
	selector: 'sl-sow',
    templateUrl: './sow.html',
	providers: [UserService, ActivityService]
})

export class SowComponent implements OnInit {

	sow: Sow = new Sow();
	groupKey: string;

	constructor(
		private userService: UserService,
		private sowService: SowService,
		private route: ActivatedRoute,
		private af: AngularFire, 
        private router: Router) {
				
        	this.sowService.getCurrentSow().subscribe(
				s => {
					this.sow = s;
				}
			);

    }

	ngOnInit() {

		this.userService.authUser();

		this.route.params.subscribe(params => {
			this.groupKey = params['groupKey'];
			let sowKey = params['sowKey'];
			this.sowService.pullSow(this.groupKey, sowKey);
		});
	
	}

	save() {
        this.sowService.saveSow(this.sow);
    }



}
