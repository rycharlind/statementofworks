import { Component, OnInit, Input, ChangeDetectorRef, NgZone, ApplicationRef } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { SowService } from '../../sow/sow.svc';
import { UserService } from '../../firebase-service/user.svc';
import { Sow } from '../../model/sow';
import { Doc } from '../../model/doc';
import { Step } from '../../model/step';
import { CompletedStep } from '../../model/completedStep';
import { AngularFire } from 'angularfire2';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
    selector: 'settings-steps',
    templateUrl: 'settings-steps.html',
    styleUrls: ['settings-steps.scss']
})

export class SettingsStepsComponent implements OnInit {

    constructor(
        private userService: UserService,
        private sowService: SowService,
        private af: AngularFire,) {

            

    }

    ngOnInit() {
    }



}
