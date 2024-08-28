<template> 
  <lw-button type="primary" @click="handleClick"> 按钮1</lw-button>

  <div>
   
    <div class="box_content">
      <div class="box_flex">
        <div>选择日</div>
        <lw-date-picker v-model="date" @change="change($event, 'date', 'date')" />
      </div>
      <div class="box_flex">
        <div>选择周1</div>
        <lw-date-picker v-model="date1" type="week" @change="change($event, 'week', 'date1')" />
      </div>
      <div class="box_flex">
        <div>选择月2</div>
        <lw-date-picker v-model="date2" type="month" @change="change($event, 'month', 'date2')" />
      </div>
      <div class="box_flex">
        <div>选择年</div>
        <lw-date-picker v-model="date3" type="year" @change="change($event, 'year', 'date3')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { LwButton, LwDatePicker } from "@lw8/lw-vue-plus";

const handleClick=()=>{
  console.log('btn click');  
}

const date = ref()
const date1 = ref()
const date2 = ref()
const date3 = ref()

const change = (date: any, type : any, value: any) => {
  console.log(`change选择${type}返回值是：`, date)
  console.log(`v-model绑定的值是：`, value)
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
