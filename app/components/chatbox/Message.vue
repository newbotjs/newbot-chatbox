<template>
  <transition name="fade">
    <div>
      <div class="chat-bubble" :class="{ agent: !isUser, user: isUser }">
        {{ text }}
      </div>
      <p class="agent-name" v-if="!isUser && agent">
        {{ agent.name }}
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["sender", "date", "text", "isUser", "agent"],
};
</script>

<style lang="scss">
@import "../../../theme/scss/variables.scss";
@import "../../../theme/scss/mixins.scss";

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.chat-bubble {
  &.agent {
    background: $color-white;
    border-bottom-left-radius: $space-smaller;
    color: $color-body;

    .link {
      word-break: break-word;
      color: $color-newbot;
    }
  }
}

.chat-bubble {
  @include light-shadow;
  background: $color-newbot;
  border-radius: $space-two;
  color: $color-white;
  display: inline-block;
  font-size: $font-size-default;
  line-height: 1.5;
  padding: $space-slab $space-normal $space-slab $space-normal;
  text-align: left;

  > a {
    color: $color-primary;
    word-break: break-all;
  }

  &.user {
    border-bottom-right-radius: $space-smaller;

    > a {
      color: $color-white;
    }
  }
}
</style>
