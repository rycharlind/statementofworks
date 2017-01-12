import { Component, OnInit, Input } from '@angular/core';
import { SowsService } from '../sows.svc';
import { Sow } from '../../model/sow';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'sow-docs',
    templateUrl: 'sow-docs.html'
})

export class SowDocsComponent implements OnInit {

    sow = new Sow();

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
        storageRef.put(file).then(function (snapshot) {
            console.log(snapshot.downloadURL);
        });
    }

    addURLToSow(url: string, sow: any) {
        let key = sow.$key;
        if (key) {
            delete sow.$key;
            delete sow.$exists;
            sow.docs.push(url);
            firebase.database().ref('/sows/' + key).update(sow);
            sow.$key = key;
        }
    }

}
