<template>
  <div class="chat-message--input">
    <input type="text" class="form-input user-message-input" @keyup.enter="send" v-model="message">
    <div class="button-wrap">
     <!-- <chat-attachment-button
        v-if="showAttachment"
        :on-attach="onSendAttachment"
      />
      <emoji-input
        v-if="showEmojiPicker"
        v-on-clickaway="hideEmojiPicker"
        :on-click="emojiOnClick"
      />-
      <i
        class="emoji-toggle icon ion-happy-outline"
        :class="{ active: showEmojiPicker }"
        @click="toggleEmojiPicker()"
      />-->
      <SendButton @click="send" v-if="message" />
    </div>
  </div>

</template>

<script>
//import Input from "../Input.vue";
import SendButton from "./SendButton.vue";
//import Icon from "../Icon.vue";

export default {
  data() {
    return {
      message: ""
    };
  },
  components: {
   // Input,
    //Icon,
    SendButton
  },
  methods: {
    send() {
      if (this.message) {
        this.$emit("send", this.message);
        this.$store.commit("addUserMessage", this.message);
        this.message = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../theme/scss/variables.scss';

.user-message-input {
  height: $space-large;
  resize: none;
  padding-top: $space-small;
}

.chat-message--input {
  align-items: center;
  display: flex;
}

.emoji-toggle {
  font-size: $font-size-large;
  color: $color-gray;
  padding-right: $space-smaller;
  cursor: pointer;
}

.emoji-dialog {
  right: $space-one;
}

.file-uploads {
  margin-right: $space-small;
}

.button-wrap {
  display: flex;
  align-items: center;
}

.form-input {
  background: var(--input-message-background);
  color: var(--input-message-text-color);
}
</style>