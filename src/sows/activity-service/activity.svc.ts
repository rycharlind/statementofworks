import { Injectable } from '@angular/core';
import { Sow } from '../../model/sow';
import { Activity } from '../../model/activity';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../../firebase-service/user.svc';
import { SowsService } from '../sows.svc';

@Injectable()
export class ActivityService {

    activities: FirebaseListObservable<any[]>;

    constructor(
        private userService: UserService,
	private sowService: SowsService,
        af: AngularFire
    ) {
        this.sowService.getSelectedSow().subscribe(
            s => {
                this.activities = af.database.list('/sows/' + s.$key + '/activities') as FirebaseListObservable<any[]>;
            });
    }
    
    registerActivity(desc: string){
	this.activities.push(
	    new Activity(this.userService.getName(), desc)
	);
    }

    getActivities(){
	return this.activities;
    }

}
