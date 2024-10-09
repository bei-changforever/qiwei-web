<template>
    <div class="product-banner" ref="productBanner" id="product-banner">
        <div class="prodcut-banner"
       
            :style="{ backgroundImage: 'url(' + getAssetsFile('images', 'product-banner-bg.png') + ')' }">

        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';
import { getAssetsFile } from '@/utils/tools'
import emitter from '@/utils/mitt'
const productBanner = ref(null)

// 处理滚轮事件的方法
const handleWheel = (event) => {
    const deltaY = event.deltaY

    if (deltaY < 0) {
        // 向上滚动
        if(productBanner.value.getBoundingClientRect().top > -100) {
            emitter.emit('changHeaderBack', {
                isDark: true,
                activeBackgroundColor: null,
                slideChangeBakColor: false
            })
        }
    } else if (deltaY > 0) {
        // 向下滚动
        if(productBanner.value.getBoundingClientRect().top <= -100) {
            emitter.emit('changHeaderBack', {
                isDark: false,
                activeBackgroundColor: 'white',
                slideChangeBakColor: true
            })
        }
    }
}



onMounted(() => {
    window.addEventListener('wheel', handleWheel)
})

onUnmounted(() => {
    window.removeEventListener('wheel', handleWheel)
})
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