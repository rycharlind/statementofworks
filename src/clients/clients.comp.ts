import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../model/project';
import { Sow } from '../model/sow';
import { UserService } from '../firebase-service/user.svc';

@Component({
	selector: 'sl-clients',
    templateUrl: './clients.html',
	providers: [UserService]
})

export class ClientsComponent implements OnInit {

	items: FirebaseListObservable<any[]>;
	isNewSow: boolean;

	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		af: AngularFire, private router: Router) {
			
			this.items = af.database.list('/vendors') as FirebaseListObservable<any[]>;
	}

	ngOnInit() {
	}

    execute() {
        var object = {
            name:"Amdocs"
        }
        this.items.push(object);
    }

}
