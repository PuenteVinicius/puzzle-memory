import User from "./user.entity";
export default class UserFactory {
  public static orderRanking(rankingList: User[]) {
    rankingList = this.orderRankingByName(rankingList);
    rankingList = this.orderRankingByTries(rankingList);
    return rankingList;
  }

  public static orderRankingByTries(rankingList: User[]) {
    rankingList.sort((a, b) => {
      if (a.userTries > b.userTries) return 1;
      else if (a.userTries < b.userTries) return -1;

      return 0;
    });
    return rankingList;
  }

  public static orderRankingByName(rankingList: User[]) {
    rankingList.sort((a, b) => {
      if (a.userName > b.userName) return 1;
      else if (a.userName < b.userName) return -1;

      return 0;
    });
    return rankingList;
  }
}
