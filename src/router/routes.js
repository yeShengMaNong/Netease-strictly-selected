
// const Home = () => import('../pages/Home/Home.vue')
// const Classify = () => import('../pages/Classify/Classify.vue')
// const Personal = () => import('../pages/Personal/Personal.vue')
// const Shoop = () => import('../pages/Shoop/Shoop.vue')
// const ShoopCar = () => import('../pages/ShoopCar/ShoopCar.vue')

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shoop from '../pages/Shoop/Shoop.vue'
import ShoopCar from '../pages/ShoopCar/ShoopCar.vue'
import Search from '../components/Search/Search.vue'
export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/shoop',
    component:Shoop
  },
  {
    path:'/shoopcar',
    component:ShoopCar
  },
  {
    path:'/',
    component:Home
  },
  {
    path:'/search',
    component:Search
  }
]