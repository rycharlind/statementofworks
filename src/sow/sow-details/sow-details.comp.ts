import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { SowService } from '../../sow/sow.svc';
import { Sow } from '../../model/sow';
import { ConfirmService } from '../../confirm-service/confirm.svc';
import { ConfirmComponent } from '../../confirm-service/confirm.comp';

import { ActivityService } from '../sow-activities/activity.svc';

@Component({
    selector: 'sow-details',
    templateUrl: 'sow-details.html',
    providers: [ConfirmService]
})

export class SowDetailsComponent implements OnInit {

    sow = new Sow();
    isEditable: boolean = false;

    constructor(private sowService: SowService,
        private activityService: ActivityService,
        private confirmService: ConfirmService,
        public viewContainerRef: ViewContainerRef) {
        this.sowService.getCurrentSow().subscribe(
            s => {
                this.sow = s;
                if (this.sowService.isNewSow) {
                    this.isEditable = true;
                }
            }
        );
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

    askToDelete() {
        this.confirmService.displayQuestion('Are you sure you want to delete this SOW?',
            ans => {
                if (ans == 'yes')
                    this.sowService.deleteSow(this.sow);
        });
    }
}
