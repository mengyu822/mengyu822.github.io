<script setup lang="ts">

</script>

<template>
  <div class="bottom">
    <div class="content">
      <div class="left">京ICP备 13032434号 电话010-2345332</div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>


    </div>

  </div>
</template>

<style scoped lang="scss">
  .bottom{
      width: 100%;
      height: 50px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      .content{
        width: 1200px;
        height: 100%;
        background-color: rgb(213, 218, 220);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right{
          span{
            margin: 0 0 0 10px;
            
          }
        }
      }
  }
</style>