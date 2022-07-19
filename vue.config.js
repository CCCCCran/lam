const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // proxy代理  解决跨域问题
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
      },
      
    }
  }
})
