import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { SowsService } from '../sows.svc';
import { Sow } from '../../model/sow';
import { AngularFire } from 'angularfire2';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { ConfirmDialogComponent } from './confirm-dialog.comp'

@Component({
    selector: 'sow-details',
    templateUrl: 'sow-details.html'
})

export class SowDetailsComponent implements OnInit {

    sow = new Sow();
    isEditable: boolean = false;

    dialogRef: MdDialogRef<any>;

    constructor(private sowsService: SowsService, af: AngularFire, public dialog: MdDialog,
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
            this.saveSow(this.sow);
        } else {
            this.isEditable = true;
        }
    }

    saveSow(sow: any) {
        console.log(sow);
        let key = sow.$key;
        if (key) {
            delete sow.$key;
            delete sow.$exists;
            firebase.database().ref('/sows/' + key).update(sow);
            sow.$key = key;
        }
    }

    deleteSow(ev: any, mdDialog: any) {

        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(ConfirmDialogComponent, config);

        this.dialogRef.afterClosed().subscribe(result => {
            if (result == 'yes') {
                firebase.database().ref('/sows/' + this.sow.$key).remove();

                //this.sowsService.announceSowSelected(this.items[0])
                this.sowsService.isNewSow = false;
            }

            this.dialogRef = null;
        });
    }

}
