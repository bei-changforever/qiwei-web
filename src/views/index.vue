<template>
  <header id="header">
    <CusHeader :swiperActiveIndex="activeIndex" />
  </header>
  <swiper :direction="'vertical'" :slidesPerView="1" :mousewheel="true" :modules="modules" @slideChange="onSlideChange"
    class="mySwiper">
    <swiper-slide style="height: 100%;">
      <Banner />
    </swiper-slide>
    <swiper-slide style="height: 100%;">

      <HomeView />
    </swiper-slide>
    <swiper-slide style="height: 100%;">
      <BussinessInfo />
    </swiper-slide>
    <swiper-slide style="height: 100%;">
     <Advantage/>
    </swiper-slide>
  </swiper>


  <footer id="footer"></footer>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount ,reactive} from 'vue'
import HomeView from "@/views/Home/product.vue"
import BussinessInfo from "@/views/Home/business-info.vue"
import Advantage from "@/views/Home/advantage.vue"
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
}


</script>
<style scoped lang="scss">
#header {
  width: 100%;
  padding: 0;
  margin: 0 auto;
}

#main {
  width: 100%;
}

#footer {
  width: 100%;
  height: var(--footer-height);
  padding: 0;
  background-color: #3a3a3a;
}



.swiper {
  width: 100%;
  height: 100%;
}




.box3 {
  width: 100%;
  height: 100%;
  background: orange;
}
</style>
