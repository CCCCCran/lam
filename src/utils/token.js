// 对外暴露一个函数
// 存储token
export const setToken = (token)=>{
  localStorage.setItem('TOKEN',token)
}
// 将token值赋给vuex的仓库里面
// 获取token
export const  getToken = () =>{
  return  localStorage.getItem("TOKEN")
}

// 清除token
export const removeTOken = () =>{
  localStorage.removeItem("TOKEN")
}