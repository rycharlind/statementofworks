import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ConfirmService {

    displayed = new Subject<boolean>();
    msg = new Subject<string>();
    callback: any;

    displayQuestion(msg: string, callback: any) {
        console.log('here')
        this.msg.next(msg);
        this.displayed.next(true);
        this.callback = callback;
    }

    answer(ans: string) {
        if (ans == 'yes') {
            this.callback(ans);
        }
        this.displayed.next(false);
    }

    getMsg() {
        return this.msg.asObservable();
    }

    getDisplayed() {
        return this.displayed.asObservable();
    }
/*
    hide() {
        this.displayed.next(false);
    }*/


}
