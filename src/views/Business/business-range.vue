<template>
  <div class="business-range">
    <div class="business-range-container">
      <div class="control-button">
        <div
          :class="['control-button-item', activeIndex == index ? 'active' : '']"
          v-for="(item, index) in list"
          :key="index"
          @click="handleSelect(index)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import emitter from '@/utils/mitt'
const list = ['业务范围', '服务原则', '全球供应链', '合作模式']
const activeIndex = ref(0)
const handleSelect = (index) => {
  if (activeIndex.value == index) {
    return
  } else {
    activeIndex.value = index
    emitter.emit('tagViewsShowModel', activeIndex.value)
  }
}
</script>
<style lang="scss" scoped>
.business-range {
  width: 100vw;
  height: 100vh;
  .business-range-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;
  }
}
</style>
