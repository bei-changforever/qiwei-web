<template>
  <div class="development2">
    <div class="development2-container">
      <div class="development2-content">
        <div class="content-left">
          <div class="T-left">
            <div class="topic">
              <div class="block"></div>
              <div class="text">PROFILE</div>
            </div>
            <div class="name">荣誉资质</div>
            <div class="fu-name">高新技术企业及多项荣誉认证</div>
            <div class="desc">
              荣获2022年广东省高新技术企业称号；荣获企业贯标、欧盟22716及GMPC双认证、
              ISO9001质量认证；4项广东省名优高新技术产品荣誉证书。
            </div>
          </div>
          <div class="T-bottom">
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
                <div class="T-bottom-bottom-item">
                  <el-image
                    v-for="(item, index) in list"
                    :key="index"
                    :src="item"
                    :fit="'fill'"
                    @click="selectIndex(index)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-right" v-if="PAGEWIDTH > 960">
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
                >
                  <swiper-slide v-for="(item, index) in list" :key="index"
                    ><el-image :src="item" :fit="'fill'" />
                  </swiper-slide>
                </swiper>
              </div>
              <div class="content-right-text">名优高品证书（睫毛膏）</div>
            </div>
          </div>
        </div>
        <div class="mom-sw" v-else>
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <el-image :src="getAssetsFile('images', '证书1.png')" :fit="'fill'" />
            </van-swipe-item>
            <van-swipe-item>
              <el-image :src="getAssetsFile('images', '证书2.png')" :fit="'fill'" />
            </van-swipe-item>
            <van-swipe-item>
              <el-image :src="getAssetsFile('images', '证书3.png')" :fit="'fill'" />
            </van-swipe-item>
            <van-swipe-item>
              <el-image :src="getAssetsFile('images', '证书4.png')" :fit="'fill'" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-creative'

// import required modules
import { EffectCreative } from 'swiper/modules'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())
const modules = [EffectCreative]

const activeIndex = ref(0)

// 小于0补0
const formatNumber = (value) => {
  return value < 10 ? `0${value}` : `${value}`
}

const list = [
  getAssetsFile('images', '证书1.png'),
  getAssetsFile('images', '证书2.png'),
  getAssetsFile('images', '证书3.png'),
  getAssetsFile('images', '证书4.png')
]
const swiperDom = ref(null)
const onSwiper = (swiper) => {
  swiperDom.value = swiper
}
const bannerSwiperPrev = () => {
  swiperDom.value.slidePrev()
  if (activeIndex.value == 0) {
    return
  } else {
    activeIndex.value--
  }
}

const bannerSwiperNext = () => {
  swiperDom.value.slideNext()
  if (activeIndex.value == list.length - 1) {
    return
  } else {
    activeIndex.value++
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
  width: 100vw;
  height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  background-color: #f5f5f5;
  // padding-top: 5vh;

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
                :deep(.el-image) {
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

@media (min-width: 1520px) and (max-width: 1920px) {
  .development2 {
    width: 100vw;
    height: 100vh;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    background-color: #f5f5f5;
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
            margin-top: 2vh;
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
                  gap: 1vw;
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
    background-color: #f5f5f5;
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
            margin-top: 7vh;
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
    background-color: #f5f5f5;
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
            margin-top: 20vh;
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
    background-color: #f5f5f5;
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
