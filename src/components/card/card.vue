<template lang="pug">

div.card
  button.card__button(
      ng-class="{'card__button--open' :vm.data.selected,'card__button--close' :!vm.data.selected }"
      ng-click="vm.onCardClick()" 
      ng-disabled="vm.data.selected"
    ) 
    i.fas.fa-code
    object(
        type="image/svg+xml" 
        data="{{vm.data.svgPath}}" 
        width="80" 
        height="80"
    )

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Card from "@/components/card/card.interface";
@Component
export default class CardComponent extends Vue {
  @Prop({ required: true, type: Object }) card!: Card;

  public onCardClick() {
    this.card.selected = !this.card.selected;
    // this.sendCards();
  }

  // public sendCards() {

  // }
}
</script>

<style scoped lang="sass">
@import "../../assets/style/mixins.sass";
@import "../../assets/style/variables.sass";
@import "../../assets/style/breakpoints.sass";
</style>
