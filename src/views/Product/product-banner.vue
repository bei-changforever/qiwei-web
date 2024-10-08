<template>
    <div class="product-banner">
        <div class="prodcut-banner" :style="{ backgroundImage: 'url(' + getAssetsFile('images','product-banner-bg.png') + ')' }">
      
        </div>
    </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.product-banner {
    width: 100vw;
    height: 590px;
    .prodcut-banner {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
}
</style>