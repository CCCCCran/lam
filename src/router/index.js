import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//引入store
import store from '@/store'
import Trade from '@/store/Trade'

// 使用插件
Vue.use(VueRouter)
// 先把vuerouter对象的push方法，保存一份
let originPush = VueRouter.prototype.push
// 重写vuerouter对象里面的push/replace方法
// 第一个参数：location 告诉原来的push方法你往哪个地址跳转
// 第二个参数：是成功的回调
// 第三个参数：是失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call 与 apply区别
    // 相同点:都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call与apply传递参数:call传递参数用逗号分开，apply方法执行，传递数组
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    // call 与 apply区别
    // 相同点:都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call与apply传递参数:call传递参数用逗号分开，apply方法执行，传递数组
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

// 配置路由
let router = new VueRouter({
  routes,
  //  进入路由页面直接置顶
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  },
})

// 全局守卫：前置守卫（在路由跳转之前进行判断）
router.beforeEach(async (to, from, next) => {
  // to是可以获取到你要跳转到的那个路由信息
  // from可以获取到你从哪个路由来的信息
  // next是放行 next(path) ：指定路径放行
  next()
  // 用户登录了才会有token,未登录就不会有
  let token = store.state.user.token
  // 因为判断属性才会给布尔值，如果判断对象无法给出布尔值
  let name = store.state.user.userInfo.name
  if (token) {
    // 如果用户登录了，禁止再次进入登陆页面
    // 已经登录
    if (to.path == '/login') {
      next('/home')
    } else {
      // 已登录，除去login以外的页面
      // 如果用户信息还存在
      if (name) {
        next
      } else {
        try {
          // 用户信息没了，派发actions让仓库再存储用户信息在跳转
          await store.dispatch('getUserInfo')
          // 获取用户信息成功
          next()
        } catch (error) {
          // token失效了，获取不到用户信息，使其重新登陆
          // 清除token 重新派发actions
          await store.dispatch('userLogout')
          // 使其重新登录，去往login页面
          next('/login')
        }
      }
    }
  } else {
    // 未登录:不给放行去交易相关的页面、支付相关【pay、paysuccess之类的】、个人中心
    // 如果在未登录的情况下去以上路由页面，则强制跳转到登陆页面去
    let topath = to.path
    if(topath.indexOf('/trade') != -1 || topath.indexOf('/pay')!= -1|| topath.indexOf('/center')!= -1){
      // 把未登录的时候想去的路由信息存储在地址栏之中，可以在登录之后直接跳转到你想去的页面
      next('/login?redirect='+topath)
    }else{
    // 其他路由可以放行
      next()
    }

  }
})

export default router
