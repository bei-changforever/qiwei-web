<template>
    <div class="develop-base-container" ref="developBaseContainer">
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
import developBanner from './develop-banner.vue';
import DevelopCenter from './develop-cecnter.vue';
const domArr = shallowRef([
    {
        id: 'develop',
        domarr: [developBanner,DevelopCenter]
    }
])
</script>
<style lang="scss" scoped></style>