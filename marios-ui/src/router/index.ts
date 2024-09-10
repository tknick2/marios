import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AddPlayers from '../views/AddPlayers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/addplayers',
      name: 'addplayers',
      component: AddPlayers
    }
  ]
})

export default router
