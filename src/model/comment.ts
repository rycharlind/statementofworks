export class Comment {

    dateCreated: any;
    date: string;
    
    constructor(
	public author: string,
	public msg: string
    ){
	this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
    }
    
    setDate(){
    	console.log('rite b4 date')
    	console.log(this.dateCreated);
    	this.date =  new Date(this.dateCreated).getMonth().toString();
    }
    
}

