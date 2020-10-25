<template>
  <div class="hello">
    <textarea v-model="input" id="" cols="30" rows="10"></textarea>
    <br />
    <button @click="onClickSend">送信</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class ChatInputForm extends Vue {
  public input: string = "";
  @Emit() public send(input: string) {}
  public onClickSend() {
    this.send(this.input);
    this.input = "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  background-color: paleturquoise;
}
</style>
