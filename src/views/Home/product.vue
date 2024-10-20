<template>
  <div class="home-product">
    <div
      :class="['home-product-container', showAnimation && 'animate__animated animate__backInLeft']"
      ref="homeProductDom"
    >
      <div class="aside" ref="aside">
        <div class="block"></div>
        <div class="text">PRODUCT</div>
      </div>
      <div class="topic" ref="topic">
        <div class="left">热门产品</div>
        <div class="right">
          <div
            v-for="(item, index) in productType"
            :class="['right-item', productTypeIndex == index ? 'active' : '']"
            @click="handleSelect(index)"
          >
            <div class="text">{{ item }}</div>
            <div class="block" v-show="index !== productType.length - 1"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="['home-product-swiper', showAnimation && 'animate__animated animate__fadeIn']"
      v-if="screenWidth > 960"
      ref="productswiper"
    >
      <swiper
        @swiper="onSwiper"
        :slidesPerView="3"
        :spaceBetween="25"
        :freeMode="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in list" :key="index">
          <div class="product-info">
            <div class="product-info-container">
              <div class="background-detail-box">
                <div class="background-detail">
                  <span>产品展示{{ convertToChineseNumber(index + 1) }}</span>
                  <span>{{ item.title }}</span>
                </div>
              </div>
              <div class="backfround-info-box">
                <div class="background-info">
                  <span> 产品展示{{ convertToChineseNumber(index + 1) }}</span>
                </div>
              </div>
              <div class="background-image-box">
                <div class="background-image">
                  <img :src="item.src" />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="home-product-swiper-pagination">
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
    <div class="home-product-swiper" v-else>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in 6" :key="index">
          <div class="background-image">
            <img :src="getAssetsFile('images', '热门产品未选中1.png')" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script setup>
import { getAssetsFile } from '@/utils/tools'
import { ref, onMounted, toRefs, watch } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// import required modules
import { FreeMode, Pagination, EffectFade, Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/effect-fade'
// import emitter from '@/utils/mitt'
import { useIntersectionObserver } from '@vueuse/core'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())
const modules = [FreeMode, Pagination, EffectFade, Navigation]
const homeProductDom = ref(null)
const productType = ['底纹', '彩妆', '护肤', '清洁', '隔离']
const aside = ref(null)
const topic = ref(null)
const productswiper = ref(null)
const list = [
  {
    title: '修颜柔润持妆粉底液',
    src: getAssetsFile('images', '热门产品未选中1.png')
  },
  {
    title: '修颜柔润持妆粉底液',
    src: getAssetsFile('images', '产品3@2x.png')
  },
  {
    title: '修颜柔润持妆粉底液',
    src: getAssetsFile('images', '热门产品未选中3.png')
  }
]

//阿拉伯数字转中文数字
function convertToChineseNumber(num) {
  const chineseNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const units = ['', '十', '百', '千', '万', '十', '百', '千', '亿']
  let result = ''
  let zero = false
  let strNum = num.toString()

  for (let i = 0; i < strNum.length; i++) {
    let n = parseInt(strNum[i])
    if (n === 0) {
      if (!zero) {
        result += chineseNums[n]
        zero = true
      }
    } else {
      if (zero && i !== strNum.length - 1) {
        result = result.slice(0, -1) // 去掉多余的零
      }
      result += chineseNums[n] + units[strNum.length - i - 1]
      zero = false
    }
  }

  // 处理特殊情况，如“10”、“100”
  if (result.startsWith('一十')) {
    result = result.slice(1)
  }

  return result
}
// animate__fadeIn
const productTypeIndex = ref(0)

const handleSelect = (index) => {
  productTypeIndex.value = index
}
const swiperDom = ref(null)
const onSwiper = (swiper) => {
  swiperDom.value = swiper
}
const bannerSwiperPrev = () => {
  swiperDom.value.slidePrev()
}

