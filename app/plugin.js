import App from './components/chatbox/MainContainer.vue'
import bus from './bus'
import Vuex from 'vuex'
import store from './store'
import '../theme/scss/newbot.scss'

const Assistant = {
    install(Vue, {
        $store
    } = {}) {
        Vue.component('Chatbox', App)
        Vue.prototype.$bus = bus
        if (!$store) {
            Vue.use(Vuex)
            Vue.prototype.$store = new Vuex.Store(store)
        }
        else {
            $store.registerModule('chatbox', store)
        }
    }
};

export default Assistant;