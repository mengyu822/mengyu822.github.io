<template>
  <div class="search">
    <el-input class="form" clearable placeholder="请输入旅游地名称" v-model="scenicsName" @keyup.enter="sendScenics(scenicsName)" />
    <el-button type="primary" size="default" :icon="Search" @click="sendScenics(scenicsName)"></el-button>
  </div>
  
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

import { ref } from "vue";

//数据
let scenicsName = ref('')

//方法
defineProps(['sendScenics'])
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  // 深度选择器 :deep
  .form {
    width: 600px;
    height:fit-content
  }
  :deep(.el-button){
    margin-left: 2px;
  }
}
</style>
