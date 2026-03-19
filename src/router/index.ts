import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Room from '../pages/Room.vue'
import Menu from '../pages/Menu.vue'
import Takeout from '../pages/Takeout.vue'
import About from '../pages/About.vue'
import Access from '../pages/Access.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/room', name: 'Room', component: Room },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/takeout', name: 'Takeout', component: Takeout },
  { path: '/about', name: 'About', component: About },
  { path: '/access', name: 'Access', component: Access },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router