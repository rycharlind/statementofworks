import { Doc } from './doc';

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
  documents: Doc[];
  constructor() {
    this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
  }
}