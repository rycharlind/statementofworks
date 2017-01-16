import { Component, OnInit, Input } from '@angular/core';
import { Sow } from '../model/sow';
import { Doc } from '../model/doc';
import { AngularFire } from 'angularfire2';
import { DocUploaderService } from './doc-uploader.svc';

@Component({
    selector: 'doc-uploader',
    templateUrl: 'doc-uploader.html'
})

export class DocUploaderComponent implements OnInit {

    isDisplayed: boolean;
    progress: number;
    file: File = new File([], "_new");
    uploadState: string;

    constructor(private docUploaderService: DocUploaderService) {
        
        this.docUploaderService.isDisplayed().subscribe(
            b => {
                this.isDisplayed = b;
            }
        );
        

        this.docUploaderService.getProgress().subscribe(
            p => {
                this.progress = p;
            }
        );

        this.docUploaderService.getFile().subscribe(
            f => {
                this.file = f;
            }
        );

        this.docUploaderService.getUploadState().subscribe(
            s => {
                this.uploadState = s;
            }
        );

    }

    ngOnInit() {
    }

    close() {
        console.log("close");
        this.isDisplayed = false;
    }

    cancel() {
        console.log("cancel");
        this.docUploaderService.cancel();
    }

    getFileType(file: File) {
        return this.docUploaderService.getFileType(file);
    }

}