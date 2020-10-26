import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bulma-social/bin/bulma-social.min.css'
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy, { defaultIconPack: "fas" } )
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
