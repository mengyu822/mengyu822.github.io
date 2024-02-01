<template>
  <div class="level">
    <h1>景区</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="level-list" >
        <li :class="{ 'active': selectedIndex === -1 }"  @click="sendLevel('全部');selectItem(-1)">全部</li>
        <li  v-for="(item,index) in scenicsLevel" :key="index" @click="sendLevel(item);selectItem(index)" :class="{ 'active': selectedIndex === index }">{{ item }}</li>

      </ul>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqScenicsLevelAndRegion } from "@/api/home";

let scenicsLevel = ref([])
//
onMounted(()=>{
  getScenicsLevel();

})
// 获取景点等级
const getScenicsLevel = async () => {
  let result: any = await reqScenicsLevelAndRegion();
  if (result.status == 200) {
    scenicsLevel.value =  result.data.level
  }
  // console.log(result)
}
//
const selectedIndex = ref(-1);

const selectItem = (index:any) => {
  selectedIndex.value = index;
};
//
defineProps(['sendLevel'])


</script>

<style scoped lang="scss">
.level{
  color: darkgray;
  h1{
    font-size: 12pt;
    font-weight: 900;
    margin: 10px 0px;
  }
  .content{
    display: flex;
    .left{
      margin-right: 10px;
    }
    .level-list{
      display: flex;
      li{
        margin-right: 5px; 
        list-style-type: none;
        &.active{
        color:dodgerblue;
      }
      }
      li:hover{
        color: dodgerblue;
        cursor: pointer;
      }

    }
  }
}
</style> 