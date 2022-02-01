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
    {
      path: '/companies/:companyId',
      name: 'Company',
      component: () => import('@/components/Company/Company.vue')
    },
    {
      path: '/companies/:companyId/edit',
      name: 'EditCompany',
      component: () => import('@/components/Company/EditCompany.vue')
    },
    {
      path: '/companies/:companyId/nuevo_valor',
      name: 'AddValue',
      component: () => import('@/components/Company/AddValue.vue')
    },
    {
      path: '/companies/:companyId/delete',
      name: 'DeleteCompany',
      component: () => import('@/components/Company/DeleteCompany.vue')
    },
  ],
  mode: 'history',
})
