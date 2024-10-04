<template>
  <!-- <div class="custom-style">
    <header id="header">
      <CusHeader />
    </header>

    <section id="main">


      <swiper
        :direction="'vertical'"
        :slidesPerView="1"
        :spaceBetween="30"
        :mousewheel="true"
        :pagination="{
          clickable: true
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide><div class="box1">box1</div></swiper-slide>
        <swiper-slide><div class="box2">box2</div></swiper-slide>
        <swiper-slide><div class="box3">box3</div></swiper-slide>
      </swiper>
    </section>

    <footer id="footer"></footer>
  </div> -->
  <!-- <header id="header">
    <CusHeader />
  </header> -->
  <swiper :direction="'vertical'" :slidesPerView="1" :spaceBetween="30" :mousewheel="true" :pagination="{
    clickable: true
  }" :modules="modules" class="mySwiper">
    <swiper-slide>
      <header id="header">
        <CusHeader />
      </header>
    </swiper-slide>
    <swiper-slide>
      <div class="box2">box2</div>
    </swiper-slide>
    <swiper-slide>
      <div class="box3">box3</div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules'

const modules = [Mousewheel, Pagination]
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



.box1 {
  width: 100%;
  height: 100%;
  background: #ff0000;
}

.box2 {
  width: 100%;
  height: 100%;
  background: pink;
}

.box3 {
  width: 100%;
  height: 100%;
  background: orange;
}
</style>
