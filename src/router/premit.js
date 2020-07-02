import router from "./index"
import store from "../store/index"
import { Message } from "element-ui";

//添加白名单
const whiteRouter = ['/login', '/register']

//路由守卫
router.beforeEach((to, from, next) => {
  if (1) {
    next()
  } else {

    if (whiteRouter.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/')
    }
  }
})
