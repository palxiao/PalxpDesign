import { RouteRecordRaw } from 'vue-router';

/*
 * @Author: ShawnPhang
 * @Date: 2021-08-19 18:43:22
 * @Description: 前端路由
 * @LastEditors: ShawnPhang <https://m.palxp.cn>
 * @LastEditTime: 2023-09-19 17:32:04
 */
export default [
  // {
  //   path: '/',
  //   name: 'main',
  //   redirect: 'home',
  //   component: () => import('@/views/Ready.vue'),
  //   children: [
  //     {
  //       name: 'Home',
  //       path: '/home',
  //       component: () => import(/* webpackChunkName: 'base' */ '@/views/Index.vue'),
  //     },
  //   ],
  // },
  {
    // 预留主页
    path: '/',
    name: 'main',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'base' */ '@/views/Index.vue'),
  },
  {
    path: '/draw',
    name: 'Draw',
    component: () => import(/* webpackChunkName: 'draw' */ '@/views/Draw.vue'),
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import(/* webpackChunkName: 'preview' */ '@/views/Preview.vue'),
  },
  {
    path: '/psd',
    name: 'Psd',
    component: () => import(/* webpackChunkName: 'psd' */ '@/views/Psd.vue'),
  },
  {
    path: '/h5',
    name: 'H5',
    component: () => import(/* webpackChunkName: 'H5' */ '@/h5/index.vue'),
  },
] as RouteRecordRaw[]
