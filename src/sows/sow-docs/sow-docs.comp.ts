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
<<<<<<< HEAD
        this.docUploaderService.upload(file, this.sow);
    }

    saveSow(sow: any) {
        let key = sow.$key;
        if (key) {
            delete sow.$key;
            delete sow.$exists;
            firebase.database().ref('/sows/' + key).update(sow);
            sow.$key = key;
=======
        console.log(file.type);
        var storageRef = firebase.storage().ref().child(file.name);
        var uploadTask = storageRef.put(file);
        uploadTask.then(snapshot => {
            if (this.sow.documents == null) {
                this.sow.documents = [];
            }

            var doc = new Doc();
            doc.name = file.name;
            doc.type = this.getFileType(file);
            doc.downloadURL = snapshot.downloadURL;

            console.log(doc);

            this.sow.documents.push(doc);
            this.sowsService.saveSow(this.sow);
            console.log(snapshot.downloadURL);

        });

        uploadTask.on('state_changed', snapshot => {
            this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
            function (error) { console.log(error); }
        );
    }

    getFileType(file: File) {
        switch (file.type) {
            case "application/pdf":
                return "pdf";
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                return "excel"
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                return "word"
            case "image/png" || "image/jpg" || "image/jpeg":
                return "image"
            default:
                return "other"

>>>>>>> 3d2eb768c9c452a61c18876faf70131644c88a72
        }
    }

}
