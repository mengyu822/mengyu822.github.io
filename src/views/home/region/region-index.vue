<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul class="region-list">
        <li :class="{ 'active': selectedIndex === -1 }" @click="emitter.emit('getRegion','全部') ;selectItem(-1)" >全部</li>
        <li v-for="(item, index) in scenicsRegion" :key="index" @click="emitter.emit('getRegion',item);selectItem(index)" :class="{ 'active': selectedIndex === index }">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted,onUnmounted } from 'vue'
import emitter from '@/utils/emitter'
import { reqScenicsLevelAndRegion } from '@/api/home'

let scenicsRegion = ref([])
//
onMounted(() => {
  getScenicsLevel()
})
onUnmounted(()=>{
  // 解绑事件
  emitter.off('getRegion')
})
//获取景区所属地区信息
const getScenicsLevel = async () => {
  let result: any = await reqScenicsLevelAndRegion()
  if (result.status == 200) {
    scenicsRegion.value = result.data.region
  }
}
//
const selectedIndex = ref(-1);

const selectItem = (index:any) => {
  selectedIndex.value = index;
};
</script>

<style scoped lang="scss">
.region {
  margin-top: 10px;
  color: darkgray;
  h1 {
    font-size: 12pt;
    font-weight: 900;
    margin: 10px 0px;
  }
  .content {
    display: flex;
    .left {
      margin-right: 10px;
    }
    .region-list {
      display: flex;
      li {
        margin-right: 5px;
        list-style-type: none;
        
        &.active {
          color: dodgerblue;
        }
      }
      li:hover {
        color: dodgerblue;
        cursor: pointer;
      }
    }
  }
}
</style>
