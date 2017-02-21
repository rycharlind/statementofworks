import { UserProfile } from './user-profile';

export class Step {
    $key: string;
    dateCreated: Date;
    title: String;
    businessOwner: string;
    dateCompleted: Date;
    order: number;
    isComplete: boolean;
    keyContacts: Array<UserProfile>
    constructor() {
        this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
    }
}