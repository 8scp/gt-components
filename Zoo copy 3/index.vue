<template>
   <Link :hoverable="false" :status="status" :disabled="disabled" @click="ClickLink">{{props.title}}</Link>
</template>

<script setup>
import { Link } from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import { defineEmits, defineProps} from 'vue'
const props = defineProps({
  // 标题 
  title: {
    required: true,
    default: 'Link'
  },
  // 是否禁用
  disabled: {
    required: true,
    default: false
  },
   // 状态 'normal' | 'warning' | 'success' | 'danger'
   status: {
    required: true,
  }
})
const emits = defineEmits([
  'handleClickLink',
])
const ClickLink = () => {
  emits('handleClickLink')
}


</script>

<style lang='scss' scoped></style>