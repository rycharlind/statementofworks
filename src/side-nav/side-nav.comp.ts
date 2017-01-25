import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire, AngularFireAuth, FirebaseListObservable } from 'angularfire2';
import { SideNavService } from '../../quSquared/side-nav/side-nav.svc';

@Component({
  selector: 'sl-side-nav',
  templateUrl: './side-nav.html',
  providers: [SideNavService]
})
export class SideNavComponent implements OnInit {

  sows: FirebaseListObservable<any[]>;

  items = [
    { title:"Home", icon:"fa-home", isActive: false, path:"/" },
    { title:"SOWs", icon:"fa-file-text", isActive: false, path:"/sows" },
    { title:"Settings", icon:"fa-cogs", isActive: false, path:"/" },
    { title:"Sign Out", icon:"fa-sign-out", isActive: false, path:"/" }
  ];

  constructor(
    private router: Router,
    af: AngularFire,
    private sideNavSvc: SideNavService) {
  }

  ngOnInit() {
  }

  selectSow(sow: any) {
    this.router.navigate(['sow/' + sow.$key]);
  }

  goTo(index) {
    let path = this.items[index].path;
    if (index < 3) {
      this.router.navigate([path]);
      this.setActive(index);
    } else {
      firebase.auth().signOut();
    }
  }

  setActive(index) {
    for (let i = 0; i < this.items.length; i++) {
      if (i == index) {
        this.items[i].isActive = true;
      } else {
        this.items[i].isActive = false;
      }
    }
  }

  signOut() {
    firebase.auth().signOut();
  }

  close() {
    this.sideNavSvc.toggle();
  }

}
