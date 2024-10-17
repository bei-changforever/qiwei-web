<template>
    <div class="main-container-mobile-page">
        <van-popup v-model:show="showTop"   position="right"
        :style="{ width: '30%', height: '100%' }" />
  
    </div>
</template>
<script setup>
import { ref } from 'vue'
const showTop = ref(false)
</script>
<style lang="scss" scoped>
// .main-container-mobile-page {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     background-color: white;
//     z-index: 99;
// }
</style>