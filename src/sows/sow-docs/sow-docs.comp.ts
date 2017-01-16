import { Component, OnInit, Input } from '@angular/core';
import { SowsService } from '../sows.svc';
import { DocUploaderService } from '../../doc-uploader/doc-uploader.svc';
import { Sow } from '../../model/sow';
import { Doc } from '../../model/doc';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'sow-docs',
    templateUrl: 'sow-docs.html',
    styleUrls: ['sow-docs.scss']
})

export class SowDocsComponent implements OnInit {
    sow = new Sow();
    progress: any;

    constructor(private sowsService: SowsService, private docUploaderService: DocUploaderService, af: AngularFire) {
        this.sowsService.getSelectedSow().subscribe(
            s => {
                this.sow = s;
            }
        );
    }

    ngOnInit() {
    }

    uploadFile() {
        var file = (<HTMLInputElement>document.getElementById("upload")).files[0];
        this.docUploaderService.upload(file, this.sow);
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

}
