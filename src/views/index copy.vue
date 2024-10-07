<template>


  <header id="header">
    <CusHeader :swiperActiveIndex="activeIndex" />
  </header>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :mousewheel="true"
    :modules="modules"
    @slideChange="onSlideChange"
    class="mySwiper"
  >
    <swiper-slide style="height: 100%">
      <Banner />
    </swiper-slide>
    <swiper-slide style="height: 100%">
      <HomeView />
    </swiper-slide>
    <swiper-slide style="height: 100%">
      <BussinessInfo />
    </swiper-slide>
    <swiper-slide style="height: 100%">
      <Advantage />
    </swiper-slide>
    <swiper-slide style="height: 100%">
      <DevelopMent />
    </swiper-slide>
    <swiper-slide style="height: 100%">
      <Quality />
    </swiper-slide>
    <swiper-slide style="height: 100%">
      <DevelopMent2 />
    </swiper-slide>
    <swiper-slide style="height: 100%">
      <Added />
    </swiper-slide>
    <swiper-slide style="background-color: pink;">
      <footer id="footer">
        <CusFooter />
      </footer>
    </swiper-slide>
  </swiper>
  



</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue'
import HomeView from '@/views/Home/product.vue'
import BussinessInfo from '@/views/Home/business-info.vue'
import Advantage from '@/views/Home/advantage.vue'
import DevelopMent from '@/views/Home/development.vue'
import Quality from '@/views/Home/quality.vue'
import DevelopMent2 from '@/views/Home/development2.vue'
import Added from '@/views/Home/added.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules'
const activeIndex = ref(0)
const modules = [Mousewheel, Pagination]
const onSlideChange = (item) => {
  activeIndex.value = item.activeIndex
  console.log(activeIndex.value)
}
</script>
<style scoped lang="scss">
.test {
  width: 100%;
  height: 200vh;
  background-color: pink;
  border: 1px solid red;
}
</style>
