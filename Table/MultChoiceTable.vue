<template>
  <Table 
  stripe  
  filter-icon-align-left
  :bordered="border" 
  :pagination="false" 
  :columns="columns" 
  :data="dataList" 
  row-key="name"
  :row-selection="rowSelection"
  v-model:selectedKeys="selectedKeys"
  />
</template>

<script setup>
import { Table } from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import { reactive,ref,defineEmits, defineProps} from 'vue'
const props = defineProps({
  // 表格的数据
  dataList: {
    required: true,
    default: []
  },
  // 表格的列描述信息
  columns: {
    required: true,
    default: []
  },
   // 是否显示边框
   border: {
    required: false,
    default: false
  }
})
const selectedKeys = ref(['仿真机器']);
const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: false,
});
const emits = defineEmits([
  'handleClickLink',
])
const ClickLink = () => {
  emits('handleClickLink')
}


</script>

<style lang='scss' scoped></style>