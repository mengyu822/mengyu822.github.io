<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'

</script>

<template>
  
  <div>
    <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
      <img src="../../../assets/banner-001.jpeg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
img{
    width: 100%;
    height: 350px;
    
    
}
</style>