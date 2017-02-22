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
	selector: 'sl-workflow',
    templateUrl: './workflow.html',
	providers: [UserService]
})

export class WorkflowComponent implements OnInit {

	items: FirebaseListObservable<any[]>;
	sow: Sow;

	constructor(
		private userService: UserService,
		private sowsService: SowsService,
		private route: ActivatedRoute,
		af: AngularFire, private router: Router) {
			
			this.items = af.database
				.list('/sows')
				.map(
					items => items.sort(
						(a,b) => 1
					)
				) as FirebaseListObservable<any[]>;
			
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
		this.router.navigate(['/sow/' + sow.$key]);
	}

	newSow() {
		let sow = new Sow();
		sow.number = 0;
		this.sowsService.isNewSow = true;
		this.items.push(sow).then(snap => {
			console.log(snap.key);
			this.router.navigate(['/sow/' + snap.key]);
		})
	}


}
