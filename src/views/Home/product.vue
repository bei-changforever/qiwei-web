<template>
  <div
    class="home-product"
    :style="{
      'background-color':
        config && config.background_hot_product ? config.background_hot_product : 'white'
    }"
  >
    <div class="home-product-container" ref="homeProductDom">
      <div
        :class="[
          'aside',
          showAnimation && screenWidth > 960 ? 'animate__animated animate__jackInTheBox' : ''
        ]"
        ref="aside"
      >
        <div class="block"></div>
        <div class="text">PRODUCT</div>
      </div>
      <div class="topic" ref="topic">
        <div
          :class="[
            'left',
            showAnimation && screenWidth > 960 ? 'animate__animated animate__jackInTheBox' : ''
          ]"
        >
          热门产品
        </div>
        <div class="right">
          <div
            v-for="(item, index) in productType"
            :class="[
              'right-item',
              productTypeIndex == index ? 'active' : '',
              showAnimation && screenWidth > 960 ? 'animate__animated animate__slideInRight' : ''
            ]"
            @click="handleSelect(index)"
          >
            <div class="text">{{ item.name }}</div>
            <div class="block" v-show="index !== productType.length - 1"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="[
        'home-product-swiper',
        showAnimation && screenWidth > 960 ? 'animate__animated animate__zoomIn' : ''
      ]"
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
        v-if="list.length > 0"
      >
        <swiper-slide v-for="(item, index) in list" :key="index">
          <div class="product-info" @click="gotoProductInfobyid(item)">
            <div class="product-info-container">
              <div class="background-detail-box">
                <div class="background-detail">
                  <span>产品展示{{ convertToChineseNumber(index + 1) }}</span>
                  <span>{{ item.description }}</span>
                </div>
              </div>
              <div class="backfround-info-box">
                <div class="background-info">
                  <span> 产品展示{{ convertToChineseNumber(index + 1) }}</span>
                </div>
              </div>
              <div class="background-image-box">
                <div class="background-image">
                  <img :src="item.thumb" />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <van-empty description="暂无数据" v-else />
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
    <div class="home-product-swiper" v-if="screenWidth <= 960">
      <van-swipe class="my-swipe" :autoplay="3000" v-if="list.length > 0">
        <van-swipe-item v-for="(item, index) in list" :key="index">
          <div class="background-image">
            <van-image :src="item.thumb" lazy-load>
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </div>
        </van-swipe-item>
      </van-swipe>

      <van-empty description="暂无数据" v-else />
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
import { getHotProductCategory, geTHotProduct } from '@/api/index'
import { useIntersectionObserver } from '@vueuse/core'

import { useRouter } from 'vue-router'
const router = useRouter()
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())
import { useConfig } from '@/stores/config'
const { config } = toRefs(useConfig())
const modules = [FreeMode, Pagination, EffectFade, Navigation]
const homeProductDom = ref(null)
const productType = ref([])
const aside = ref(null)
const topic = ref(null)
const productswiper = ref(null)
const gotoProductInfobyid = (item) => {
  // console.log(item)
  const href = router.resolve({
    //使用resolve
    path: '/product/product-info',
    query: {
      id: item.id
    }
  })
  window.open(href.href, '_blank')
}
const list = ref([])

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
  getHotProduct()
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

const getcategory = async () => {
  let res = await getHotProductCategory()
  if (res.status == 1) {
    productType.value = res.data
    getHotProduct()
  }
}

const getHotProduct = async () => {
  let res = await geTHotProduct(productType.value[productTypeIndex.value].id)

  if (res.status == 1) {
    list.value = res.data
  }
}

onMounted(() => {
  getcategory()

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
    background-color: white;
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
    zoom: 1;
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
              zoom: 1;
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

                img {
                  border-radius: 20px !important;
                }
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

@media (min-width: 2133px) {
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
      background-color: white;
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
          width: 1rem;
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
            font-size: 2rem;
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
              height: 1rem;
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
      zoom: 1;
      // opacity: 0;
      .mySwiper {
        width: 100%;
        height: 60vh;
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
              height: calc(100% - 10vh);

              .background-detail {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 40%;
                border-radius: 4vh 4vh 0px 0px !important;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow: hidden;
                transition: all 0.3s ease-in;
                background: #eee;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

                span {
                  width: 100%;
                  height: 160px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 2rem;
                  color: #000000;

                  &:first-child {
                    margin-top: 1vw;
                    font-family:
                      Microsoft YaHei,
                      Microsoft YaHei;
                    font-weight: 400;
                    font-size: 2.5rem;
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
              // border: 1px solid orange;
              .background-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: calc(100% - 10vh);
                zoom: 1;
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
              height: 10vh;

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
                font-size: 2rem;
                color: #333333;
                transition: all 0.3s ease-in;
                border-radius: 0px 0px 4vh 4vh;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
              }
            }

            &:hover {
              .background-detail {
                height: 100%;
                border-radius: 4vh !important;
                transition: all 0.4s ease-in;
              }

              .background-image-box {
                bottom: -8.4vh;
                transform: scale(0.9);
                transform-origin: bottom center;
                transition: all 0.3s ease-in;

                .background-image {
                  // border: 1px solid red;
                  bottom: 0;
                  transform: scale(0.9);
                  transform-origin: bottom center;
                  transition: all 0.2s ease-in;
                  border-radius: 4vh !important;
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
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vw;
        // background-color: pink;
        .left-btn {
          cursor: pointer;

          :deep(.el-image) {
            width: 3rem;
            height: 3rem;
          }
        }

        .right-btn {
          cursor: pointer;

          :deep(.el-image) {
            width: 3rem;
            height: 3rem;
          }
        }
      }
    }
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
      zoom: 1;

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
                zoom: 1;
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
@media (min-width: 1220px) and (max-width: 1440px) {
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
      zoom: 1;
      // opacity: 0;
      .mySwiper {
        width: 100%;
        height: 500px;
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
                zoom: 1;
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
      zoom: 1;

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
                zoom: 1;
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
        height: 40vh;
      }

      :deep(.van-swipe-item) {
        width: 100%;
        height: 100%;
        // border: 1px solid red;
      }
      .background-image {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }

        :deep(.van-image) {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
  }
}
</style>
