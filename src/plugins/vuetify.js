import 'vuetify/dist/vuetify.min.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import Vuetify from 'vuetify'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library as fontAwesomeIconLibrary } from '@fortawesome/fontawesome-svg-core'

Vue.component('font-awesome-icon', FontAwesomeIcon)
fontAwesomeIconLibrary.add(fas)
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    component: FontAwesomeIcon,
    iconfont: 'faSvg',
  },
  theme: {
    dark: localStorage.getItem('theme') === 'dark',
  },
})
