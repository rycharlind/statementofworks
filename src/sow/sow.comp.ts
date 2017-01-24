import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../model/project';
import { Sow } from '../model/sow';
import { UserService } from '../firebase-service/user.svc';
import { SowsService } from '../sows/sows.svc';

@Component({
	selector: 'sl-sow',
    templateUrl: './sow.html',
	providers: [UserService]
})

export class SowComponent implements OnInit {

    key: string;


	constructor(
		private userService: UserService,
		private sowsService: SowsService,
		private route: ActivatedRoute,
		private af: AngularFire, 
        private router: Router) {
				
            

    }

	ngOnInit() {

		this.userService.authUser();

		this.route.params.subscribe(params => {
			this.key = params['key'];
		});
	
	}


}
