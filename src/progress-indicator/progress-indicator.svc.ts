import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ProgressIndicatorService {

    displayed = new Subject<boolean>();

    constructor(){}

    isDisplayed() {
        return this.displayed.asObservable();
    }


}