import Vue from 'vue'
import VueRouter from 'vue-router'
import baseball from '../baseball/numberBaseball.vue'
import speedGame from '../speed/responseCheck.vue'
import gameMetcher from './gameMetcher'
Vue.use(VueRouter)

export default new VueRouter({
  // mode : 'history',
  routes: [
    {path : '/base-ball', component : baseball},
    {path : '/speed', component : speedGame},
    {path : '/game/:name', component : gameMetcher},
  ]
})