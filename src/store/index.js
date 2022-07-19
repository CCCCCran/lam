import Vue from "vue";
import Vuex from "vuex";
// 需要使用插件一次
Vue.use(Vuex)

// 引入组件仓库
import home from './Home/index.js'
import search from './Search/index.js'
import detail from './Detail/index.js'
import shopcart from './ShopCart/index.js'
import user from './Users/index.js'
import trade from "./Trade/index.js";
// 对外暴露Store类的一个实例
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
});