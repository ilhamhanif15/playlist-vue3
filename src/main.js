import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/index.css'

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlus)

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(createPinia())
app.use(VuePlyr, {
    plyr: {}
})
app.use(router)

app.mount('#app')
