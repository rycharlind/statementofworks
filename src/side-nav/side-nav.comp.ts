import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire, AngularFireAuth, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'sl-side-nav',
  templateUrl: './side-nav.html'
})
export class SideNavComponent implements OnInit {

  sows: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    af: AngularFire) {

      this.sows = af.database
				.list('/sows')
				.map(
					items => items.sort(
						(a,b) => 1
					)
				) as FirebaseListObservable<any[]>;
  
  }

  ngOnInit() {
  }

  selectSow(sow: any) {
    this.router.navigate(['sow/' + sow.$key]);
  }

  goTo(path) {
    this.router.navigate([path]);
  }

  signOut() {
    firebase.auth().signOut();
  }

}
