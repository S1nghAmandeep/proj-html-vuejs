import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faBagShopping, faMagnifyingGlass);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
