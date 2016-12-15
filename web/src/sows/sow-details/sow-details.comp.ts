import { Component, OnInit, Input } from '@angular/core';
import { SowsService } from '../sows.svc';
import { Sow } from '../../model/sow';

@Component({
    selector: 'sow-details',
    templateUrl: 'sow-details.html'
})
export class SowDetailsComponent implements OnInit {

    sow = new Sow();

    constructor(private sowsService: SowsService) {
        this.sowsService.getSelectedSow().subscribe(
            s => {
                this.sow = s; 
            }
        );
    }

    ngOnInit() {
    }

}
