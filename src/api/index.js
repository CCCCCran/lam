// 当前这个模块对API进行统一管理
import requests from "./request";
import mockRequest from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList  GET 无参数
  // 发送请求返回结果为Promise对象
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'})

// 获取banner (Home首页轮播图接口)
export const reqGetBannerList = ()=> mockRequest.get('/banner')

//获取floor数据
export const reqFloorList = ()=> mockRequest.get('/floor')

// 获取搜索模块数据  地址：/api/list  请求方式:post 需要携带参数
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})

// 获取商品详情接口 地址：/api/item/{ skuId } 请求方式 :get
export const reqGoodInfo = (skuId) => requests({url:`/item/${skuId}`,method:'get'})

// 将产品添加到购物车中(获取更新某一个产品的个数)
export const  reqAddOrUpdateShopCart = (skuId,skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})

// 获取购物车列表  地址：/api/cart/cartList 请求方式：GET
export const reqCartList = () =>requests({url:'/cart/cartList',method:"get"})

// 删除产品接口 地址：/api/cart/deleteCart/{skuId} 请求方式 ：DELETE
export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:"delete"})

// 修改商品的选中状态   地址：/api/cart/checkCart/{skuId}/{isChecked} 请求方式：GET
export const reqUpdateCheckedByid = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:"get"})

// 获取验证码   地址：/api/user/passport/sendCode/{phone} 请求方式：GET
export const reqGetCode = (phone) =>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//  注册用户     地址：/api/user/passport/register 请求方式：POST
export const reqUserRegister = (data) =>requests({url:'/user/passport/register',data,method:'post'})

// 登录  地址：/api/user/passport/login 请求方式：POST
export const reqUserLogin = (data) =>requests({url:'/user/passport/login',data,method:'post'})

// 获取用户信息 需要带着用户的token，向服务器要用户信息 地址：/api/user/passport/auth/getUserInfo 请求方式：GET
export const reqUserInfo = () =>requests({url:'/user/passport/auth/getUserInfo',method:'get'})

// 用户退出登录  地址：/api/user/passport/logout 请求方式：GET
export const reqLogout = () =>requests({url:'/user/passport/logout',method:'get'})

// 获取用户收货地址信息 地址：/api/user/userAddress/auth/findUserAddressList 请求方式：GET
export const reqAddressInfo = () =>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

// 获取订单交易页信息 地址：/api/order/auth/trade 请求方式：GET
export const reqOrderInfo = () =>requests({url:'/order/auth/trade',method:'get'})

// 提交订单接口  地址：/api/order/auth/submitOrder?tradeNo={tradeNo} 请求方式：POST
export const reqSubmitOrder = (tradeNo,data) =>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

// 获取支付信息  地址：/api/payment/weixin/createNative/{orderId} 请求方式：GET
export const reqPayInfo = (orderId) =>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

// 获取支付订单状态 地址 ：/api/payment/weixin/queryPayStatus/{orderId} 请求方式：GET
export const reqPayStatus = (orderId) =>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

// 获取我的订单列表 地址：/api/order/auth/{page}/{limit}   请求方式：GET
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})