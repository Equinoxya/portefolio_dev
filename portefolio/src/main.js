import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

library.add(faGraduationCap, faBriefcase)

const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')