<template>
  <lw-layout-page>
    <lw-layout-page-item>
      <div>默认方式显示金额</div>
      <lw-input placeholder="请输入金额" @numblur="blurVal" v-model="model.money"></lw-input>
      <div>显示金额tip（大写）控制isTip</div>
      <lw-input placeholder="请输入金额" isTip v-model="model.money2"></lw-input>
      <div>显示天数</div>
      <lw-input
        placeholder="请输入天数"
        inputType="days"
        appendTitle="天"
        @numblur="blurVal1"
        v-model="model.day"
      ></lw-input>
      <div>显示百分比</div>
      <lw-input
        placeholder="请输入"
        inputType="percent"
        appendTitle="%"
        v-model="model.percent"
      ></lw-input>
      <div>显示电话号码</div>
      <lw-input
        placeholder="请输入电话号码"
        :isShow="false"
        inputType="tel"
        @numblur="blurVal2"
        v-model="model.tel"
      ></lw-input>
    </lw-layout-page-item>
  </lw-layout-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { LwLayoutPage, LwLayoutPageItem, LwInput } from "@lw8/lw-vue-plus";

const model = ref({
  money: null,
  day: null,
  money2: null,
  percent: null,
  tel: ""
});
const blurVal = val => {
  console.log("获取输入的值", val);
};
const blurVal1 = val => {
  console.log("获取输入的值1", val);
};
const blurVal2 = val => {
  console.log("获取输入的值2", val);
};
</script>

<style lang="scss" scoped></style>
