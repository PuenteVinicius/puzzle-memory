<template lang="pug">
section.board
  div(v-for="card in cards")
    card-component(:card="card" @cardSelected="updateBoard")
  tries-component(
    :tries="user.userTries"
  )
  ranking-component(
    :rankingList="rankingList"
  )
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Constants } from "@/constants";
import { AxiosResponse } from "axios";
import Card from "@/components/card/card.interface";
import User from "@/components/user/user.entity";
import CardsFactory from "@/components/card/card.factory";
import CardsService from "@/components/card/card.service";
import UserFactory from "@/components/user/user.factory";
import CardComponent from "../components/card/card.vue";
import TriesComponent from "../components/tries.vue";
import RankingComponent from "../components/ranking.vue";

@Component({ components: { CardComponent, TriesComponent, RankingComponent } })
export default class Board extends Vue {
  private selectedCards: Card[] = [];
  private cards: Card[] = [];
  private user: User = new User();
  private rankingList: User[] = [];

  created() {
    this.startGame();
  }

  private updateBoard(selectedCard: Card): void {
    this.selectedCards = CardsFactory.fillSelectedCards(
      this.selectedCards,
      selectedCard
    );

    if (this.selectedCards.length === Constants.CARDS_PEER_TRIE) {
      this.makeAtrie();
    }

    if (CardsFactory.isWinner(this.cards)) {
      this.endGame();
    }
  }

  private makeAtrie(): void {
    this.user.userTries++;
    this.cards = CardsFactory.updateCards(this.selectedCards, this.cards);
    this.selectedCards = [];
  }

  private endGame(): void {
    this.cards = CardsFactory.closeCards(this.cards);
    setTimeout(() => {
      this.saveUser(this.user);
      this.startGame();
    }, 1000);
  }

  private saveUser(user: User): void {
    this.user.saveUser(user.userTries, user.userName);
    this.rankingList.push(this.user);
    this.rankingList = UserFactory.orderRanking(this.rankingList);
  }

  private startGame(): void {
    this.setCards();
  }

  private setCards(): void {
    CardsService.getAllCards().then((response: AxiosResponse<Card[]>) => {
      this.cards = CardsFactory.randomizeCards(response.data);
      this.user = new User();
      this.showCards();
    });
  }

  private showCards(): void {
    this.cards = CardsFactory.showCards(this.cards);
    setTimeout(() => {
      this.cards = CardsFactory.closeCards(this.cards);
    }, 4000);
  }
}
</script>

<style scoped lang="sass">
@import "../assets/style/main.sass"

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
