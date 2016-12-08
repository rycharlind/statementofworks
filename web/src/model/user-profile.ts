export class UserProfile {
  uid: string;
  firstName: string;
  lastName: string;
  constructor (id, fname, lname) {
      this.uid = id;
      this.firstName = fname;
      this.lastName = lname;
  }
}