<template>

  <el-card class="box-card" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="name">
          {{ scenicsInfo.title }}

        </div>
        <div class="info">
          <div class="level">
            <svg t="1705927583302" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6512" width="16" height="16"><path d="M566.686 455.5c-19.882 0-36-16.118-36-36a36 36 0 0 1 5.188-18.617c30.044-49.725 45.067-104.52 45.067-164.383 0-27.257-1.565-53.723-7.941-79-3.85-25-19.643-43-43.5-43s-43.23 19.206-43.497 43c-0.003 0.167-0.003 0.333-0.003 0.5 0 115-58.333 214.8-175 299.402V879.5c0 8.837 7.163 16 16 16h485.496a16 16 0 0 0 15.773-13.312l66.36-389.311c2.97-17.422-8.746-33.952-26.168-36.922a32 32 0 0 0-5.377-0.455H566.686z m392.31 39.133l-71.9 411.873c-5.348 30.637-31.946 52.994-63.046 52.994H97c-17.673 0-32-14.327-32-32v-504c0-17.673 14.327-32 32-32h178.43a64 64 0 0 0 39.35-13.527C385.03 323.203 420.77 249.88 422 158c0.004-0.167 0-0.333 0-0.5C422 98.13 470.13 50 529.5 50S626.532 94.692 637 157.5c2 12 7.94 51.925 7.94 79 0 55.13-11.556 107.56-32.38 155h259.747c48.601 0 88 39.399 88 88a88 88 0 0 1-1.31 15.133zM231 455.5h-87c-8.837 0-16 7.163-16 16v408c0 8.837 7.163 16 16 16h87c8.837 0 16-7.163 16-16v-408c0-8.837-7.163-16-16-16z" fill="#D8D8D8" p-id="6513"></path></svg>
            <span>{{ scenicsInfo.level }}</span>
          </div>
          <div class="opentime">
            <svg t="1705927521795" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5476" width="16" height="16"><path d="M548.4 870c-214.3 0-388.6-174.3-388.6-388.6S334.1 92.7 548.4 92.7 937 267.1 937 481.4C937 695.7 762.7 870 548.4 870z m0-725.9c-186 0-337.2 151.3-337.2 337.3s151.3 337.2 337.2 337.2 337.3-151.3 337.3-337.2-151.4-337.3-337.3-337.3z" fill="#828282" p-id="5477"></path><path d="M474 561.2c-13.6 0-24.8-11.1-24.8-24.8V321.1c0-13.6 11.1-24.8 24.8-24.8 13.6 0 24.8 11.1 24.8 24.8v215.3c-0.1 13.7-11.2 24.8-24.8 24.8z" fill="#828282" p-id="5478"></path><path d="M714 536.4c0 13.6-11.1 24.8-24.8 24.8H474c-13.6 0-24.8-11.1-24.8-24.8 0-13.6 11.1-24.8 24.8-24.8h215.3c13.6 0.1 24.7 11.2 24.7 24.8z" fill="#828282" p-id="5479"></path></svg>
            <span>营业时间：{{ scenicsInfo.openTime }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img :src="scenicsInfo.thumbnailUrl" alt=""> 
      </div>
    </div>
    
  </el-card>

</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted} from 'vue'
//接受父组件home-index传过来的props参数scenicsInfo
defineProps(['scenicsInfo']);
</script>

<style scoped lang="scss">
.content{
  display: flex;
  justify-content: space-between;
  .right{
    img{
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
  }
  .left{
    width: 60%;
    .info{
      color: gray;
      font-size: small;
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      .level{
        display: flex;
        align-items: center;
        span{
          margin-left: 5px;
        }
        
      }
      .opentime{
        display: flex;
        align-items: center;
        span{
          margin-left: 5px;
        }
      }
    }
  }
}

</style>