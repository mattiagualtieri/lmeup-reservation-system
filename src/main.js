import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import HomeView from './views/HomeView.vue'
import EventsView from './views/EventsView.vue'
import QuestionsView from './views/QuestionsView.vue'
import MerchView from './views/MerchView.vue'
import AboutView from './views/AboutView.vue'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* Specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faXmark, faInstagram, faWhatsapp)

/* Routes */
const routes = [
    { path: '/', component: HomeView },
    { path: '/events', component: EventsView },
    { path: '/about', component: AboutView },
    { path: '/FAQs', component: QuestionsView },
    { path: '/merch', component: MerchView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
    
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
