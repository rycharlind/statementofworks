import { User } from './user';

export class Comment {

    dateCreated: Date;
    authorUID: string;
    msg: string;
    
    constructor(){
	    this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
    }
}

