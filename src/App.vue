<template>
  <div>
    <Header></Header>
    <!-- 需要router-view来展示路由 -->
    <router-view></router-view>
  <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入组件
import Header from '@/components/Header/H-index.vue'
import Footer from '@/components/Footer/F-index.vue'
export default {
  name: 'App',
  // 注册组件
  components: {
    Header,
    Footer
  },
  mounted(){
    // 通知vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch('categoryList')
  }
}
</script>

<style lang="less" scoped>

</style>
