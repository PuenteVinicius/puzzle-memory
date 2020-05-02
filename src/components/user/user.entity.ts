export default class User {
  public userTries: number;
  public userName: string;

  constructor(userTries = 0, userName = "") {
    this.userTries = userTries;
    this.userName = userName;
  }

  public saveUser(userName: string) {
    this.userName = userName;
  }

  public addTrie() {
    this.userTries = this.userTries + 1;
  }
}
