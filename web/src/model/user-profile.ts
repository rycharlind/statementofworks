export class UserProfile {
  uid: string;
  firstName: string;
  lastName: string;
  
  constructor (fname, lname) {
      this.firstName = fname;
      this.lastName = lname;
  }
}