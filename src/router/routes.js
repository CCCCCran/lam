// 引入路由组件
import Home from '@/pages/Home/Home-index.vue'
import Login from '@/pages/Login/Login-index.vue'
import Register from '@/pages/Register/Register-index.vue'
import Search from '@/pages/Search/Search-index.vue'
import Detail from '@/pages/Detail/index.vue'
import AddCartSuccess from '@/pages/AddCartSuccess/index.vue'
import ShopCart from "@/pages/ShopCart/index.vue";
import Trade from "@/pages/Trade/index.vue"
import Pay from "@/pages/Pay/index.vue"
import PaySuccess from "@/pages/PaySuccess/index.vue"
import Center from "@/pages/Center/index.vue";
// 引入二级路由组件
import MyOrder from "@/pages/Center/myOrder/index.vue"
import GroupOrder from "@/pages/Center/groupOrder/index.vue"
// 路由配置信息
export default [
  {path:"/home",
   component:Home,
  meta:{show:true}
  },
   {path:"/Login",
   component:Login,
   meta:{show:false}
  },
   {path:"/Register",
   component:Register,
   meta:{show:false}
  },
  {
    name: 'search',  // 是当前路由的标识名称
    path: '/search/:keyword?',
    component: Search,
    meta:{show:true},
    // 将params参数和query参数映射成属性传入路由组件
    props: route => ({keyword3: route.params.keyword, keyword4: route.query.keyword2})
  },
  {path:"/detail/:skuId",
   component:Detail,
  meta:{show:true}
  },
  {path:"/addcartsuccess",
  name:'addcartsuccess',
   component:AddCartSuccess,
  meta:{show:true}
  },
  {path:"/shopcart",
   component:ShopCart,
  meta:{show:true}
  },
  {path:"/trade",
   component:Trade,
  meta:{show:true},
  // 路由独享守卫
  beforeEnter (to, from, next) {
    // 如果是shopcart来就可以放行
    if(from.path == '/shopcart'){
      next()
    }else{
      // 不是从购物车来的,就停留在当前
      next(false)
    }
  }
  },
  {path:"/pay",
  component:Pay,
 meta:{show:true},
//  路由独享守卫
 beforeEnter (to, from, next) {
  // 如果从trade过来直接通行
  if(from.path == '/trade'){
    next()
  }else{
    // 如果从其他页面来，直接停止在当前页面
    next(false)
  }
 }
 },
 {path:"/paysuccess",
  component:PaySuccess,
 meta:{show:true}
 },
 {path:"/center",
  component:Center,
  meta:{show:true},
  //  子路由
 children:[
  {
    path:'myorder',
    component:MyOrder
  },
  {
    path:'grouporder',
    component:GroupOrder
  },
  // 重定向
  {
    path:'/center',
    redirect:'/center/myorder'
  }
 ]
 },
  // 重定向 使其直接访问home首页
  {path:'/',
  redirect:'/home'}
]