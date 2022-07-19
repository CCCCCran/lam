// 登录与注册模块

import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo, reqLogout} from '@/api/index.js'
// 引入setToken方法
import { setToken,getToken,removeTOken} from '@/utils/token'

const state ={
  code:'',
  token:getToken(),
  userInfo:{}
}
const mutations = {
  // 验证码
  GETCODE(state,code){
    state.code = code
  },
  // 登录
  USERLOGIN(state,token){
    state.token = token
  },
  // 获取用户信息
  GETUSERINFO(state,userInfo){
    state.userInfo = userInfo
  },
  // 用户退出登录
  CLEAR(state){
    // 把仓库中相关信息清空
    state.token = '',
    state.userInfo={},
    // 本地存储数据清空
    removeTOken()
  }
}
const actions = {
  // 获取验证码
async getCode({commit},phone){
    let result = await reqGetCode(phone) 
    if(result.code == 200){
      commit("GETCODE",result.data)
      return  "ok"
    }else{
      return Promise.reject(new Error('faile'))
    }
  },
  // 用户注册
  async UserRegister({commit},user){
    let result = await reqUserRegister(user)
    console.log(result);
    if(result.code == 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'))
    }
  },
  // 登录业务 token
  async userLogin({commit},data){
    let result = await reqUserLogin(data)
    // 服务器下发token，用户唯一标识符：uuid
    // 将来经常通过带token来找服务器要用户信息
    if(result.code==200){
      // 用户成功登录且获取到token
      commit("USERLOGIN",result.data.token)
      // 持久化存储token    防止页面一刷新就token就没了
     setToken(result.data.token)
      return 'ok'
    }else {
      return Promise.reject(new Error('账号或密码错误，请重试'))
    }
  },
  // 获取用户信息
  async getUserInfo({commit}){
    let result = await reqUserInfo()
    if(result.code == 200){
      // 提交用户信息
      commit("GETUSERINFO",result.data)
      return  'ok'
    }else {
      return Promise.reject(new Error('获取失败'))
    }
  },
  // 退出登录
  async userLogout({commit}){
    let result = await reqLogout()
    if(result.code == 200){
      commit('CLEAR')
      return 'ok'
    }else{
      return Promise.reject(new Error('faild'))
    }
  }
}
const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}