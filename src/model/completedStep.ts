export class CompletedStep {
    dateCreated: Date;
    $key: string;
    ref: string;
    constructor() {
        this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
    }
}