import Vue from 'vue'
import App from './App.vue'
import plugin from '../app/plugin'
import '../../chatbox-website/sdk/src/component'

Vue.config.productionTip = false

Vue.use(plugin)

new Vue({
  render: h => h(App)
}).$mount('#app')