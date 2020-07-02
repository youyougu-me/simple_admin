import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/views/Layout'

Vue.use(VueRouter);
//默认路由
export const defaultRoutes = [
  {
    path: "/",
    redirect: "/console",
  },
  {
    path: "/console",
    name: "Console",
    redirect: "index",
    meta: {
      name: "控制台",
      icon: 'console'
    },
    component: Layout,
    children: [
      {
        path: "/index",
        name: "Index",
        meta: {
          name: "首页"
        },
        component: () => import("../views/Console/index.vue")
      }
    ]

  },
  //404页面
  {
    path: "/page404",
    name: "Page404",
    meta: {
      name: "404",
    },
    hidden: true,
    component: () => import("../views/Page404/index.vue")
  },
  //为防止报错,匹配的*号404应该放在动态路由的最后
  {
    path: "*",
    redirect: 'page404',
    hidden: true,
  }
]

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes: defaultRoutes
});

export default router;
