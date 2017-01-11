export class Sow {
  $key: string;
  dateCreated: Date;
  number: string;
  description: string;
  title: string;
  step:string;
  startDate: Date;
  endDate: Date;
  cost: number;
  type: string;
  subType: string;
  vendor: string;
  businessOwner: string;
  fundingSource: string;
  fundingGlid: string;
  constructor() {
    this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
  }
}