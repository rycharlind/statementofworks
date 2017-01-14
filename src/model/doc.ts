export class Doc {
  dateCreated: Date;
  name: string;
  type: string;
  downloadURL: string;
  constructor() {
    this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
  }
}