import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGraduationCap, faBriefcase, faCode, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

library.add(faGraduationCap, faBriefcase, faCode, faFolderOpen)

const app = createApp(App)
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')