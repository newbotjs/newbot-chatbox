<template>
  <div class="all">
    <header class="header-collapsed" v-if="title">
      <div class="header-branding">
        <img v-if="avatarUrl" :src="avatarUrl" alt="avatar" />
        <h2 class="title">
          {{ title }}
        </h2>
      </div>
      
    </header>
    <Chat>
      <template v-slot:message>
         <slot name="message"></slot>
      </template>
    </Chat>
    <footer class="footer" v-if="displayFooter">
      <div class="input-wrap">
        <InputMessage  />
      </div>
    </footer>
  </div>
</template>

<script>
import InputMessage from "./InputMessage.vue";
import Chat from "./Chat";

export default {
  props: {
    title: {
      type: String
    },
    avatar: {
      type: String
    },
    displayFooter: {
      type: Boolean,
      default: true
    }
  },
  components: {
    InputMessage,
    Chat,
  },
  computed: {
    avatarUrl() {
      return this.avatar
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../theme/scss/variables.scss";
@import "../../../theme/scss/mixins.scss";

.all {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background: #f4f6fb;
  position: relative;
}

.footer {
  position: absolute;
  bottom: 0;
  background: $color-white;
  box-sizing: border-box;
  padding: $space-small $space-slab;
  width: 100%;
  border-radius: 7px;
  @include shadow-big;
}

.header-collapsed {
  display: flex;
  justify-content: space-between;
  padding: $space-two $space-medium;
  width: 100%;
  box-sizing: border-box;
  color: $color-white;

  .header-branding {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: $font-size-large;
    font-weight: $font-weight-medium;
    color: $color-heading;
  }

  img {
    height: 24px;
    width: 24px;
    margin-right: $space-small;
  }

  .close-button {
    display: none;
  }
}

.branding {
  align-items: center;
  color: $color-body;
  display: flex;
  font-size: $font-size-default;
  justify-content: center;
  padding: $space-one;
  text-align: center;
  text-decoration: none;

  img {
    margin-right: $space-small;
    max-width: $space-two;
  }
}
</style>
