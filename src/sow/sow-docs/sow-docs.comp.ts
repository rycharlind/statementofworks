import { Component, OnInit, Input } from '@angular/core';
import { SowService } from '../../sow/sow.svc';
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

    constructor(private sowService: SowService, private docUploaderService: DocUploaderService, af: AngularFire) {
        this.sowService.getCurrentSow().subscribe(
            s => {
                this.sow = s;
            }
        );
    }

    ngOnInit() {
        document.addEventListener("contextmenu", e => {
            console.log(e);
        });
    }

    uploadFile() {
        var file = (<HTMLInputElement>document.getElementById("upload")).files[0];
        this.docUploaderService.upload(file, this.sow);
    }



}
