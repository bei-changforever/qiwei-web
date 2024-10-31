<template>
  <div
    class="development2"
    :style="{
      'background-color': config && config.background_cert ? config.background_cert : '#f7f7f7'
    }"
  >
    <div class="development2-container">
      <div class="development2-content" ref="development2Content">
        <div class="content-left">
          <div class="T-left">
            <div
              :class="[
                'topic',
                showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__jackInTheBox' : ''
              ]"
            >
              <div class="block"></div>
              <div class="text">PROFILE</div>
            </div>
            <div
              :class="[
                'name',
                showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__jackInTheBox' : ''
              ]"
            >
              荣誉资质
            </div>
            <div
              :class="[
                'fu-name',
                showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInUp' : ''
              ]"
            >
              {{ config && config.home_cert_title }}
            </div>
            <div
              :class="[
                'desc',
                showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInUp' : ''
              ]"
            >
            {{ config && config.home_cert_description }}
            </div>
          </div>
          <div
            :class="[
              'T-bottom',
              showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__fadeIn' : ''
            ]"
          >
            <div class="T-bottom-container">
              <div class="T-bottom-top">
                <div class="left">
                  <span class="active-number">{{ formatNumber(activeIndex + 1) }}</span>
                  <span>/</span>
                  <span>{{ list.length }}</span>
                </div>
                <div class="right">
                  <div class="left-btn">
                    <el-image
                      :src="getAssetsFile('icon', 'left.png')"
                      :fit="'fill'"
                      @click="bannerSwiperPrev"
                    />
                  </div>
                  <div class="right-btn">
                    <el-image
                      :src="getAssetsFile('icon', 'right.png')"
                      :fit="'fill'"
                      @click="bannerSwiperNext"
                    />
                  </div>
                </div>
              </div>
              <div class="T-bottom-bottom">
                <div
                  :class="[
                    'T-bottom-bottom-item',
                    showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__zoomIn' : ''
                  ]"
                >
                  <swiper
                    :slidesPerView="4"
                    :spaceBetween="30"
                    class="mySwiper"
                    style="background-color: transparent"
                    @swiper="onSwiper2"
                  >
                    <swiper-slide
                      v-for="(item, index) in list"
                      :key="index"
                      style="background-color: transparent"
                    >
                      <el-image :src="item.thumb" :fit="'fill'" @click="selectIndex(index)" />
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="[
            'content-right',
            showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__zoomIn' : ''
          ]"
          v-if="PAGEWIDTH > 960"
        >
          <div class="content-right-backfround">
            <div class="content-right-bg">
              <el-image :src="getAssetsFile('images', '选中证书底.png')" :fit="'fill'" />
              <div class="content-right-img">
                <swiper
                  @swiper="onSwiper"
                  :grabCursor="true"
                  :effect="'creative'"
                  :creativeEffect="{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400]
                    },
                    next: {
                      translate: ['100%', 0, 0]
                    }
                  }"
                  :modules="modules"
                  class="mySwiper"
                  @slideChange="slideChange"
                >
                  <swiper-slide v-for="(item, index) in list" :key="index"
                    ><el-image :src="item.thumb" :fit="'fill'" />
                  </swiper-slide>
                </swiper>
              </div>
              <div class="content-right-text" v-if="list.length > 0 && list[activeIndex].name">
                {{ list[activeIndex].name }}
              </div>
            </div>
          </div>
        </div>
        <div class="mom-sw" v-else>
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in list" :key="index">
              <el-image :src="item.thumb" :fit="'fill'" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <div class="color-bg"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs, watch, onMounted } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { getCert } from '@/api/index'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-creative'
import { useIntersectionObserver } from '@vueuse/core'
// import required modules
import { EffectCreative } from 'swiper/modules'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())
const modules = [EffectCreative]
const showAnimation = ref(false)
const activeIndex = ref(0)
import { useConfig } from '@/stores/config'
const { config } = toRefs(useConfig())
// 小于0补0
const formatNumber = (value) => {
  return value < 10 ? `0${value}` : `${value}`
}

