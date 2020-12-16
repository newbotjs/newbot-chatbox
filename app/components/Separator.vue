<template>
  <div class="date-separator">
    {{ displayDate }}
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['date'],
  computed: {
      displayDate() {
          const start = moment().startOf('day')
          if (start.isSame(this.date)) {
              return 'Today'
          }
          return this.date.from(start)
      }
  }
};
</script>

<style lang="scss" scoped>
@import '../../theme/scss/variables';

.date-separator {
  font-size: $font-size-default;
  color: $color-body;
  color: var(--color);
  height: 50px;
  line-height: 50px;
  position: relative;
  text-align: center;
  width: 100%;
}

.date-separator::before,
.date-separator::after {
  background-color: $color-border;
  content: '';
  height: 1px;
  position: absolute;
  top: 24px;
  width: calc((100% - 120px) / 2);
}

.date-separator::before {
  left: 0;
}

.date-separator::after {
  right: 0;
}
</style>