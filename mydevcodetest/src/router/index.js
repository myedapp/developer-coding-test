import Vue from 'vue'
import Router from 'vue-router'
import UserQuests from '@/components/userQuests'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserQuests',
      component: UserQuests
    }
  ]
})
