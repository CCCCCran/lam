<template>
  <!-- 使用三级联动组件，因为三级联动组件已经注册为全局组件，因此不需要去在这里注册，直接使用即可 -->
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></floor>
    <brand></brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/LIstContainer/LC-index.vue'
import recommend from '@/pages/Home/Recommend/R-index.vue'
import rank from '@/pages/Home/Rank/Rank-index.vue'
import like from '@/pages/Home/Like/Like-index.vue'
import floor from '@/pages/Home/Floor/Floor-index.vue'
import brand from '@/pages/Home/Brand/Brand-index.vue'
// 引入映射
import {mapState} from 'vuex'
export default {
components:{
  ListContainer,
  recommend,
  rank,
  like,
  floor,
  brand
},
mounted(){
  // 派发floor组件的acition,获取Floor的数据
  this.$store.dispatch('getFloorList')
},
computed:{
  ...mapState({
    floorList:state=>state.home.floorList,
  })
}
}
</script>

<style>

</style>