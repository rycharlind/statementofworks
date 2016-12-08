export class UserProfile {
  uid: string;
  firstName: string;
  lastName: string;
  
  constructor (uid, fname, lname) {
      this.uid = uid;
      this.firstName = fname;
      this.lastName = lname;
  }
}