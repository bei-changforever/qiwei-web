<template>
  <div class="business-base-container" ref="businessBaseContainer">
    <div class="main-okj-container" ref="container">
      <div class="boxapi" v-for="(comp, index) in domArr[0].domarr" :key="index">
        <component :is="comp" />
      </div>

      <div class="boxapi">
        <footer id="footer">
          <CusFooter />
        </footer>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef, nextTick, watch } from 'vue'
import BusinessBanner from './bussiness-banner.vue'
const domArr = shallowRef([
  {
    id: 'business',
    domarr: [BusinessBanner]
  }
])
</script>
<style lang="scss" scoped></style>
