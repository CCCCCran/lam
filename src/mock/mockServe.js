import Mock from 'mockjs'

import banner from './banner.json'
import floor from './floors.json'

// mock数据：第一个参数是请求地址   第二个参数是：请求数据
Mock.mock("/mock/banner",{code:200,data:banner}) //模拟首页轮播图数据
Mock.mock("/mock/floor",{code:200,data:floor})