import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Cards from '@/components/cards'
import Card from '@/components/card'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'Hello',
      component: Hello
    }, */
    {
      path: '/',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/topics/:id',
      name: 'Card',
      component: Card
    }

  ]
})
