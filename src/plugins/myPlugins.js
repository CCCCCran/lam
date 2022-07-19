// vue插件一定要暴露对象
let myPlugins = {}

myPlugins.install = function () {
  console.log('调用');
}

export default myPlugins