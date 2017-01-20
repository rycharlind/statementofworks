import { Component } from '@angular/core';
import { Activity } from '../../model/activity';
import { ActivityService } from '../activity-service/activity.svc'
import { FirebaseListObservable } from 'angularfire2';

import { SowsService } from '../sows.svc';

@Component({
    selector: 'sow-activities',
    templateUrl: 'activities.html'
})

export class SowActivitiesComponent {

    activities: FirebaseListObservable<any[]>;

    constructor(
        private sowService: SowsService,
        private activityService: ActivityService
    ) {

        this.sowService.getSelectedSow().subscribe(
            s => {
                this.activities = this.activityService.getActivities();
        })
    }

}
