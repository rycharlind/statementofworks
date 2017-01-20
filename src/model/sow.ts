import { Doc } from './doc';
import { Comment } from './comment';
import { Activity } from './activity';

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
  comments: Comment[];
  activities: Activity[];
  constructor() {
    this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
  }
}
