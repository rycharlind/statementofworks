export class Comment {

    dateCreated: Date;
    date: string
    
    constructor(
	public author: string,
	public msg: string,
	sowKey: string
    ){
	this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];

	console.log('/sows/' + sowKey + '/comments')
	var dateRef  = firebase.database().ref('/sows/' + sowKey );
	dateRef.once('value', snapShot => {
	    this.date = snapShot.val().toString();
	});
    }

    setDate(){
	console.log(this.dateCreated)
	return this.dateCreated.toString();
    }
}

