import { Component, OnInit, Input } from '@angular/core';
import { SowsService } from '../sows.svc';
import { Sow } from '../../model/sow';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'sow-details',
    templateUrl: 'sow-details.html'
})

export class SowDetailsComponent implements OnInit {

    sow = new Sow();
    isEditable: boolean = false;

    constructor(private sowsService: SowsService, af: AngularFire) {
        this.sowsService.getSelectedSow().subscribe(
            s => {
                this.sow = s; 
            }
        );
    }

    ngOnInit() {
    }

    toggleView() {
        if (this.isEditable) {
            this.isEditable = false;
            this.saveSow(this.sow);
        } else {
            this.isEditable = true;
        }
    }

    saveSow(sow: Sow) {
        console.log(sow);
        //firebase.database().ref('sows').set(sow);
    }

}
