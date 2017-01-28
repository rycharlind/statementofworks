export class Step {
    $key: string;
    dateCreated: Date;
    title: String;
    businessOwner: string;
    dateCompleted: Date;
    order: number;
    isComplete: boolean;
    constructor() {
        this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
    }
}