import User from '../user.entity'
import UserFactory from '../user.factory';
import UserMocks from '../__tests__/user.mocks.json';

const userFactory = UserFactory;
const userMocks = UserMocks;

describe('User Factory', () => {
  
  let firstCaseArr: User[] = [];
  userMocks.firstCase.forEach(user => {
    firstCaseArr.push(new User(user.userTries, user.userName))
  });

  let secondCaseArr: User[] = [];
  userMocks.secondCase.forEach(user => {
    secondCaseArr.push(new User(user.userTries, user.userName))
  });

  describe('[orderRanking] - Should order Ranking by name and by trie', () => {
    it('when a user list exists (first-case) ', () => {
      expect(userFactory.orderRanking(firstCaseArr)).toEqual(userMocks.firstCaseOrderedRanking);

    });
    it('when a user list exists (second-case) ', () => {
      expect(userFactory.orderRanking(secondCaseArr)).toEqual(userMocks.secondCaseOrderedRanking);
    });

  })
  describe('[orderRankingByTries] - Should order by Try', () => {
    it('when a user list exists (first-case) ', () => {
      expect(userFactory.orderRankingByTries(firstCaseArr)).toEqual(userMocks.firstCaseOrderedTries);
    });

    it('when a user list exists (second-case) ', () => {
      expect(userFactory.orderRankingByTries(secondCaseArr)).toEqual(userMocks.secondCaseOrderedTries);
    });

  })
  describe('[orderRankingByName] - Should order by Name', () => {

    it('when a user list exists (first-case) ', () => {
      expect(userFactory.orderRankingByName(firstCaseArr)).toEqual(userMocks.firstCaseOrderedName);
    });

    it('when a user list exists (second-case) ', () => {
      expect(userFactory.orderRankingByName(secondCaseArr)).toEqual(userMocks.secondCaseOrderedName);
    });
  })
})