// const list = [
//   getAssetsFile('images', '证书1.png'),
//   getAssetsFile('images', '证书2.png'),
//   getAssetsFile('images', '证书3.png'),
//   getAssetsFile('images', '证书4.png'),
//   getAssetsFile('images', '证书4.png'),
//   getAssetsFile('images', '证书4.png'),
//   getAssetsFile('images', '证书4.png'),
//   getAssetsFile('images', '证书4.png'),
//   getAssetsFile('images', '证书4.png'),
//   getAssetsFile('images', '证书4.png')
// ]

const list = ref([])

const development2Content = ref(null)
const swiperDom = ref(null)
const swiperDom2 = ref(null)
const onSwiper2 = (swiper) => {
  swiperDom2.value = swiper
}
const onSwiper = (swiper) => {
  swiperDom.value = swiper
}
const bannerSwiperPrev = () => {
  swiperDom.value.slidePrev()
  activeIndex.value - 1
  if (activeIndex.value % 4 == 0) {
    swiperDom.value.slidePrev()
  }
}

const bannerSwiperNext = () => {
  swiperDom.value.slideNext()
  activeIndex.value + 1
  if (activeIndex.value % 4 == 0) {
    swiperDom2.value.slideNext()
  }
}
const selectIndex = (index) => {
  if (activeIndex.value == index) {
    return
  } else {
    swiperDom.value.slideTo(index)
    activeIndex.value = index
  }
}
const slideChange = () => {
  activeIndex.value = swiperDom.value.realIndex
}

const getCertData = async () => {
  let res = await getCert(1)
  if (res.status == 1) {
    list.value = res.data
  }
}

