import { Injectable, Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Sow } from '../model/sow';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { AngularFire } from 'angularfire2';

@Injectable()
export class SowService {

    private currentSow = new Subject<Sow>();
    public isNewSow: boolean = false;
    public groupKey: string;

    constructor(af: AngularFire) {
    }

    announceCurrentSow(sow: Sow) {
        this.currentSow.next(sow);
    }

    getCurrentSow() {
        return this.currentSow.asObservable();
    }

    pullSow(groupKey, sowKey) {
        this.groupKey = groupKey;
        firebase.database().ref('/sows/' + groupKey + '/sows/' + sowKey).once('value').then(snapshot => {
            var sow: Sow = snapshot.val();
            sow.$key = sowKey;
            
            firebase.database().ref('/companies/vendors/' + sow.vendorRef).once('value').then(snapshot => {
                sow.vendor = {"$key": sow.vendorRef, "name": snapshot.val().name};
                this.currentSow.next(sow);
            });
		});
    }

    saveSow(sow: any) {
        let key = sow.$key;
        //let vendor = sow.vendor;
        if (key) {
            //sow.vendorRef = vendor.$key;
            
            delete sow.vendor;
            delete sow.$key;
            delete sow.$exists;

            firebase.database().ref('/sows/' + key).update(sow);
            sow.$key = key;
            //sow.vendor = vendor;
        } else {
            console.log("No key with SOW.  Cannot save the SOW without the key");
        }
    }

    deleteSow(sow: any) {
        firebase.database().ref('/sows/' + this.groupKey + '/sows/' + sow.$key).remove();
    }

}