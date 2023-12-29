<template>
   <Link :hoverable="false" class="gt_link" :status="status" :disabled="disabled" @click="ClickLink">{{title}}</Link>
</template>

<script setup>
import { Link } from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import { defineEmits, defineProps} from 'vue'
defineProps({
  // 标题 
  title: {
    required: true,
    default: 'Link'
  },
  // 是否禁用
  disabled: {
    required: false,
    default: false
  },
   // 状态 'normal' | 'warning' | 'success' | 'danger'
   status: {
    required: false,
  }
})
const emits = defineEmits([
  'handleClickLink',
])
const ClickLink = () => {
  emits('handleClickLink')
}


</script>

<style lang='scss' scoped>
.gt_link{
  margin-right: 8px;
}
</style>