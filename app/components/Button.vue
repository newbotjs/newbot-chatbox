<template>
  <button nbButton :class="classes" v-on="$listeners"><slot></slot></button>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "medium",
    },
    shape: {
      type: String,
      default: "rectangle",
    },
    appearance: {
      type: String,
      default: "filled",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    halfWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        [`status-${this.status}`]: true,
        [`size-${this.size}`]: true,
        [`shape-${this.shape}`]: true,
        [`appearance-${this.appearance}`]: true,
        "full-width": this.fullWidth,
        "half-width": this.halfWidth,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../theme/scss/variables.scss";
@import "../../theme/scss/mixins.scss";

button {
  &.appearance-filled {
    &.status-basic {
      background-color: rgba($color-global, 0.08);
      border-color: rgba($color-global, 0.08);
      color: #222b45;
      transition: all 0.8s;
      &:hover {
          background-color: rgba($color-global, 0.2);
          transform: scale(1.1);
      }
    }
    &.size-medium {
        padding: 10px;
        margin-top: 2px;
    }
    border-style: solid;
    border-width: 0.0625rem;
  }

  &.appearance-outline {
    border-style: solid;
    border-width: 0.0625rem;
    &.size-small {
      padding: 10px 15px;
    }

    &.status-primary {
      background-color: rgba(51, 102, 255, 0.08);
      border-color: $color-newbot;
      color: $color-newbot;

      &:hover {
        background-color: rgba(51, 102, 255, 0.18);
      }
    }
  }

  &.shape-rectangle {
    border-radius: 0.25rem;
  }

  &.shape-round {
    border-radius: 1rem;
  }

  &.size-medium {
    font-size: 15px;
    line-height: 1rem;
  }

  &.size-small {
    font-size: 13px;
    line-height: 1rem;
  }

  &.full-width {
    width: 100%;
  }

   &.half-width {
    width: 300px;
    display: block;
  }

  text-overflow: ellipsis;

  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;

  cursor: pointer;
  appearance: none;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
}
</style>
