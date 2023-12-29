<template>
  <div class="gt_btn">
    <Button @click="ClickBtn" type="outline">
      <template #icon>
        <icon-refresh :class="{ rotate: isClick }"  />
      </template>
      刷新
    </Button>
  </div>
</template>
<script setup>
import { Button } from "@arco-design/web-vue";
import { IconRefresh } from "@arco-design/web-vue/es/icon";
import "@arco-design/web-vue/dist/arco.css";
import { ref, defineEmits } from "vue";
const isClick = ref(false);
const emits = defineEmits(["handleClickBtn"]);
const ClickBtn = () => {
  isClick.value = true;
  emits("handleClickBtn");
  setTimeout(() => {
    isClick.value = false;
  }, 500);
};
</script>
<style  lang="scss" scoped>
.rotate {
  transition: all 0.4s;
  transform:  rotate(360deg);
}
</style>