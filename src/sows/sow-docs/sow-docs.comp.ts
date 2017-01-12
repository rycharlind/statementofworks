import { Component, OnInit, Input } from '@angular/core';
import { SowsService } from '../sows.svc';
import { Sow } from '../../model/sow';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'sow-docs',
    templateUrl: 'sow-docs.html'
})

export class SowDocsComponent implements OnInit {

    constructor(private sowsService: SowsService, af: AngularFire) {

    }

    ngOnInit() {
    }

}
