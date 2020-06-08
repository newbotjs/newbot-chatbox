<template>
  <div class="nb-chat-buttons">
    <div>
      <Button
        v-for="(btn, index) in data.buttons"
        :key="index"
        status="basic"
        :halfWidth="true"
        @click="click(btn)"
      >{{btn.title}}</Button>
    </div>
  </div>
</template>

<script>
import Button from "../Button";
import mixinButton from './mixins/mixinButton'

export default {
  props: ["data"],
  mixins: [mixinButton],
  components: {
    Button
  }
};
</script>

<style>
.nb-chat-buttons {
  margin: 10px 0;
  display: flex;
  justify-content: center;
}
</style>