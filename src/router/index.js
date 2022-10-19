import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/Sobre.vue')
  },
  {
    path: '/apuracao/turno/1',
    name: 'apuracao1',
    component: () => import ('../views/PrimeiroTurno.vue')
  },
  {
    path: '/apuracao/turno/2',
    name: 'apuracao2',
    component: () => import ('../views/SegundoTurno.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
