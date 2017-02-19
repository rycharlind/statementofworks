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

    constructor(af: AngularFire) {
    }

    announceCurrentSow(sow: Sow) {
        this.currentSow.next(sow);
    }

    getCurrentSow() {
        return this.currentSow.asObservable();
    }

    pullSow(key) {
        firebase.database().ref('/sows/' + key).once('value').then(snapshot => {
            var sow: Sow = snapshot.val();
            sow.$key = key;
            firebase.database().ref('/companies/vendors/' + sow.vendorRef).once('value').then(snapshot => {
                sow.vendor = snapshot.val();
                this.currentSow.next(sow);
            });
		});
    }

    saveSow(sow: any) {
        console.log(sow);
        let key = sow.$key;
        let vendor = sow.vendor;
        if (key) {
            sow.vendorRef = vendor.$key;
            
            delete sow.vendor;
            delete sow.$key;
            delete sow.$exists;

            firebase.database().ref('/sows/' + key).update(sow);
            sow.$key = key;
            sow.vendor = vendor;
        } else {
            console.log("No key with SOW.  Cannot save the SOW without the key");
        }
    }

    deleteSow(sow: any) {
        firebase.database().ref('/sows/' + sow.$key).remove();
    }

}