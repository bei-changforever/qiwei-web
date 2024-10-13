<template>
  <div class="about-history" id="about-history">
    <div class="about-history-container">
      <div class="about-history-container-top">
        <div class="T-left">
          <div class="topic">
            <div class="block"></div>
            <div class="text">EVOLUTION</div>
          </div>
          <div class="name">公司沿革</div>
        </div>
        <div class="T-right">
          <div class="swiper-btn">
            <div class="prev">
              <el-image :src="getAssetsFile('icon', 'left.png')" :fit="'fill'" />
            </div>
            <div class="next">
              <el-image :src="getAssetsFile('icon', 'right.png')" :fit="'fill'" />
            </div>
          </div>
        </div>
      </div>
      <div class="about-history-container-bottom">
        <swiper class="mySwiper">
          <swiper-slide>
            <div class="about-history-container-bottom-content">
              <div class="content-background-image"></div>
              <div class="content-text">
                <div class="text-title">
                  <div class="block"></div>

                  <div class="time">SINCE 1996</div>
                  <div class="text-content is-no">
                    <div class="content-time">1997-2002</div>
                    <div class="content-detail">
                      <div class="text">荣获"国家高新技术企业"认 证</div>
                      <div class="text">底妆类项目投产</div>
                      <div class="text">研发、产能全面升级</div>
                    </div>
                    <div class="image">
                      <img :src="getAssetsFile('images', '选中时间图片.png')" alt="" />
                    </div>
                  </div>
                </div>

                <div class="text-title">
                  <div class="block"></div>

                  <div class="time">SINCE 1996</div>
                  <div class="text-content is-no">
                    <div class="content-time">1997-2002</div>
                    <div class="content-detail">
                      <div class="text">荣获"国家高新技术企业"认 证</div>
                      <div class="text">底妆类项目投产</div>
                      <div class="text">研发、产能全面升级</div>
                    </div>
                    <div class="image">
                      <img :src="getAssetsFile('images', '选中时间图片.png')" alt="" />
                    </div>
                  </div>
                </div>
                <div class="text-title">
                  <div class="block"></div>

                  <div class="time">SINCE 1996</div>
                  <div class="text-content is-no">
                    <div class="content-time">1997-2002</div>
                    <div class="content-detail">
                      <div class="text">荣获"国家高新技术企业"认 证</div>
                      <div class="text">底妆类项目投产</div>
                      <div class="text">研发、产能全面升级</div>
                    </div>
                    <div class="image">
                      <img :src="getAssetsFile('images', '选中时间图片.png')" alt="" />
                    </div>
                  </div>
                </div>
                <div class="text-title">
                  <div class="block"></div>

                  <div class="time">SINCE 1996</div>
                  <div class="text-content is-no">
                    <div class="content-time">1997-2002</div>
                    <div class="content-detail">
                      <div class="text">荣获"国家高新技术企业"认 证</div>
                      <div class="text">底妆类项目投产</div>
                      <div class="text">研发、产能全面升级</div>
                    </div>
                    <div class="image">
                      <img :src="getAssetsFile('images', '选中时间图片.png')" alt="" />
                    </div>
                  </div>
                </div>
                <div class="text-title">
                  <div class="block"></div>

                  <div class="time">SINCE 1996</div>
                  <div class="text-content">
                    <div class="content-time">1997-2002</div>
                    <div class="content-detail">
                      <div class="text">荣获"国家高新技术企业"认 证</div>
                      <div class="text">底妆类项目投产</div>
                      <div class="text">研发、产能全面升级</div>
                    </div>
                    <div class="image">
                      <img :src="getAssetsFile('images', '选中时间图片.png')" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="about-history-container-bottom-content">
              <div class="content-background-image unback"></div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="about-history-container-bottom-content">
              <div class="content-background-image"></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
</script>
<style lang="scss" scoped>
.about-history {
  width: 100vw;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  background-color: white;
  padding-top: 12vh;
  box-sizing: border-box;
  // background-color: pink;
  .about-history-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .about-history-container-top {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .T-left {
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
      }

      .T-right {
        .swiper-btn {
          margin-top: 5vh;
          display: flex;
          gap: 1vw;

          :deep(.el-image) {
            width: 40px;
            height: 40px;
            cursor: pointer;
          }
        }
      }
    }

    .about-history-container-bottom {
      width: 100%;

      .about-history-container-bottom-content {
        width: 100%;
        position: relative;
        height: 60vh;

        .content-background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('../../assets/images/时间背景.png');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;

          &.unback {
            transform: rotateY(180deg);
          }
        }

        .content-text {
          position: absolute;
          top: 0;
          left: 0;
          // border: 1px solid red;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2vw;

          .text-title {
            position: relative;
            cursor: pointer;

            // background-color: orange;

            .text-content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 20px;
              box-sizing: border-box;
              z-index: 2;

              &.is-no {
                display: none;
              }

              .content-time {
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: bold;
                font-size: 32px;
                color: #333333;
                margin-bottom: 1vh;
              }

              .content-detail {
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 14px;
                color: #333333;
                margin-bottom: 2.5vh;

                .text {
                  position: relative;
                  margin-left: 1vw;

                  &::after {
                    content: '';
                    position: absolute;
                    left: -10px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: #b9b9b9;
                  }
                }
              }

              .image {
                width: 100%;
                height: 230px;

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                }
              }
            }

            &:nth-child(1) {
              .text-content {
                position: absolute;
                top: -15vh;
                left: 160px;
                width: 320px;
                height: 420px;
                background-image: url('../../assets/images/选中时间背景.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
              }
            }

            &:nth-child(2) {
              margin-bottom: 15vh;

              .text-content {
                position: absolute;
                top: -15vh;
                left: 160px;
                width: 320px;
                height: 420px;
                background-image: url('../../assets/images/选中时间背景.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
              }
            }

            &:nth-child(3) {
              margin-bottom: 16vh;

              .text-content {
                position: absolute;
                top: -15vh;
                left: 160px;
                width: 320px;
                height: 420px;
                background-image: url('../../assets/images/选中时间背景.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
              }
            }

            &:nth-child(4) {
              margin-bottom: 12vh;

              .text-content {
                position: absolute;
                top: -15vh;
                left: 160px;
                width: 320px;
                height: 420px;
                background-image: url('../../assets/images/选中时间背景.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
              }
            }

            &:nth-child(5) {
              margin-bottom: 25vh;

              .text-content {
                position: absolute;
                top: -10vh;
                left: -360px;
                width: 320px;
                height: 420px;
                background-image: url('../../assets/images/选中时间背景.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
              }
            }

            .block {
              position: relative;
              width: 6px;
              height: 6px;
              background-color: #f3a7a5;
              border-radius: 50%;

              &::after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 2px;
                height: 200px;
                background: linear-gradient(to bottom, #f3a7a5, white);
              }
            }

            .time {
              margin-left: 1vw;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 24px;
              color: #333333;
            }
          }
        }
      }
    }
  }
}
</style>
