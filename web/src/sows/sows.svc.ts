import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Sow } from '../model/sow';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SowsService {

    private selectedSow = new Subject<Sow>();
 
    announceSowSelected(sow: Sow) {
        this.selectedSow.next(sow);
    }

    getSelectedSow() {
        return this.selectedSow.asObservable();
    }


}