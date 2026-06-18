import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGraduationCap, faBriefcase, faCode, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import Particles from "@tsparticles/vue3"
import { loadSlim } from "@tsparticles/slim"


library.add(faGraduationCap, faBriefcase, faCode, faFolderOpen)

const app = createApp(App)
app.use(Particles, {
    init: async engine => {
        await loadSlim(engine)
    }
})
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.directive('appear', {
    mounted(el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'opacity 0.6s ease, transform 0.9s ease'

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
                observer.disconnect()
            }
        }, { threshold: 0.1 })

        observer.observe(el)
    }
})

app.mount('#app')  // ← toujours en dernier !