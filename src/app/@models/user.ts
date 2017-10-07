/**
 * User model
 * Including user's id and name
 */
export class User {
  id: number;
  fullname: string;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.fullname = data.fullname;
    }
  }
}
