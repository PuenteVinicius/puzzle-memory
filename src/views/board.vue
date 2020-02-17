<template lang="pug">
section.board
  div
    card( 
      *NgFor="item in cards" 
      data="item" 
    ) 
  tries(
    ng-if="vm.gameStarted" 
    tries="vm.user.userTries"
  )
  ranking
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/card/card.interface";
import User from "@/components/user/user.entity";
import { Constants } from "@/constants";
import CardsFactory from "@/components/card/card.factory";
import CardsService from "@/components/card/card.service";
import { AxiosResponse } from "axios";

@Component
export default class Board extends Vue {
  private selectedCards: Card[] = [];
  private cards: Card[] = [];
  private gameStarted = false;
  private user: User = new User();

  public updateBoard(selectedCard: Card): void {
    this.selectedCards = CardsFactory.fillSelectedCards(
      this.selectedCards,
      selectedCard
    );

    if (this.selectedCards.length === Constants.CARDS_PEER_TRIE)
      this.makeAtrie();

    if (CardsFactory.isWinner(this.cards)) this.endGame();
  }

  public makeAtrie(): void {
    this.user.userTries++;
    this.cards = CardsFactory.updateCards(this.selectedCards, this.cards);
    this.selectedCards = [];
  }

  public endGame(): void {
    this.saveUser(this.user);
    this.startGame();
  }

  public saveUser(user: User): void {
    this.user.saveUser(user.userTries, user.userName);
  }

  public startGame(): void {
    CardsService.getAllCards().then((response: AxiosResponse<Card[]>) => {
      this.cards = CardsFactory.randomizeCards(response.data);
      this.gameStarted = false;
      this.user = new User();
    });
  }
}
</script>

<style scoped lang="sass">
@import "../assets/style/mixins.sass";
@import "../assets/style/variables.sass";
@import "../assets/style/breakpoints.sass";

.board
  width: 100%
  max-width: 900px
  height: min-content
  margin-bottom: 50px
  margin-top: 20px
  flex-wrap: wrap
  @include flex(wrap)

  @include desktop
    max-width: 700px
    margin-bottom: unset
    margin-top: unset
</style>
