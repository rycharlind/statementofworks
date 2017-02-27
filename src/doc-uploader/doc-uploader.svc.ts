import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { Sow } from '../model/sow';
import { Doc } from '../model/doc';
import { ErrorService } from '../error-service/error.svc';

@Injectable()
export class DocUploaderService {

    displayed = new Subject<boolean>();
    progress = new Subject<number>();
    file = new Subject<File>();
    uploadState = new Subject<string>();

    storageRef = firebase.storage().ref().child('no-name');
    uploadTask = this.storageRef.put(new File([], "no-name"));

    constructor(private errorService: ErrorService){}

    upload(file: File, groupKey: string, sow: Sow) {

        if (file && sow) {

            this.displayed.next(true);
            this.file.next(file);
            
            this.storageRef = firebase.storage().ref().child(file.name);
            this.uploadTask = this.storageRef.put(file);

            this.uploadTask.then(snapshot => {
                
                if (sow.documents == null) {
                    sow.documents = [];
                }

                var doc = new Doc();
                doc.name = file.name;
                doc.type = file.type;
                doc.downloadURL = snapshot.downloadURL;

                firebase.database().ref('/sows/' + groupKey + '/sows/' + sow.$key + '/documents').push(doc);

                this.uploadState.next("Upload is complete");

            });

            this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
                this.progress.next((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED:
                        this.uploadState.next('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: 
                        this.uploadState.next('Upload is running');
                        break;
                    }
            },
                (error) => { 
                    console.log(error); 
                    this.uploadState.next(error.message);
                    this.errorService.displayError(error.message);
                }
            );
        }
    }

    isDisplayed() {
        return this.displayed.asObservable();
    }

    getProgress() {
        return this.progress.asObservable();
    }

    getFile() {
        return this.file.asObservable();
    }

    getUploadState() {
        return this.uploadState.asObservable();
    }

    cancel() {
        this.uploadTask.cancel();
    }

    saveSow(groupKey: string, sow: any) {
        let key = sow.$key;
        if (key) {
            delete sow.$key;
            delete sow.$exists;
            firebase.database().ref('/sows/' + groupKey + '/sows/' + key).update(sow);
            sow.$key = key;
        }
    }

    public getFileType(type) {
        switch (type) {
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

        }
    }

}