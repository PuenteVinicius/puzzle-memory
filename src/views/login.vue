<template lang="pug">
  main.login
    section.login_wrapper
      h1.game-title Puzzle 
        span Memory
      form.login-form
        label.login-form__label Type your name to begin:
          span *max 15 caracteres
        input.login-form__input(v-model="user.userName")
        a.login-form__button(@click="submitUser" v-if="user.userName") Start
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/card/card.interface";
import User from "@/components/user/user.entity";

@Component
export default class Login extends Vue {
  public selectedCards: Card[] = [];
  public cards: Card[] = [];
  public gameStarted = false;
  public user: User = new User();

  constructor() {
    super();
  }

  public submitUser(): void {
    const params: User = this.user;
    this.$router.push({
      name: "Board",
      path: "/board/",
      params: {
        userName: params.userName
      }
    });
  }
}
</script>

<style scoped lang="sass">
@import "../assets/style/mixins.sass";
@import "../assets/style/variables.sass";
@import "../assets/style/breakpoints.sass";

.login
  width: 100%
  min-height: 100vh
  @include flex(column)
  @include desktop
    height: 100vh

  .login-wrapper
    width: 100%
    height: 100vh
    @include flex(column)

  .game-title
    position: relative
    display: block
    width: auto
    bottom: 0
    text-transform: uppercase
    font-size: 4rem
    text-align: center

    span
      color: $dark-purple

    @include tablet
      font-size: 3.5rem

    @include desktop
      bottom: 20px
      font-size: 3rem

  .login-form
    width: auto

    &__label
      font-size: 2.5rem

      span
        color: $dark-grey

      @include desktop
        font-size: 1rem

    &__input
      width: 100%
      height: $input-height
      padding: 0 0 0 15px
      margin-top: 8px
      margin-bottom: 15px
      border: none
      background: $white
      font-weight: 600
      color: $blue
      -webkit-appearance: none
      font-size: 2.5rem

      @include desktop
        height: $input-height-desk
        font-size: 1rem

    &__button
      color: $white
      background-color: $light-blue
      border-color: lighten($light-blue, $amount: 0.8)
      padding: .8rem 1.5rem
      line-height: 1.33
      border-radius: 6px
      font-size: 2.5rem

      &:hover
        transition: .2s all
        background-color: $blue
        cursor: pointer

      @include desktop
        padding: 8px 25px
        line-height: 1.33
        border-radius: 6px
        font-size: 1rem
</style>
