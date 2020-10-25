<template>
  <div class="hello">
    ChatHistory
    <div v-for="each_message in messages" :key="each_message.id">
      <ChatMessage :message="each_message" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ChatMessage from "@/components/ChatMessage.vue";
// @ts-ignore
import { Message } from "@/models/Message.ts";

@Component({
  components: {
    ChatMessage,
  },
})
export default class ChatHistory extends Vue {
  @Prop() private messages!: Message[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  background-color: peachpuff;
}
</style>
