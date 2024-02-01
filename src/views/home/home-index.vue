<script setup lang="ts">
import { ref,  onMounted } from 'vue'
//引入首页轮播图组件
import Carousel from './carousel/carousel-index.vue'
import Search from './searcha/search-index.vue'
import Level from './level/level-index.vue'
import Region from './region/region-index.vue'
import Card from './card/card-index.vue'

import { reqScenics } from '@/api/home'

import emitter from '@/utils/emitter'


//存储已有景点数据
let hasScenices = ref([])
//分页器页码
let currentPage = ref<number>(1)
//一页展示几条数据
let pageSize = ref<number>(10)
//存储景点总数
let totalScenicsNum = ref<number>(0)
//景点等级
let level = ref<string>('')
//景点所属地区
let region = ref<string>('')
// 组件挂载完毕,先发送一次请求
let scenicsName = ref<string>('')
// 组件挂载完毕,先发送一次请求
onMounted(() => {
  getScenicsInfo();
})

//获取景点数据
const getScenicsInfo = async () => {
  let result: any = await reqScenics(currentPage.value, pageSize.value,level.value,region.value,scenicsName.value);
  if (result.status == 200) {
    hasScenices.value = result.data.items;
    totalScenicsNum.value =  result.data.totalNum;
   
  }
  // console.log(result.data.items)
}
//分页器页码发生变化时回调
const handleCurrentChange = () => {
  getScenicsInfo();
}
//分页器页大小变化回调
const handleSizeChange = () => {
  getScenicsInfo();
}
//获取level-index传过来的level
function  getLevel(value:string) {
  // console.log('子组件传过来的级别',value)
  
  if(value=='全部'){
    level.value = '';
    getScenicsInfo();
  }
  else{
  level.value = value;
  getScenicsInfo();
  }
  
}
//获取region-index传过来的region
//用mitt工具实现任意组件组件数据传递

emitter.on('getRegion',(value:any) =>{
  // console.log('子组件传过来的地区',value)
  
  if(value=='全部'){
    region.value = '';
    getScenicsInfo();
  }
  else{
    region.value = value;
  getScenicsInfo();
  }
  
})
// 获取检索框数据
function retriveScenics(value:string) {
  // console.log(value);
  scenicsName.value=value;
  getScenicsInfo();
  
}

</script>

<template>
  <div>
    <!-- 首页轮播图 -->
    <Carousel />
    <!-- 搜索 -->
    <Search :sendScenics="retriveScenics"/>
    <!-- 展示旅游地 -->
    <el-row :gutter="20">
      <el-col :span="20" :offset="0">
        <!-- 景区等级组件 -->
        <Level :changeLevel="getScenicsInfo" :sendLevel="getLevel"/>
        <!-- 地区组件 -->
        <Region />
        <!-- 展示景点组件 -->
        <div class="card">
          <Card
            class="cardItem"
            v-for="item in hasScenices"
            :key="item.id"
            :scenicsInfo="item"
          />
        </div>
        <!-- 分页器 -->
        <el-pagination
          class="pagination"
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalScenicsNum"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
      <el-col :span="4" :offset="0">456</el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .cardItem {
    width: 48%;
    margin: 10px 0;
  }
}
.pagination {
  margin-bottom: 10px;
}
</style>
