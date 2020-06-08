<template>
  <button
    type="submit"
    :disabled="disabled"
    class="send-button"
    v-on="$listeners"
  >
    <IconSend v-if="!loading" w="20px" h="20px" />
    
  </button>
</template>

<script>
import IconSend from 'vue-ionicons/dist/md-send.vue'

export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    color: {
      type: String,
      default: "#6e6f73",
    },
  },
  components: {
    IconSend
  }
};
</script>

<style scoped lang="scss">
@import "../../../theme/scss/variables.scss";

.send-button {
  background: transparent;
  border: 0;
  cursor: pointer;
  position: relative;
  padding-right: $space-smaller;

  .icon-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $font-size-big;
    font-weight: $font-weight-medium;
  }
}
</style>
