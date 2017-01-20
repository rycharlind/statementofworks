import { Component } from '@angular/core';
import { Activity } from '../../model/activity';
import { ActivityService } from '../activity-service/activity.svc'
import { FirebaseListObservable } from 'angularfire2'; 

@Component({
    selector: 'sow-activities',
    templateUrl: 'activities.html'
})

export class SowActivitiesComponent {

    activities: FirebaseListObservable<any[]>;

    constructor(
	private activityService: ActivityService
    ){
	this.activities = activityService.getActivities();
    }

}
