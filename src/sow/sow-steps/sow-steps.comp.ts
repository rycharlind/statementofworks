import { Component, OnInit, Input, ChangeDetectorRef, NgZone, ApplicationRef } from '@angular/core';
import { MaterialModule } from '@angular/material'; ''
import { SowService } from '../../sow/sow.svc';
import { DocUploaderService } from '../../doc-uploader/doc-uploader.svc';
import { Sow } from '../../model/sow';
import { Doc } from '../../model/doc';
import { Step } from '../../model/step';
import { CompletedStep } from '../../model/completedStep';
import { AngularFire } from 'angularfire2';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
    selector: 'sow-steps',
    templateUrl: 'sow-steps.html',
    styleUrls: ['sow-steps.scss']
})

export class SowStepsComponent implements OnInit {

    sow = new Sow();
    steps = new Array<Step>();

    constructor(
        private sowService: SowService,
        private docUploaderService: DocUploaderService,
        private af: AngularFire,
        private chRef: ChangeDetectorRef,
        private zone: NgZone,
        private appRef: ApplicationRef) {
        this.sowService.getCurrentSow().subscribe(
            s => {
                this.sow = s;
                this.getSteps().then((steps: Array<Step>) => {
                    this.steps = steps;
                });
            }
        );
    }

    ngOnInit() {
    }

    getSteps() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('/steps').on('value', snapshot => {
                var tmpArr = new Array<Step>();
                var steps = snapshot.val();
                for (let index in steps) {
                    let step: Step = steps[index];
                    step.$key = index;
                    if (this.sow.completedSteps) {
                        for (let index in this.sow.completedSteps) {
                            let completedStep = this.sow.completedSteps[index];
                            if (step.$key == completedStep.ref) {
                                step.isComplete = true;
                            }
                        }
                    }
                    tmpArr.push(step);
                }
                resolve(tmpArr);
            });
        });
    }

    completeStep(step: Step) {
        let completedStep = new CompletedStep();
        completedStep.ref = step.$key;
        firebase.database().ref('/sows/' + this.sow.$key + '/completedSteps').push(completedStep).then(error => {
            step.isComplete = true;
        });
    }

    unCompleteStep(step: Step) {
        var ref = firebase.database().ref('/sows/' + this.sow.$key + '/completedSteps');
        ref.orderByChild('ref').equalTo(step.$key)
            .once('value', snap => {
                snap.forEach(childSnap => {
                    step.isComplete = false;
                    ref.child(childSnap.key).remove();
                    return true;
                });
            });
    }

    toggleStep(step: Step) {
        if (step.isComplete) {
            this.unCompleteStep(step);
        } else {
            this.completeStep(step);
        }
    }

}
