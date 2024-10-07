<template>

  <div class="home-product">
    <div class="home-product-container">
      <div class="aside">
        <div class="block"></div>
        <div class="text">PRODUCT</div>
      </div>
      <div class="topic">
        <div class="left">热门产品</div>
        <div class="right">
          <div v-for="(item, index) in productType" :class="['right-item', productTypeIndex == index ? 'active' : '']">
            <div class="text">{{ item }}</div>
            <div class="block" v-show="index !== productType.length - 1"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-product-swiper">
      <swiper @swiper="onSwiper" :slidesPerView="3" :spaceBetween="100" :freeMode="true" :navigation="true"
        :modules="modules" class="mySwiper">
        <swiper-slide v-for="item in 6" :key="item">
          <div class="product-info">
            <div class="product-info-container">
              <div class="background-detail-box">
                <div class="background-detail">
                  <span>产品展示</span>
                  <span>修颜柔润持妆粉底液</span>
                </div>
              </div>
              <div class="backfround-info-box">
                <div class="background-info">
                  <span> 产品展示</span>
                </div>
              </div>
              <div class="background-image-box">
                <div class="background-image">
                  <el-image :src="getAssetsFile('images', '热门产品未选中1.png')" :fit="'fill'" />
                </div>
              </div>

            </div>
          </div>
        </swiper-slide>


      </swiper>
      <div class="home-product-swiper-pagination">
        <div class="left-btn">
          <el-image :src="getAssetsFile('icon', 'left.png')" :fit="'fill'" @click="bannerSwiperPrev" />
        </div>
        <div class="right-btn">
          <el-image :src="getAssetsFile('icon', 'right.png')" :fit="'fill'" @click="bannerSwiperNext" />
        </div>
      </div>
    </div>

  </div>


</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { FreeMode, Pagination, EffectFade, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';


const modules = [FreeMode, Pagination, EffectFade, Navigation]
const productType = ['底纹', '彩妆', '护肤', '清洁', '隔离']
const productTypeIndex = ref(0)
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
</script>
<style lang="scss" scoped>
.home-product {

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .home-product-container {
    width: var(--base-width);


    .aside {
      width: 100%;
      height: 50px;

      display: flex;
      align-items: center;
      gap: 10px;

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

    .topic {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        width: 50%;
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: bold;
        font-size: 42px;
        color: #333333;
      }

      .right {
        width: 40%;

        display: flex;
        justify-content: flex-end;
        // gap: 8%;

        .right-item {
          position: relative;
          font-family: Microsoft YaHei, Microsoft YaHei;
          font-weight: 400;
          font-size: 22px;
          color: #333333;
          cursor: pointer;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-right: 14px;

          &:last-child {
            margin-right: 0;
          }

          &.active {
            color: #F3A7A5;
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
    margin-top: 20px;
    width: var(--base-width);
    transition: all .3s ease-in;
    zoom: 1;

    .mySwiper {
      width: 100%;
      height: 450px;
    


      .product-info {
        width: 98%;
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
            height: calc(100% - 60px);


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
              transition: all .3s ease-in;
              background: #eee;
              box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

              span {
                width: 100%;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: Microsoft YaHei, Microsoft YaHei;
                font-weight: 400;
                font-size: 24px;
                color: #000000;

                &:first-child {
                  margin-top: 30px;
                  font-family: Microsoft YaHei, Microsoft YaHei;
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
              height: calc(100% - 60px);
              zoom: 1;
              transition: all .3s ease-in;

              :deep(.el-image) {
                width: 100%;
                height: 100%;
              }


            }

          }


          .backfround-info-box {
            position: relative;
            width: 100%;
            height: 60px;

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
              font-family: Microsoft YaHei, Microsoft YaHei;
              font-weight: 400;
              font-size: 26px;
              color: #333333;
              transition: all .3s ease-in;
              border-radius: 0px 0px 10px 10px;
              box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            }

          }



          &:hover {

            .background-detail {
              height: 100%;
              border-radius: 10px 10px 10px 10px;
              transition: all .4s ease-in;

            }

            .background-image-box {
              bottom: -10%;
              transform: scale(0.8);
              transform-origin: bottom center;
              transition: all .3s ease-in;

              .background-image {
                bottom: 0;
                transform: scale(0.8);
                transform-origin: bottom center;
                transition: all .2s ease-in;
              }
            }


            .background-info {
              height: 0;
              transition: all .3s ease-in;

            }
          }
        }
      }
    }



    .home-product-swiper-pagination {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2%;


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
</style>
