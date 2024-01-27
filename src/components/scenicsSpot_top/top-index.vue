<script setup lang="ts"></script>

<template>
  <div class="top">
    <div class="content">
      <!-- 左侧 -->
      <div class="left">
        <!-- <img src="../../assets/favicon.ico" alt="" /> -->
        <img src="../../assets/OIP.jpeg" alt="">
        <p>旅游攻略</p>
      </div>

      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  .content {
  width: 1200px;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 50px;
      width: 50px;
      margin-right: 10px;
    }
    p {
      font-size: 20px;
      color: skyblue;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    /* color: skyblue; */
    .help {
      margin-right: 10px;
    }
  }
}
}

</style>
