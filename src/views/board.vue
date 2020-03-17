<template lang="pug">
  section.board
    h1.board__game-title Jogo da 
      span Memória
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
import swal from "sweetalert";

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
    this.user.addTrie();
    this.cards = CardsFactory.updateCards(this.selectedCards, this.cards);
    this.selectedCards = [];
  }

  private endGame(): void {
    this.cards = CardsFactory.closeCards(this.cards);
    swal("Click on either the button or outside the modal.").then(() => {
      this.saveUser();
      this.user = new User();
      this.$router.push("/");
    });
  }

  private saveUser(): void {
    this.rankingList.push(this.user);
    this.rankingList = UserFactory.orderRanking(this.rankingList);
    localStorage.setItem("rankingList", JSON.stringify(this.rankingList));
  }

  private startGame(): void {
    this.setRankingList();
    this.user.saveUser(this.$router.currentRoute.params.userName);
    this.setCards();
  }

  private setCards(): void {
    CardsService.getAllCards().then((response: AxiosResponse<Card[]>) => {
      this.cards = CardsFactory.randomizeCards(response.data);
      this.showCards();
    });
  }

  private showCards(): void {
    this.cards = CardsFactory.showCards(this.cards);
    setTimeout(() => {
      this.cards = CardsFactory.closeCards(this.cards);
    }, 4000);
  }

  private setRankingList() {
    const rankingList = localStorage.getItem("rankingList");
    if (rankingList) {
      this.rankingList = JSON.parse(rankingList);
    }
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
  &__game-title
    position: absolute
    display: block
    width: auto
    top: 50px
    text-transform: uppercase
    font-size: 4rem
    text-align: center
    span
      color: $dark-purple

  @include desktop
    max-width: 700px
    margin-bottom: unset
    margin-top: unset
</style>
