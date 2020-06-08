<template>
  <div class="agent-message-wrap">
    <div class="agent-message">
      <div class="avatar-wrap"></div>
      <div class="message-wrap">
        <div class="typing-bubble chat-bubble agent">
          <img
            src="../../../public/images/typing.gif"
            alt="Agent is typing a message"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
@import '../../../theme/scss/variables.scss';

.typing-bubble {
  max-width: $space-medium;
  padding: $space-smaller $space-small;
  border-bottom-left-radius: $space-two;
  border-top-left-radius: $space-small;

  img {
    width: 100%;
  }
}
</style>
