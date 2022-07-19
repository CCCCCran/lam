// search模块的仓库
import { reqGetSearchInfo } from "@/api"
const state = {
  // 仓库初始状态
  searchList:{}
}
const actions = {
  // 获取Search模块数据
  async getSearchList({commit},params={}){
   let result =  await reqGetSearchInfo(params)
    if(result.code == 200){
      commit('GETSEARCHLIST',result.data)
    }
  }
}
const mutations = {
  GETSEARCHLIST(state,searchList){
    state.searchList =searchList
  }
}
const getters = {
  goodsList(state){
    return state.searchList.goodsList||[]
  },
  attrsList(state){
    return state.searchList.attrsList||{}
  },
  trademarkList(state){
    return state.searchList.trademarkList||[]
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}