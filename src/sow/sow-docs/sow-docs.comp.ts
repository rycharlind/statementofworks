import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';
import { SowService } from '../../sow/sow.svc';
import { DocUploaderService } from '../../doc-uploader/doc-uploader.svc';
import { Sow } from '../../model/sow';
import { Doc } from '../../model/doc';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'sow-docs',
    templateUrl: 'sow-docs.html',
    styleUrls: ['sow-docs.scss']
})

export class SowDocsComponent implements OnInit {
    sow = new Sow();
    documents: FirebaseListObservable<Doc[]>;
    progress: any;

    constructor(
        private sowService: SowService,
        private docUploaderService: DocUploaderService,
        af: AngularFire,
        private elementRef: ElementRef,
        private renderer: Renderer) {

        this.sowService.getCurrentSow().subscribe(
            s => {
                this.sow = s;
                this.documents = af.database.list('/sows/' + this.sow.$key + '/documents');
            }
        );
    }

    ngOnInit() {
        var el = this.elementRef.nativeElement.querySelector('#dropZone');
        el.addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        el.addEventListener('dragenter', (event) => {
            console.log('dragenter');
        });
        el.addEventListener('drop', (event) => {
            console.log('drop');
            event.stopPropagation();
            event.preventDefault();
            var files = event.dataTransfer.files;

            for (var i = 0, file; file = files[i]; i++) {
                this.docUploaderService.upload(file, this.sow);
            }
        });
    }

    ngAfterContentInit() {
    }

    uploadFile() {
        var file = (<HTMLInputElement>document.getElementById("upload")).files[0];
        this.docUploaderService.upload(file, this.sow);
    }

    getFileType(type) {
        return this.docUploaderService.getFileType(type);
    }


}
