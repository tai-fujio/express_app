<template>
  <div>
    {{ message.message }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// @ts-ignore
import { Message } from "@/models/Message.ts";

@Component
export default class ChatMessage extends Vue {
  @Prop() private message!: Message;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  background-color: pink;
}
</style>
