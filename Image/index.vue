<template>
   <img class="gt_image" 
   :src="require('@/assets/images/' + imgName)" 
   :style="styleText"

   />
</template>

<script setup>
import { defineProps} from 'vue'
 defineProps({
  // 自定义样式 
  styleText: {
    required: false,
    default: 'Link'
  },
  // imgName 图片名称 （图片放在assets/images下的文件夹中）
  imgName: {
    required: true,
    default: ''
  },
   // 状态 'normal' | 'warning' | 'success' | 'danger'
   status: {
    required: false,
  }
})



</script>

<style lang='scss' scoped>
.gt_image{
  border: 1px solid #ccc;
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
</style>