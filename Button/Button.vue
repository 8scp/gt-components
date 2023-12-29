<template>
  <div class="gt_btn">
    <Button @click="handleClick" :disabled="disabled" :type="type">{{title}}</Button>
  </div>
</template>
<script setup>
import { Button } from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import ClickBtn from "./mixin";
import { defineProps } from 'vue'
 defineProps({
    // 类型
  type: {
    required: false
  },
    // 标题
    title: {
    required: true,
    default: '新建'
  },
  // 是否禁用
  disabled: {
    required: false,
    default: false
  }
})
const { handleClick } = ClickBtn()
// 用于定义和声明组件所发出事件的函数。
// 它允许你在组件中明确列出组件可以发出的事件，提高了代码的可维护性和可读性。
// const emits = defineEmits([
//   'handleClickBtn',
// ])
// const ClickBtn = () => {
//   emits('handleClickBtn')
// }

</script>




