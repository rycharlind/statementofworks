import { User } from './User';

export class CompletedStep {
    dateCreated: Date;
    $key: string;
    ref: string;
    ownerRef: string;
    constructor() {
        this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
    }
}