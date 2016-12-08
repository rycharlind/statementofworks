import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFire, AngularFireAuth } from 'angularfire2';

@Component({
    selector: 'forgot-password',
    templateUrl: 'forgot-password.html'
})
export class ForgotPasswordComponent {

    constructor(af: AngularFire, private router: Router) {
    }

    ngOnInit() {
    }

}
