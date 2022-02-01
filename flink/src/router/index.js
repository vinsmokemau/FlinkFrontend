import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListCompanies',
      component: () => import('@/components/Company/ListCompanies.vue')
    },
    {
      path: '/companies/create',
      name: 'CreateCompany',
      component: () => import('@/components/Company/CreateCompany.vue')
    },
  ],
  mode: 'history',
})
