import { Injectable, Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Sow } from '../model/sow';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { AngularFire } from 'angularfire2';

@Injectable()
export class SowsService {

    private selectedSow = new Subject<Sow>();
    public isNewSow: boolean = false;

    constructor(af: AngularFire) {
    }

    announceSowSelected(sow: Sow) {
        console.log(sow);
        this.selectedSow.next(sow);
    }

    getSelectedSow() {
        return this.selectedSow.asObservable();
    }

    saveSow(sow: any) {
        let key = sow.$key;
        if (key) {
            delete sow.$key;
            delete sow.$exists;
            firebase.database().ref('/sows/' + key).update(sow);
            sow.$key = key;
        }
    }

    deleteSow(sow: any) {
        firebase.database().ref('/sows/' + sow.$key).remove();
        this.isNewSow = false;
          //this.announceSowSelected(this.items[0])
    }

}
