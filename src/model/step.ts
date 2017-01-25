export class Step {
    dateCreated: Date;
    title: String;
    businessOwner: string;
    dateCompleted: Date;
    order: number;
    constructor() {
        this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
    }
}