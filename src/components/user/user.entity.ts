export default class User {
  public userTries: number;
  public userName: string;

  constructor() {
    this.userTries = 0;
    this.userName = "";
  }

  public saveUser(userTries: number, userName: string) {
    this.userTries = userTries;
    this.userName = userName;
  }
}
