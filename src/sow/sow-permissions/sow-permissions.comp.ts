import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';
import { SowService } from '../../sow/sow.svc';
import { DocUploaderService } from '../../doc-uploader/doc-uploader.svc';
import { Sow } from '../../model/sow';
import { Doc } from '../../model/doc';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
    selector: 'sow-permissions',
    templateUrl: 'sow-permissions.html',
    styleUrls: ['sow-permissions.scss']
})

export class SowPermissionsComponent implements OnInit {
    
    sow = new Sow();
    users: FirebaseListObservable<any[]>;


    constructor(
        private sowService: SowService,
        private docUploaderService: DocUploaderService,
        af: AngularFire,
        private elementRef: ElementRef,
        private renderer: Renderer) {

        this.sowService.getCurrentSow().subscribe(
            s => {
                this.sow = s;
                this.users = af.database.list('/userProfiles') as FirebaseListObservable<any[]>;
            }
        );
    }

    ngOnInit() {
    }

    ngAfterContentInit() {
    }

    addUserToSow(user) {
        console.log(user);
        firebase.database().ref('/sows/' + this.sow.$key + '/permissions/' + user.$key).set(user.$key);
    }


}
