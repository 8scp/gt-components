<template>
  <div class="gt_title" :style="styleText">
    {{ title }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";
 defineProps({
  // 标题
  title: {
    required: false,
    default: "标题",
  },
  //样式 'width:100px; font-size:30px'
  styleText: {
    required: false,
    // default: 'width:100px; font-size:30px'
  },
  // 状态 'normal' | 'warning' | 'success' | 'danger'
  status: {
    required: false,
  },
});
</script>

<style lang="scss" scoped>
// @import "./index.scss";
.gt_title{
  color:#666;
  font-weight: 550;
  max-width: 240px;
  padding-left: 6px;
  border-left: 3px solid #165DFF;
}
</style>
