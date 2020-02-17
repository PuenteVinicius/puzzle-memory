<template lang="pug">

div.tries
  h3.tries__title Tentativas
  span.tries__text {{tries}}

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import User from "./user/user.entity";
@Component
export default class TriesComponent extends Vue {
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
@import "../../assets/style/mixins.sass";
@import "../../assets/style/variables.sass";
@import "../../assets/style/breakpoints.sass";
.tries
  position: relative
  width: 100vw
  height: $tries-height
  top: 0
  left: 0
  border: 1px solid $border-color
  background: $white
  font-size: 3.5rem
  color: $blue
  font-weight: 600
  text-align: center
  border-radius: 0
  @include flex(column)

  @include desktop
    position: absolute
    max-width: $tries-desk-size
    height: $tries-desk-size
    border-radius: 6px
    font-size: 1.4rem
</style>