const bannerSwiperNext = () => {
  swiperDom.value.slideNext()
}
const showAnimation = ref(false)
onMounted(() => {
  useIntersectionObserver(
    homeProductDom,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        console.log('进入')

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
.home-product {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;

  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  padding-top: 15vh;
  .home-product-container {
    width: var(--base-width);
    margin: 0 auto;
    // height: 15vh;
    margin-bottom: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // background-color: pink;
    .aside {
      width: 100%;
      height: 50px;

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

    .topic {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        width: 50%;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: bold;
        font-size: var(--topic-fontSize);
        color: #333333;
      }

      .right {
        width: 40%;

        display: flex;
        justify-content: flex-end;
        // gap: 8%;

        .right-item {
          position: relative;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 22px;
          color: #333333;
          cursor: pointer;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1vw;
          margin-right: 1vw;

          &:last-child {
            margin-right: 0;
          }

          &.active {
            color: #f3a7a5;
          }

          .block {
            width: 0px;
            height: 14px;
            border: 1px solid #999999;
          }
        }
      }
    }
  }

  .home-product-swiper {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    // zoom: 1;
    // opacity: 0;
    .mySwiper {
      width: 100%;
      height: 560px;
      // border: 1px solid skyblue;
      .product-info {
        width: 100%;
        height: 98%;
        margin: 0 auto;
        // border: 1px solid red;
        .product-info-container {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;

          .background-detail-box {
            position: relative;
            width: 100%;
            height: calc(100% - 100px);

            .background-detail {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 40%;
              border-radius: 10px 10px 0px 0px;
              display: flex;
              flex-direction: column;
              align-items: center;
              overflow: hidden;
              transition: all 0.3s ease-in;
              background: #eee;
              box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

              span {
                width: 100%;
                height: 90px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 24px;
                color: #000000;

                &:first-child {
                  margin-top: 1vw;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 30px;
                  color: #000000;
                }
              }
            }
          }

          .background-image-box {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;

            .background-image {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: calc(100% - 100px);
              // zoom: 1;
              transition: all 0.3s ease-in;

              img {
                width: 100%;
                height: 100%;
                border-radius: 0;
              }
            }
          }

          .backfround-info-box {
            position: relative;
            width: 100%;
            height: 100px;

            .background-info {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
              background: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 26px;
              color: #333333;
              transition: all 0.3s ease-in;
              border-radius: 0px 0px 10px 10px;
              box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
          }

          &:hover {
            .background-detail {
              height: 100%;
              border-radius: 10px 10px 10px 10px;
              transition: all 0.4s ease-in;
            }

            .background-image-box {
              bottom: -8.4vh;
              transform: scale(0.8);
              transform-origin: bottom center;
              transition: all 0.3s ease-in;

              .background-image {
                // border: 1px solid red;
                bottom: 0;
                transform: scale(0.8);
                transform-origin: bottom center;
                transition: all 0.2s ease-in;
                border-radius: 20px !important;
                overflow: hidden;
              }
            }

            .background-info {
              height: 0;
              transition: all 0.3s ease-in;
            }
          }
        }
      }
    }

    .home-product-swiper-pagination {
      margin-top: 1vh;
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2vw;

      .left-btn {
        cursor: pointer;

        :deep(.el-image) {
          width: 40px;
          height: 40px;
        }
      }

      .right-btn {
        cursor: pointer;

        :deep(.el-image) {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}

:deep(.swiper-button-prev) {
  &::after {
    display: none;
  }
}

:deep(.swiper-button-next) {
  &::after {
    display: none;
  }
}
@media (min-width: 1440px) and (max-width: 1520px) {
  .home-product {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    padding-top: 15vh;
    .home-product-container {
      width: var(--base-width);
      margin: 0 auto;
      // height: 15vh;
      margin-bottom: 4vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      // background-color: pink;
      .aside {
        width: 100%;
        height: 50px;

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

      .topic {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          width: 50%;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: var(--topic-fontSize);
          color: #333333;
        }

        .right {
          width: 40%;

          display: flex;
          justify-content: flex-end;
          // gap: 8%;

          .right-item {
            position: relative;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 22px;
            color: #333333;
            cursor: pointer;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1vw;
            margin-right: 1vw;

            &:last-child {
              margin-right: 0;
            }

            &.active {
              color: #f3a7a5;
            }

            .block {
              width: 0px;
              height: 14px;
              border: 1px solid #999999;
            }
          }
        }
      }
    }

    .home-product-swiper {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      // zoom: 1;

      .mySwiper {
        width: 100%;
        height: 520px;
        // border: 1px solid skyblue;
        .product-info {
          width: 100%;
          height: 98%;
          margin: 0 auto;
          // border: 1px solid red;
          .product-info-container {
            position: relative;
            width: 100%;
            height: 100%;
            cursor: pointer;

            .background-detail-box {
              position: relative;
              width: 100%;
              height: calc(100% - 100px);

              .background-detail {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 40%;
                border-radius: 10px 10px 0px 0px;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow: hidden;
                transition: all 0.3s ease-in;
                background: #eee;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

                span {
                  width: 100%;
                  height: 90px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 24px;
                  color: #000000;

                  &:first-child {
                    margin-top: 1vw;
                    font-family:
                      Microsoft YaHei,
                      Microsoft YaHei;
                    font-weight: 400;
                    font-size: 30px;
                    color: #000000;
                  }
                }
              }
            }

            .background-image-box {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;

              .background-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: calc(100% - 100px);
                // zoom: 1;
                transition: all 0.3s ease-in;

                img {
                  width: 100%;
                  height: 100%;
                  border-radius: 0;
                }
              }
            }

            .backfround-info-box {
              position: relative;
              width: 100%;
              height: 100px;

              .background-info {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 26px;
                color: #333333;
                transition: all 0.3s ease-in;
                border-radius: 0px 0px 10px 10px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
              }
            }

            &:hover {
              .background-detail {
                height: 100%;
                border-radius: 10px 10px 10px 10px;
                transition: all 0.4s ease-in;
              }

              .background-image-box {
                bottom: -8.4vh;
                transform: scale(0.8);
                transform-origin: bottom center;
                transition: all 0.3s ease-in;

                .background-image {
                  // border: 1px solid red;
                  bottom: 0;
                  transform: scale(0.8);
                  transform-origin: bottom center;
                  transition: all 0.2s ease-in;
                  border-radius: 20px !important;
                  overflow: hidden;
                }
              }

              .background-info {
                height: 0;
                transition: all 0.3s ease-in;
              }
            }
          }
        }
      }

      .home-product-swiper-pagination {
        margin-top: 1vh;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vw;

        .left-btn {
          cursor: pointer;

          :deep(.el-image) {
            width: 40px;
            height: 40px;
          }
        }

        .right-btn {
          cursor: pointer;

          :deep(.el-image) {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
}
@media (min-width: 960px) and (max-width: 1220px) {
  .home-product {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    padding-top: 15vh;
    .home-product-container {
      width: var(--base-width);
      margin: 0 auto;
      // height: 15vh;
      margin-bottom: 2vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      // background-color: pink;
      .aside {
        width: 100%;
        height: 50px;

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

      .topic {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          width: 50%;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: var(--topic-fontSize);
          color: #333333;
        }

        .right {
          width: 40%;

          display: flex;
          justify-content: flex-end;
          // gap: 8%;

          .right-item {
            position: relative;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 18px;
            color: #333333;
            cursor: pointer;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1vw;
            margin-right: 1vw;

            &:last-child {
              margin-right: 0;
            }

            &.active {
              color: #f3a7a5;
            }

            .block {
              width: 0px;
              height: 12px;
              border: 1px solid #999999;
            }
          }
        }
      }
    }

    .home-product-swiper {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      // zoom: 1;

      .mySwiper {
        width: 100%;
        height: 50vh;

        .product-info {
          width: 100%;
          height: 99%;
          margin: 0 auto;

          .product-info-container {
            position: relative;
            width: 100%;
            height: 100%;
            cursor: pointer;

            .background-detail-box {
              position: relative;
              width: 100%;
              height: calc(100% - 80px);

              .background-detail {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 40%;
                border-radius: 10px 10px 0px 0px;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow: hidden;
                transition: all 0.3s ease-in;
                background: #eee;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

                span {
                  width: 100%;
                  height: 60px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 20px;
                  color: #000000;

                  &:first-child {
                    margin-top: 1vw;
                    font-family:
                      Microsoft YaHei,
                      Microsoft YaHei;
                    font-weight: 400;
                    font-size: 25px;
                    color: #000000;
                  }
                }
              }
            }

            .background-image-box {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;

              .background-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: calc(100% - 80px);
                // zoom: 1;
                transition: all 0.3s ease-in;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }

            .backfround-info-box {
              position: relative;
              width: 100%;
              height: 80px;

              .background-info {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 20px;
                color: #333333;
                transition: all 0.3s ease-in;
                border-radius: 0px 0px 10px 10px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
              }
            }

            &:hover {
              .background-detail {
                height: 100%;
                border-radius: 10px 10px 10px 10px;
                transition: all 0.4s ease-in;
              }

              .background-image-box {
                bottom: -8.4vh;
                transform: scale(0.8);
                transform-origin: bottom center;
                transition: all 0.3s ease-in;

                .background-image {
                  // border: 1px solid red;
                  bottom: 0;
                  transform: scale(0.8);
                  transform-origin: bottom center;
                  transition: all 0.2s ease-in;
                  border-radius: 20px !important;
                  overflow: hidden;
                }
              }

              .background-info {
                height: 0;
                transition: all 0.3s ease-in;
              }
            }
          }
        }
      }

      .home-product-swiper-pagination {
        margin-top: 2vw;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vw;

        .left-btn {
          cursor: pointer;

          :deep(.el-image) {
            width: 40px;
            height: 40px;
          }
        }

        .right-btn {
          cursor: pointer;

          :deep(.el-image) {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .home-product {
    box-sizing: border-box;
    width: 100vw;
    height: auto;
    background-color: white;
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;
    padding: 0;
    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    // padding-top: 15vh;
    .home-product-container {
      width: var(--base-width);
      margin: 0 auto;
      // height: 15vh;
      padding: 2vh;
      padding-bottom: 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      // background-color: pink;
      .aside {
        width: 100%;
        height: 50px;

        display: none;
        // flex-direction: column;
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

      .topic {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          width: 50%;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: 18px;
          color: #333333;
        }

        .right {
          width: 40%;

          display: flex;
          justify-content: flex-end;
          // gap: 8%;

          .right-item {
            position: relative;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #333333;
            cursor: pointer;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2vw;
            margin-right: 1vw;

            &:last-child {
              margin-right: 0;
            }

            &.active {
              color: #f3a7a5;
            }

            .block {
              width: 0px;
              height: 14px;
              border: 1px solid #999999;
            }
          }
        }
      }
    }

    .home-product-swiper {
      padding: 2vh;
      box-sizing: border-box;

      .my-swipe {
        width: 100%;
      }

      :deep(.van-swipe-item) {
        width: 100%;
        // border: 1px solid red;
      }
      .background-image {
        width: 100%;
        border-radius: 20px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
