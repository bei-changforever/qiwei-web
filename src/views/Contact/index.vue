<template>
  <div class="contact-base-container" ref="contactBaseContainer">
    <div class="main-okj-container-nofull" ref="nofull">
      <!-- <div class="nofull-boxapi" v-for="(comp, index) in domArr[0].domarr" :key="index">
        <component :is="comp" />
      </div> -->
      <div class="nofull-boxapi">
        <contactbanner />
      </div>
      <div class="nofull-boxapi">
        <contactMain />
      </div>
      <footer id="footer">
        <CusFooter />
      </footer>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef, nextTick, watch } from 'vue'
import contactbanner from './contact-banner.vue'
import contactMain from './contact-main.vue'
const domArr = shallowRef([
  {
    id: 'develop',
    domarr: []
  }
])
</script>
<style lang="scss" scoped></style>
