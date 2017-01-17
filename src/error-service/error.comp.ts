import { Component, OnInit, Input } from '@angular/core';
import { ErrorService } from './error.svc';

@Component({
    selector: 'errors',
    templateUrl: 'error.html'
})

export class ErrorComponent {

    displayed: boolean;
    msg: string;

    constructor(private errorService: ErrorService) {

	this.errorService.getDisplayed().subscribe(
            d => {
                this.displayed = d;
            }
        );
        
        this.errorService.getMsg().subscribe(
            m => {
                this.msg = m;
            }
        );

    }

    close() {
	this.errorService.hide();
    }

}
