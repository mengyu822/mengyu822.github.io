<script setup lang="ts">

</script>

<template >
  
  <div class="container">
    <!-- 顶部全局组件 -->
    <scenicsSpotTop/>
    
      <div class="content">
        <!-- 展示区 -->
        <scenicsSpotContent/>
      </div>

      <!-- 底部全局组件 -->
      <scenicsSpotBottom/>


  </div>
</template>

<style scoped lang="scss">

.container{
  display: flex;
  flex-direction: column;
  align-items: center;


}
</style>