<template>
  <div class="home">
    <ChatHistory v-bind:messages="messages" />
    <ChatInputForm @send="send" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import ChatHistory from "@/components/ChatHistory.vue";
import ChatInputForm from "@/components/ChatInputForm.vue";
// @ts-ignore
import { Message } from "@/models/Message.ts";

@Component({
  components: {
    ChatHistory,
    ChatInputForm,
  },
})
export default class Chat extends Vue {
  public messages: Message[] = [];
  public static index: number = 0;
  public mounted() {
    this.messages.push(new Message(0, "テスト用初回メッセージ"));
  }
  public send(input: string) {
    const id = ++Chat.index;
    const msg = new Message(id, input);
    this.messages.push(msg);
  }
}
</script>
