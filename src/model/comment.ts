export class Comment {

    dateCreated: any;
    
    constructor(
	public author: string,
	public msg: string
    ){
	this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
    }
}

