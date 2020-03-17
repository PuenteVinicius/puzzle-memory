export default class User {
  public userTries: number;
  public userName: string;

  constructor() {
    this.userTries = 0;
    this.userName = "";
  }

  public saveUser(userName: string) {
    this.userName = userName;
  }

  public addTrie() {
    this.userTries = this.userTries + 1;
  }
}