onMounted(() => {
  getCertData()
  useIntersectionObserver(
    development2Content,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        showAnimation.value = true
      }
    },
    { threshold: 0.5 }
  )
})
const PAGEWIDTH = ref(window.innerWidth)
//watch监听屏幕宽度的变化，进行侧边栏的收缩和展开
watch(
  () => screenWidth.value,
  (newVal, oldVal) => {
    PAGEWIDTH.value = newVal
  }
)
</script>
<style lang="scss" scoped>
.development2 {
  position: relative;
  width: 100vw;
  height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  background-color: white;
  // background-image: url('../../assets/images/test.jpg');
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
  // padding-top: 5vh;

  box-sizing: border-box;
  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  .development2-container {
    // position: absolute;
    // top: 15vh;
    // left: 50%;
    // transform: translateX(-50%);
    width: var(--base-width);
    margin: 0 auto;
    height: 100%;
    z-index: 2;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // background-color: pink;
    .development2-content {
      width: 100%;
      height: 100%;
      display: flex;
      // background-color: pink;
      .content-left {
        width: 60%;
        .T-left {
          width: 100%;
          .topic {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            gap: 1vw;

            .text {
              font-weight: 400;
              font-size: 22px;
              color: #f3a7a5;
            }

            .block {
              width: 6px;
              height: 16px;
              border-radius: 1px;
              background-color: #f3a7a5;
            }
          }
          .name {
            margin-top: 1vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 42px;
            color: #333333;
          }

          .fu-name {
            margin-top: 1vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: var(--fu-name-fontSize);
            color: #333333;
          }

          .desc {
            margin-top: 2vh;

            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 20px;
            color: #666666;
            line-height: 34px;
          }
        }

        .T-bottom {
          margin-top: 5vh;
          width: 100%;
          z-index: 2;
          .T-bottom-container {
            width: 100%;

            .T-bottom-top {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 6%;
              .left {
                width: 50%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: bold;
                font-size: 30px;
                color: #999999;
                .active-number {
                  color: #f3a7a5;
                  font-size: 54px;
                }
              }

              .right {
                width: 50%;
                display: flex;
                justify-content: flex-end;
                gap: 2vw;
                :deep(.el-image) {
                  width: 50px;
                  height: 50px;
                  cursor: pointer;
                }
              }
            }

            .T-bottom-bottom {
              width: 100%;
              .T-bottom-bottom-item {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .swiper-slide {
                  width: 208px;
                  height: 294px;
                  // border: 1px solid red;
                }
                :deep(.el-image) {
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
      .content-right {
        width: 40%;
        height: 100%;

        .content-right-backfround {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          .content-right-bg {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            .content-right-img {
              position: absolute;
              top: 10%;

              .swiper {
                // margin: 100px auto;
                width: 340px;
                height: 460px;
              }

              .swiper-slide {
                display: flex;
                align-items: center;
                justify-content: center;
                :deep(.el-image) {
                  width: 200%;
                  height: 100%;
                  object-fit: cover;
                }
              }
            }

            .content-right-text {
              position: absolute;
              bottom: 12%;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 30px;
              color: #333333;
            }
          }
        }
      }
    }
  }

  // .color-bg {
  //   position: absolute;
  //   bottom: 5vh;
  //   left: 0;
  //   width: 100%;
  //   height: 360px;
  //   background-color: #f0f0f0;
  //   z-index: 0 !important;
  // }
}

@media (min-width: 1520px) and (max-width: 1920px) {
  .development2 {
    width: 100vw;
    height: 100vh;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    background-color: white;
    padding-top: 15vh;
    box-sizing: border-box;
    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    .development2-container {
      width: var(--base-width);
      margin: 0 auto;
      height: 100%;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      .development2-content {
        width: 100%;
        height: 80%;
        display: flex;
        .content-left {
          width: 60%;
          .T-left {
            width: 100%;
            .topic {
              width: 100%;
              height: 40px;
              display: flex;
              align-items: center;
              gap: 1vw;

              .text {
                font-weight: 400;
                font-size: 22px;
                color: #f3a7a5;
              }

              .block {
                width: 6px;
                height: 16px;
                border-radius: 1px;
                background-color: #f3a7a5;
              }
            }
            .fu-name {
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: var(--fu-name-fontSize);
              color: #333333;
            }
            .name {
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 42px;
              color: #333333;
            }

            .desc {
              margin-top: 1vh;

              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 20px;
              color: #666666;
              line-height: 34px;
            }
          }

          .T-bottom {
            margin-top: 1vh;
            width: 100%;
            // background-color: pink;

            .T-bottom-container {
              width: 100%;

              .T-bottom-top {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 6%;
                .left {
                  width: 50%;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: bold;
                  font-size: 30px;
                  color: #999999;
                  .active-number {
                    color: #f3a7a5;
                    font-size: 54px;
                  }
                }

                .right {
                  width: 50%;
                  display: flex;
                  justify-content: flex-end;
                  gap: 2vw;
                  :deep(.el-image) {
                    width: 50px;
                    height: 50px;
                    cursor: pointer;
                  }
                }
              }

              .T-bottom-bottom {
                width: 100%;
                .T-bottom-bottom-item {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  gap: 1vw;

                  .swiper-slide {
                    width: 208px;
                    height: 294px;
                    // border: 1px solid red;
                  }
                  :deep(.el-image) {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
        .content-right {
          margin-top: 1vh;
          width: 40%;
          height: 100%;

          .content-right-backfround {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .content-right-bg {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;

              .content-right-img {
                position: absolute;
                top: 10%;

                .swiper {
                  // margin: 100px auto;
                  width: 340px;
                  height: 460px;
                }

                .swiper-slide {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  :deep(.el-image) {
                    width: 200%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
              }

              .content-right-text {
                position: absolute;
                bottom: 12%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 30px;
                color: #333333;
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1440px) and (max-width: 1520px) {
  .development2 {
    width: 100vw;
    height: 100vh;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    background-color: white;
    padding-top: 10vh;

    box-sizing: border-box;
    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    .development2-container {
      width: var(--base-width);
      margin: 0 auto;
      height: 100%;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // background-color: pink;
      .development2-content {
        width: 100%;
        height: 100%;
        display: flex;
        // background-color: pink;
        .content-left {
          width: 60%;
          .T-left {
            width: 100%;
            .topic {
              width: 100%;
              height: 40px;
              display: flex;
              align-items: center;
              gap: 1vw;

              .text {
                font-weight: 400;
                font-size: 22px;
                color: #f3a7a5;
              }

              .block {
                width: 6px;
                height: 16px;
                border-radius: 1px;
                background-color: #f3a7a5;
              }
            }
            .name {
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 42px;
              color: #333333;
            }

            .fu-name {
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: var(--fu-name-fontSize);
              color: #333333;
            }

            .desc {
              margin-top: 1vh;

              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 20px;
              color: #666666;
              line-height: 34px;
            }
          }

          .T-bottom {
            margin-top: 10vh;
            width: 100%;

            .T-bottom-container {
              width: 100%;

              .T-bottom-top {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 6%;
                .left {
                  width: 50%;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: bold;
                  font-size: 30px;
                  color: #999999;
                  .active-number {
                    color: #f3a7a5;
                    font-size: 54px;
                  }
                }

                .right {
                  width: 50%;
                  display: flex;
                  justify-content: flex-end;
                  gap: 2vw;
                  :deep(.el-image) {
                    width: 50px;
                    height: 50px;
                    cursor: pointer;
                  }
                }
              }

              .T-bottom-bottom {
                width: 100%;
                .T-bottom-bottom-item {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  .swiper-slide {
                    width: 208px;
                    height: 294px;
                    // border: 1px solid red;
                  }
                  :deep(.el-image) {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
        .content-right {
          width: 40%;
          height: 100%;

          .content-right-backfround {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .content-right-bg {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;

              .content-right-img {
                position: absolute;
                top: 10%;

                .swiper {
                  // margin: 100px auto;
                  width: 340px;
                  height: 460px;
                }

                .swiper-slide {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  :deep(.el-image) {
                    width: 200%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
              }

              .content-right-text {
                position: absolute;
                bottom: 12%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 30px;
                color: #333333;
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1220px) and (max-width: 1440px) {
  .development2 {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding-top: 5vh;
    box-sizing: border-box;
    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    .development2-container {
      width: var(--base-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .development2-content {
        width: 100%;
        height: 80%;
        display: flex;
        .content-left {
          width: 60%;
          .T-left {
            width: 100%;
            .topic {
              width: 100%;
              height: 40px;
              display: flex;
              align-items: center;
              gap: 1vw;

              .text {
                font-weight: 400;
                font-size: 22px;
                color: #f3a7a5;
              }

              .block {
                width: 6px;
                height: 16px;
                border-radius: 1px;
                background-color: #f3a7a5;
              }
            }
            .name {
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 42px;
              color: #333333;
            }

            .fu-name {
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: var(--fu-name-fontSize);
              color: #333333;
            }
            .desc {
              margin-top: 1vh;

              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 20px;
              color: #666666;
              line-height: 34px;
            }
          }

          .T-bottom {
            margin-top: 10vh;
            width: 100%;

            .T-bottom-container {
              width: 100%;

              .T-bottom-top {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 6%;
                .left {
                  width: 50%;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: bold;
                  font-size: 30px;
                  color: #999999;
                  .active-number {
                    color: #f3a7a5;
                    font-size: 54px;
                  }
                }

                .right {
                  width: 50%;
                  display: flex;
                  justify-content: flex-end;
                  gap: 2vw;
                  :deep(.el-image) {
                    width: 50px;
                    height: 50px;
                    cursor: pointer;
                  }
                }
              }

              .T-bottom-bottom {
                width: 100%;
                .T-bottom-bottom-item {
                  width: 100%;
                  display: flex;
                  // gap: 1vw;
                  justify-content: space-between;
                  // background: pink;
                  .swiper-slide {
                    width: 208px;
                    height: 220px;
                    // border: 1px solid red;
                  }
                  :deep(.el-image) {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
        .content-right {
          width: 40%;
          height: 100%;

          .content-right-backfround {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .content-right-bg {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;

              .content-right-img {
                position: absolute;
                top: 10%;

                .swiper {
                  // margin: 100px auto;
                  width: 340px;
                  height: 460px;
                }

                .swiper-slide {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  :deep(.el-image) {
                    width: 200%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
              }

              .content-right-text {
                position: absolute;
                bottom: 12%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 30px;
                color: #333333;
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 960px) and (max-width: 1220px) {
  .development2 {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    // padding-top: 5vh;
    box-sizing: border-box;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    .development2-container {
      width: var(--base-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .development2-content {
        width: 100%;
        height: 80%;
        display: flex;
        .content-left {
          width: 60%;
          .T-left {
            width: 100%;
            .topic {
              width: 100%;
              height: 40px;
              display: flex;
              align-items: center;
              gap: 1vw;

              .text {
                font-weight: 400;
                font-size: var(--aside-fontSize);
                color: #f3a7a5;
              }

              .block {
                width: 6px;
                height: var(--aside-block);
                border-radius: 1px;
                background-color: #f3a7a5;
              }
            }
            .name {
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: var(--topic-fontSize);
              color: #333333;
            }

            .fu-name {
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: var(--fu-name-fontSize);
              color: #333333;
            }

            .desc {
              margin-top: 1vh;

              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: var(--desc-fontSize);
              color: #666666;
              line-height: var(--desc-lineHeight);
            }
          }

          .T-bottom {
            margin-top: 8vh;
            width: 100%;

            .T-bottom-container {
              width: 100%;

              .T-bottom-top {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 6%;
                .left {
                  width: 50%;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: bold;
                  font-size: 25px;
                  color: #999999;
                  .active-number {
                    color: #f3a7a5;
                    font-size: 34px;
                  }
                }

                .right {
                  width: 50%;
                  display: flex;
                  justify-content: flex-end;
                  gap: 2vw;
                  :deep(.el-image) {
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                  }
                }
              }

              .T-bottom-bottom {
                width: 100%;
                .T-bottom-bottom-item {
                  width: 100%;
                  display: flex;
                  gap: 1vw;
                  justify-content: space-between;
                }
              }
            }
          }
        }
        .content-right {
          width: 40%;
          height: 100%;

          .content-right-backfround {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .content-right-bg {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;

              .content-right-img {
                position: absolute;
                top: 10%;

                .swiper {
                  // margin: 100px auto;
                  width: 220px;
                  height: 340px;
                }

                .swiper-slide {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  :deep(.el-image) {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
              }

              .content-right-text {
                position: absolute;
                bottom: 15%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 25px;
                color: #333333;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 960px) {
  .development2 {
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    // padding-top: 5vh;
    box-sizing: border-box;
    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    // scroll-snap-align: start;
    padding: 0;
    .development2-container {
      width: var(--base-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2vh;
      box-sizing: border-box;
      .development2-content {
        width: 100%;
        // height: 80%;
        display: flex;
        flex-direction: column;
        .content-left {
          width: 100%;
          .T-left {
            width: 100%;
            .topic {
              width: 100%;
              height: 40px;
              display: none;
              align-items: center;
              gap: 1vw;

              .text {
                font-weight: 400;
                font-size: 22px;
                color: #f3a7a5;
              }

              .block {
                width: 6px;
                height: 16px;
                border-radius: 1px;
                background-color: #f3a7a5;
              }
            }
            .name {
              // margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 18px;
              color: #333333;
            }

            .desc {
              margin-top: 1vh;

              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #666666;
              line-height: 34px;
            }
          }

          .T-bottom {
            margin-top: 7vh;
            width: 100%;
            display: none;
            .T-bottom-container {
              width: 100%;

              .T-bottom-top {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 6%;
                .left {
                  width: 50%;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: bold;
                  font-size: 30px;
                  color: #999999;
                  .active-number {
                    color: #f3a7a5;
                    font-size: 54px;
                  }
                }

                .right {
                  width: 50%;
                  display: flex;
                  justify-content: flex-end;
                  gap: 2vw;
                  :deep(.el-image) {
                    width: 50px;
                    height: 50px;
                    cursor: pointer;
                  }
                }
              }

              .T-bottom-bottom {
                width: 100%;
                .T-bottom-bottom-item {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                }
              }
            }
          }
        }
        .content-right {
          width: 40%;
          height: 100%;

          .content-right-backfround {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .content-right-bg {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;

              .content-right-img {
                position: absolute;
                top: 10%;

                .swiper {
                  // margin: 100px auto;
                  width: 340px;
                  height: 460px;
                }

                .swiper-slide {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  :deep(.el-image) {
                    width: 200%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
              }

              .content-right-text {
                position: absolute;
                bottom: 12%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 30px;
                color: #333333;
              }
            }
          }
        }

        .mom-sw {
          margin-top: 1vh;
          width: 100%;
          // background-color: pink;

          :deep(.van-swipe-item) {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
