import { Component, OnInit, Input } from '@angular/core';
import { SowsService } from '../sows.svc';
import { Sow } from '../../model/sow';
import { Doc } from '../../model/doc';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'sow-docs',
    templateUrl: 'sow-docs.html'
})

export class SowDocsComponent implements OnInit {
    sow = new Sow();
    progress: any;

    constructor(private sowsService: SowsService, af: AngularFire) {
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
        var storageRef = firebase.storage().ref().child(file.name);
        var uploadTask = storageRef.put(file);
        uploadTask.then(snapshot => {
            if (this.sow.documents == null) {
                this.sow.documents = [];
            }

            var doc = new Doc()
            doc.name = file.name;
            doc.type = this.deriveFileType(file);
            doc.downloadURL = snapshot.downloadURL;

            this.sow.documents.push(doc);
            this.saveSow(this.sow);
            console.log(snapshot.downloadURL);

        });

        uploadTask.on('state_changed', snapshot => {
            this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
            function (error) { console.log(error); }
        );
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

    deriveFileType(file: File) {
        switch (file.type) {
            case "application/pdf":
                return "pdf";
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                return "excel"
        }
    }

}
