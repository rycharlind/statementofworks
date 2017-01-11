import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire, AngularFireAuth } from 'angularfire2';

@Component({
  selector: 'sl-side-nav',
  templateUrl: './side-nav.html'
})
export class SideNavComponent {

  constructor(
    private router: Router,
    af: AngularFire) {
  
  }

  signOut() {
    firebase.auth().signOut();
  }

}
