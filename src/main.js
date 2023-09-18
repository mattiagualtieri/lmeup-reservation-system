import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import HomeView from './views/HomeView.vue'
import PhotosView from './views/PhotosView.vue'
import QuestionsView from './views/QuestionsView.vue'
import ContactsView from './views/ContactsView.vue'
import AboutView from './views/AboutView.vue'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* Specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faXmark, faInstagram)

/* Routes */
const routes = [
    { path: '/', component: HomeView },
    { path: '/photos', component: PhotosView },
    { path: '/FAQs', component: QuestionsView },
    { path: '/contacts', component: ContactsView },
    { path: '/about', component: AboutView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
