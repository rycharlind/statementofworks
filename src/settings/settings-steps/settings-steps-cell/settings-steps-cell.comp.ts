import { Component, Input, ViewContainerRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable, Subject } from 'rxjs/Rx';

import { Step } from '../../../model/step';

@Component({
    selector: 'settings-steps-cell',
    templateUrl: 'settings-steps-cell.html'
})

export class SettingsStepsCellComponent {

    @Input() step: any;
    isEditable: boolean = false;

    constructor(af: AngularFire) {
    }

    toggleEdit() {

        if (this.isEditable) {
            this.isEditable = false;
            this.updateStep();
        } else {
            this.isEditable = true;
        }
    }

    updateStep() {
        console.log(this.step);
        let key = this.step.$key;
        if (key) {
            delete this.step.$key;
            delete this.step.$exists;
            firebase.database().ref('/steps/' + key).update(this.step);
            this.step.$key = key;
        } else {
            console.log("No key");
        }
    }


}
