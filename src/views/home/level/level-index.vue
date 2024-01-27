<template>
  <div class="level">
    <h1>景区</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="level-list" >
        <li class="active">全部</li>
        <li>五级</li>
        <li>四级</li>
        <li>三级</li>
        <li>二级</li>
        <li>一级</li>
      </ul>
      
    </div>
  </div>
</template>

<script setup lang="ts">

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