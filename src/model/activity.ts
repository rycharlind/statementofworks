export class Activity {

    dateCreated: any;
    
    constructor(
	public actor: string,
	public description: string
    ){
	this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
    }
}

