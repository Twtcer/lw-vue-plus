<template>
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LwDatePicker } from "@lw8/lw-vue-plus";

const date = ref();
const date1 = ref();
const date2 = ref();
const date3 = ref();

const change = (date: any, type: any, value: any) => {
  console.log(`change选择${type}返回值是：`, date);
  console.log(`v-model绑定的值是：`, value);
};
</script>

<style></style>
