<script setup lang="ts">

import {  ref } from 'vue';

const clickCount = ref<number>(2);
const message = ref<string>('你还有'+(clickCount.value)+'次机会');
const totalCount = ref<number>(0);
const tips = ref<string>('目前你的获奖总金额是：'+totalCount.value+'元');
const moneyList = ref<number[]>([8.88,18.88,28.88,38.88,48.88,58.88,68.88,78.88,88.88,98.88]);
const num = ref<number>(0);
const btn = ref<string>("开始");
const messages = ref<string>('');


var index = 0 ;
let flag = false;
var back: string | number | NodeJS.Timer | undefined;


const clickMethod = () =>{

  if(clickCount.value>=0){
  flag = !flag;
  if(flag){
    clickCount.value -= 1;
    message.value = '你还有'+(clickCount.value)+'次机会'
    back = setInterval(rollMethod,0.5);
    btn.value = '停止';
  }
  else{
    clearInterval(back);
    totalCount.value += num.value;
    if(clickCount.value===0){
      clickCount.value -= 1;
      messages.value += '第'+(clickCount.value+3)+'次中了：'+num.value+'\n';
      tips.value = '恭喜你，总共获得：'+totalCount.value.toFixed(2)+'元';
    }
    else{
      tips.value = ('目前你的获奖总金额是：'+totalCount.value+'元');
      messages.value += '第'+(clickCount.value)+'次中了：'+num.value+'\n';
    }
      index = 0;
    btn.value = '开始';
  }
  if(clickCount.value===0){
    message.value = '你没有机会囖！';
  }  
}
}


const rollMethod = () => {
  if(index>9){
    index = 0;
  }
  num.value = moneyList.value[index++];
  console.log(num.value);
}

</script>

<template>
  <div id="building">
    <h1>{{ message }}</h1>
    <table align="center">
    <tr>
      <td>
        <el-button type="success" circle @click="clickMethod" style="color: blue; background-color: cadetblue;" >
          <h3>{{btn}}</h3>
        </el-button>
      </td>
      <td>
        <h1>{{ num }}</h1>
      </td>
    </tr> 
  </table>     
    <h2>{{ messages }}</h2>
    <h1>{{tips}}</h1>

  </div>
</template>

<style scoped>
#building{
  background:url("./assets/wy1.png");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
  background-color: darkgoldenrod;
  text-align: center;
}

</style>

