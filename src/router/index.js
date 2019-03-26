import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/monitoring',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Monitoring',
        component: () => import('@/views/monitoring/index'),
        meta: { title: '实时监控', icon: 'form' }
      }
    ]
  },

  {
    path: '/monitoring_face',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '人脸检测', icon: 'example' },
    children: [
      {
        path: 'age',
        name: 'age',
        component: () => import('@/views/monitoring_age/index'),
        meta: { title: '年龄检测', icon: 'table' }
      },
      {
        path: 'gender',
        name: 'gender',
        component: () => import('@/views/monitoring_gender/index'),
        meta: { title: '性别检测', icon: 'tree' }
      },
      {
        path: 'emotion',
        name: 'emotion',
        component: () => import('@/views/monitoring_emotion/index'),
        meta: { title: '情绪检测', icon: 'tree' }
      }
    ]
  },

  {
    path: '/body',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/monitoring_body/index'),
        meta: { title: '人体追踪', icon: 'form' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '报警设置', icon: 'form' }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/data/index'),
        meta: { title: '数据统计', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
