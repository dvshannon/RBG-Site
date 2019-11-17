import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import Shop from '@/pages/Shop.vue'
import Teams from '@/pages/Teams.vue'
import Events from '@/pages/Events.vue'
import Photos from '@/pages/Photos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    }
  ]
})
