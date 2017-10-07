/**
 * User model
 * Including user's id and name
 */
export class User {
  id: number;
  name: string;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
    }
  }
}
