import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Project } from '../model/project';
import { Sow } from '../model/sow';
import { UserService } from '../firebase-service/user.svc';
import { SowsService } from './sows.svc';
import { SowService } from '../sow/sow.svc';

@Component({
	selector: 'sl-sows',
	templateUrl: './sows.html',
	providers: [UserService]
})

export class SowsComponent implements OnInit {

	items: FirebaseListObservable<any[]>;
	email: string;
	sow: Sow;
	groupKey: string;

	isNewSow: boolean;

	constructor(
		private userService: UserService,
		private sowsService: SowsService,
		private sowService: SowService,
		private route: ActivatedRoute,
		af: AngularFire, private router: Router) {

		this.route.params.subscribe(params => {
			this.groupKey = params['groupKey'];

			this.items = af.database
				.list('/sows/' + this.groupKey + '/sows')
				.map(
				items => items.sort(
					(a: Sow, b: Sow) => {
						if (a.number > b.number) return 1;
						if (b.number > a.number) return -1;
					}
				)
				) as FirebaseListObservable<any[]>;
		});

		this.sow = new Sow();

		this.sowsService.getSelectedSow().subscribe(
			s => {
				this.sow = s;
			}
		);
	}

	ngOnInit() {
		this.userService.authUser();
		let sowRef = firebase.database().ref('/sows');
		sowRef.on('child_added', snapShot => {
			var sow = snapShot.val();
			sow.$key = snapShot.key;
		});
	}

	goTo(sow: Sow) {
		this.router.navigate(['/sow/' + this.groupKey + '/' + sow.$key]);
	}

	newSow() {
		let sow = new Sow();
		sow.number = 0;
		this.sowsService.isNewSow = true;
		this.items.push(sow).then(snap => {
			this.sowService.isNewSow = true;
			this.router.navigate(['/sow/' + this.sowService.groupKey + '/sows/' + snap.key]);
		});
	}


}
