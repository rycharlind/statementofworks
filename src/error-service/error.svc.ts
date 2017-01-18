import { Injectable, ElementRef, Renderer } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ErrorService {

    displayed = new Subject<boolean>();
    msg = new Subject<string>();
    
    displayError(msg: string){
	this.msg.next(msg);
	this.displayed.next(true);
    }

    getMsg(){
	return this.msg.asObservable();
    }
    
    getDisplayed() {
        return this.displayed.asObservable();
    }

    hide() {
	this.displayed.next(false);
    }


}
