import Vue from 'vue'
import App from './App.vue'

// 注册全局组件-三级联动组件
import TypeNav from '@/components/TypeNav/T-index.vue'
// 使用Vue.component来注册全局组件    Vue.component(组件的名字,组件)
Vue.component(TypeNav.name,TypeNav)
// 注册全局组件-轮播图模块
import Carousel from '@/components/Carousel'
// 使用Vue.component来注册全局组件   
Vue.component(Carousel.name,Carousel)
// 注册全局组件- 分页器模块
import Pagination from '@/components/Pagination/index.vue'
// 使用Vue.component来注册全局组件   
Vue.component(Pagination.name,Pagination)

// 全剧注册element-ui组件
import { Button, MessageBox } from 'element-ui';
// 可以挂载在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false
// 引入路由
import router from '@/router/index.js'
// 引入仓库
import store from './store'
// 引入 mockServe.js ---mock数据
import '@/mock/mockServe.js'
// 引入swiper
import "swiper/css/swiper.css"


// 引入图片懒加载所需要的gif动图
import loading from "@/assets/loading.gif";
// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  // 懒加载默认图片
  loading: loading,
})
// 引入VeeValidate插件
import '@/plugins/validate'


// 统一接口api文件夹里面的全部请求函数
import * as API from '@/api'
console.log(API);

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库,组件实例上会多一个$store属性
  store,
  beforeCreate(){
    // 全局总线$bus的配置
    Vue.prototype.$API = API
    Vue.prototype.$bus = this
  }
}).$mount('#app')
