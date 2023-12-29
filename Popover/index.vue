<template>
  <Popover>
    <Link :hoverable="false">{{ HoverText }}</Link>
    <template #content>
      <span v-if="popoverContent && content">
        <p v-for="(item, index) in content" :key="index">
          {{ item }} ;
        </p>
      </span>
      <p v-else>{{ content }}</p>
    </template>
  </Popover>
</template>

<script setup>
import { Popover, Link } from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import { computed, defineProps } from "vue";
const props = defineProps({
  // 标题
  HoverText: {
    required: true,
    default: "Hover",
  },
  // 显示内容
  content: {
    required: true,
    default: false,
  },
});
const popoverContent = computed(() => {
  return props.content instanceof Array;
});
</script>

<style lang="scss" scoped></style>
