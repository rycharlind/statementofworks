import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { SowsService } from '../sows.svc';
import { Sow } from '../../model/sow';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { ConfirmDialogComponent } from './confirm-dialog.comp'
import { ActivityService } from './../activity-service/activity.svc';

@Component({
    selector: 'sow-details',
    templateUrl: 'sow-details.html'
})

export class SowDetailsComponent implements OnInit {

    sow = new Sow();
    isEditable: boolean = false;
    dialogRef: MdDialogRef<any>;

    constructor(private sowsService: SowsService,
    private activityService: ActivityService,
     public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef) {
        this.sowsService.getSelectedSow().subscribe(
            s => {
                this.sow = s;
                if (this.sowsService.isNewSow) {
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

            if (this.sowsService.isNewSow) {
                this.activityService.registerActivity("" + this.sow.number + " created.")
            }
            this.sowsService.saveSow(this.sow);
        } else {
            this.isEditable = true;
        }
    }

    deleteCurrentSow(ev: any, mdDialog: any) {

        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(ConfirmDialogComponent, config);

        this.dialogRef.afterClosed().subscribe(result => {
            if (result == 'yes') {
                this.sowsService.deleteSow(this.sow);
            }

            this.dialogRef = null;
        });

    }
}
