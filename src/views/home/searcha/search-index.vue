<template>
  <div class="search">
    <el-autocomplete class="form" clearable placeholder="请输入旅游地名称" />
    <el-button type="primary" size="default" :icon="Search"></el-button>
  </div>
  
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  // 深度选择器 :deep
  :deep(.el-input__wrapper) {
    width: 600px;
  }
  :deep(.el-button){
    margin-left: 2px;
  }
}
</style>
