<template>
    <div class="region">
      
      <div class="content">
        <div class="left">地区:</div>
        <ul class="region-list" >
          <li class="active">全部</li>
          <li>北京</li>
          <li>上海</li>
          <li>广州</li>
          <li>深圳</li>
          <li>黑龙江</li>
          
        </ul>
        
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style scoped lang="scss">
  .region{
    margin-top:10px;
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
      .region-list{
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