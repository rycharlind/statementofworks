export class Sow {
  number: number;
  description: string;
  title: string;
  startDate: Date;
  endDate: Date;
  cost: number;
  type: string;
  subType: string;
  vendor: string;
  businessOwner: string;
  fundingSource: string;
  fundingGlid: string;
  constructor(
    number, 
    description, 
    title, 
    startDate, 
    endDate, 
    cost,
    type,
    subType,
    vendor,
    businessOwner,
    fundingSource,
    fundingGlid) {
        this.number = number;
        this.description = description;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.cost = cost;
        this.type = type;
        this.subType = subType;
        this.vendor = vendor;
        this.businessOwner = businessOwner;
        this.fundingSource = fundingSource;
        this.fundingGlid = fundingGlid;
  }
}