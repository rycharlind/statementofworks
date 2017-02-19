import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SowService } from '../../sow/sow.svc';
import { Sow } from '../../model/sow';
import { Vendor } from '../../model/vendor';
import { ConfirmService } from '../../confirm-service/confirm.svc';
import { ConfirmComponent } from '../../confirm-service/confirm.comp';
import { MaterialModule } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { ActivityService } from '../sow-activities/activity.svc';

@Component({
    selector: 'sow-details',
    templateUrl: 'sow-details.html',
    providers: [ConfirmService]
})

export class SowDetailsComponent implements OnInit {

    sow: Sow;
    isEditable: boolean = false;
    isNumberEditable: boolean = false;
    vendors: FirebaseListObservable<Vendor[]>;

    constructor(private sowService: SowService,
        private activityService: ActivityService,
        private confirmService: ConfirmService,
        private router: Router,
        public viewContainerRef: ViewContainerRef,
        af: AngularFire) {

            this.sow = new Sow();
            this.sow.vendor = new Vendor();
        
            this.sowService.getCurrentSow().subscribe(
                s => {
                    this.sow = s;
                    if (this.sowService.isNewSow) {
                        this.isEditable = true;
                    }
                }
            );

            this.vendors = af.database.list('/companies/vendors');
    }

    ngOnInit() {
    }

    toggleView() {
        if (this.isEditable) {
            this.isEditable = false;

            if (this.sowService.isNewSow) {
                this.activityService.registerActivity("" + this.sow.number + " created.")
            }
            this.sowService.saveSow(this.sow);
        } else {
            this.isEditable = true;
        }
    }

    save() {
        this.sowService.saveSow(this.sow);
    }

    askToDelete() {
        this.confirmService.displayQuestion('Are you sure you want to delete this SOW?',
            ans => {
                if (ans == 'yes')
                    this.sowService.deleteSow(this.sow);
                    this.router.navigate(['/sows']);
        });
    }
}
