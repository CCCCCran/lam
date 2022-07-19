import { v4 as uuidv4 } from 'uuid';
// 要生成一个随机的字符串且每次执行不能发生变化，游客身份持久储存
export const getUUID = () =>{
  // 先从本地存储中获取一下uuid，看看本地中是否有uuid
  let uuid_token = localStorage.getItem("UUIDTOKEN")
  // 如果没有
  if(!uuid_token){
    // 自己生成游客临时身份
    uuid_token = uuidv4()
    // 本地存储一次
    localStorage.setItem('UUIDTOKEN',uuid_token)
  }
  return uuid_token
}