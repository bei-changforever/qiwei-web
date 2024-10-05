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
      <swiper :slidesPerView="3" :spaceBetween="30" :freeMode="true" :pagination="{
            clickable: true,
          }" :modules="modules" class="mySwiper">
        <swiper-slide v-for="item in 3" :key="item">
          <div class="product-info">
            <div class="product-info-container">
              <div class="background-detail-box">
                <div class="background-detail">
                  <span>产品展示</span>
                  <span>修颜柔润持妆粉底液</span>
                </div>
              </div>
              <div class="backfround-info-box">
                <div class="background-info">产品展示</div>
              </div>

              <div class="background-image">
                <el-image :src="getAssetsFile('images', '热门产品未选中1.png')" :fit="'fill'" />
              </div>
            </div>
          </div>
        </swiper-slide>


      </swiper>
    </div>
  </div>


</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


const modules = [FreeMode, Pagination]
const productType = ['底纹', '彩妆', '护肤', '清洁', '隔离']
const productTypeIndex = ref(0)

const handleMouseOver = (event) => {


}


const handleMouseOut = (event) => {

}
</script>
<style lang="scss" scoped>
.home-product {
  width: 100%;
  height: 100%;


  .home-product-container {
    margin: 0 auto;
    width: var(--base-width);


    .aside {
      width: 100%;
      height: 50px;
      background-color: brown;
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
        background-color: #f3a7a5;
        border-radius: 1px;
      }
    }

    .topic {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: pink;

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
            background-color: red;
            border: 1px solid #999999;
          }


        }

      }
    }
  }

  .home-product-swiper {
    margin: 0 auto;
    width: var(--base-width);
    transition: all .3s ease-in;
    zoom: 1;

    .product-info {
      // width: 460px;
      height: 580px;

      border: 1px solid red;
      .product-info-container {
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;

        .background-detail-box {
          position: relative;
          width: 100%;
          height: calc(580px - 110px);

          .background-detail {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: pink;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            transition: all .3s ease-in;

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
                margin-top: 50px;
                font-family: Microsoft YaHei, Microsoft YaHei;
                font-weight: 400;
                font-size: 30px;
                color: #000000;
              }
            }
          }
        }



        .background-image {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: calc(580px - 110px);
          zoom: 1;

          :deep(.el-image) {
            width: 100%;
            height: 100%;
          }


        }

        .backfround-info-box {
          position: relative;
          width: 100%;
          height: 110px;

          .background-info {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Microsoft YaHei, Microsoft YaHei;
            font-weight: 400;
            font-size: 30px;
            color: #333333;
            transition: all .3s ease-in;
          }

        }



        &:hover {

          .background-detail {
            height: calc(580px - 110px);
            transition: all .4s ease-in;
          }

          // .background-image  {
          //   bottom: 0;
          //   transform: scale(0.6);
          //   transform-origin: bottom center;
          //   transition: all .3s ease-in;
          // }
          .background-info {
            height: 0;
            transition: all .3s ease-in;
          }
        }
      }
    }
  }
}
</style>
