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
	selector: 'sl-groups',
	templateUrl: './groups.html',
	providers: [UserService]
})

export class GroupsComponent implements OnInit {

	userGroups: FirebaseListObservable<any[]>;
	isNewSow: boolean;

	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		af: AngularFire, private router: Router) {

			firebase.auth().onAuthStateChanged((user: firebase.User) => {
				if (user) {

					this.userGroups = af.database.list('/userGroups/' + user.uid)
						.map(userGroups => {
							userGroups.map(ug => {
								ug.group = af.database.object('/groups/' + ug.groupRef);
							});
							return userGroups;
						}) as FirebaseListObservable<any[]>;

				}
			});
	}

	ngOnInit() {

	}

	execute() {
	}

	goToGroupSows(userGroup) {
		console.log(userGroup);
		this.router.navigate(['/sows/' + userGroup.groupRef])
	}

}
