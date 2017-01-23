import { Component, OnInit, Input } from '@angular/core';
import { ConfirmService } from './confirm.svc';

@Component({
    selector: 'confirm',
    templateUrl: 'confirm.html'
})

export class ConfirmComponent {

    displayed: boolean;
    msg: string;

    constructor(private confirmService: ConfirmService) {

        this.confirmService.getDisplayed().subscribe(
            d => { this.displayed = d; }
        );

        this.confirmService.getMsg().subscribe(
            m => { this.msg = m; }
        );

    }

    answer(ans: string) {
        this.confirmService.answer(ans);
    }

}
