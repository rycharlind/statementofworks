import { Doc } from './doc';
import { Comment } from './comment';
import { Activity } from './activity';
import { CompletedStep } from './completedStep';
import { Vendor } from './vendor';

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
  vendor: Vendor;
  businessOwner: string;
  fundingSource: string;
  fundingGlid: string;
  documents: Doc[];
  comments: Comment[];
  amount: number;
  activities: Activity[];
  completedSteps: Array<CompletedStep>;
  permissions: Array<String>;
  constructor() {
    this.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
  }
}
