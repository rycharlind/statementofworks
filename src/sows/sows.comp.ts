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

@Component({
	selector: 'sl-sows',
    templateUrl: './sows.html',
	providers: [UserService]
})

export class SowsComponent implements OnInit {

	items: FirebaseListObservable<any[]>;
	email: string;
	sow: Sow;

	isNewSow: boolean;

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
			this.sowsService.announceSowSelected(sow);
		});
	
	}



	selectSow(sow: Sow) {
		this.sowsService.isNewSow = false;
		this.sowsService.announceSowSelected(sow);

		this.setActiveClass();
	}

	goTo(sow: Sow) {
		this.router.navigate(['/sow/' + sow.$key]);
	}

	setActiveClass() {
		let osListItems : HTMLCollectionOf<Element> = document.getElementsByClassName("os-list-item");
		for (let i in osListItems)
			if (osListItems.item(Number(i)).getAttribute("id") == this.sow.$key)
				osListItems.item(Number(i)).classList.add("os-list-active");
			else
				osListItems.item(Number(i)).classList.remove("os-list-active");
	}

	newSow() {
		let sow = new Sow();
		sow.number = "SOW-";
		this.sowsService.isNewSow = true;
		this.items.push(sow);
	}


}
