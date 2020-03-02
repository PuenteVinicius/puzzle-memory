<template lang="pug">

div.ranking
  h3.ranking__title Ranking
  div.ranking__list
    div.ranking__list-item
        span Nome 
        span Tentativas
    ul.ranking__list
        li.ranking__list-item(v-for="user in rankingList") 
        span {{ user.userName }}
            b {{ user.userTries }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import User from "./user/user.entity";
@Component
export default class RankingComponent extends Vue {
  private rankingList!: User[];

  onInsertNewUser(user: User) {
    this.rankingList.push(user);
    this.rankingList = this.orderRanking(this.rankingList);
  }

  orderRanking(rankingList: User[]) {
    rankingList = this.orderRankingByName(this.rankingList);
    rankingList = this.orderRankingByTries(this.rankingList);
    return rankingList;
  }

  orderRankingByTries(rankingList: User[]) {
    rankingList.sort((a, b) => {
      if (a.userTries > b.userTries) return 1;
      else if (a.userTries < b.userTries) return -1;

      return 0;
    });
    return rankingList;
  }

  orderRankingByName(rankingList: User[]) {
    rankingList.sort((a, b) => {
      if (a.userName < b.userName) return 1;
      else if (a.userName > b.userName) return -1;

      return 0;
    });
    return rankingList;
  }
}
</script>

<style scoped lang="sass">
@import "../assets/style/main.sass"

.ranking
  display: block
  width: 100vw
  height: $ranking-height
  margin-top: 5px
  border-radius: 0
  border: 1px solid $border-color
  background: $white
  color: $dark-green
  text-align: center
  overflow-y: auto

  +desktop()
    position: absolute
    width: 100%
    max-width: $ranking-width
    max-height: $ranking-desk-height
    right: 0
    bottom: 0
    min-height: 80px
    border-radius: 6px

  &__title
    font-size: 3rem
    margin-top: 50px

    +desktop()
      font-size: 1.2rem
      margin: 10px 0 10px 0

  &__list-item
    display: flex
    justify-content: space-between
    width: 90%

  &__list
    +flex(column)
    justify-content: space-around

    li
      padding: .5rem 0 .5rem 0
      border-top: 1px solid $border-color
      &:first-child
        font-weight: bold

    &:last-child
      border-bottom: 1px solid $border-color

    span
      font-size: 3.1rem
      +desktop()
        font-size: 1.1rem

    b
      font-size: 3.2rem
      +desktop()
        font-size: 1.2rem

      color: $bold-text-color
</style>
