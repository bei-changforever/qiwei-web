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
              <el-image
                :src="getAssetsFile('icon', 'left.png')"
                :fit="'fill'"
                @click="bannerSwiperPrev"
              />
            </div>
            <div class="next">
              <el-image
                :src="getAssetsFile('icon', 'right.png')"
                :fit="'fill'"
                @click="bannerSwiperNext"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="about-history-container-bottom" v-if="PAGEWIDTH > 960">
        <swiper class="mySwiper" @swiper="onSwiper">
          <swiper-slide>
            <div class="about-history-container-bottom-content">
              <div class="content-background-image"></div>
              <div class="content-text">
                <div
                  class="text-title"
                  v-for="(item, index) in list"
                  :key="index"
                  @mouseleave="handleMouseleave(index)"
                >
                  <div class="block"></div>

                  <div class="time" @mouseenter="handleMouseenter(index)">{{ item.year }}</div>
                  <div :class="['text-content', activeIndex == index ? '' : 'is-no']">
                    <div class="content-time">{{ item.content.year }}</div>
                    <div class="content-detail" v-for="(d, i2) in item.content.detail" :key="i2">
                      <div class="text">{{ d.text }}</div>
                    </div>
                    <div class="image">
                      <img :src="item.content.src" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="about-history-container-bottom-content">
              <div class="content-background-image unback">
                <div class="content-text reback">
                  <div
                    class="text-title"
                    v-for="(item, index) in list2"
                    :key="index"
                    @mouseleave="handleMouseleave(index)"
                  >
                    <div class="block"></div>

                    <div class="time" @mouseenter="handleMouseenter(index)">{{ item.year }}</div>
                    <div :class="['text-content', activeIndex == index ? '' : 'is-no']">
                      <div class="content-time">{{ item.content.year }}</div>
                      <div class="content-detail" v-for="(d, i2) in item.content.detail" :key="i2">
                        <div class="text">{{ d.text }}</div>
                      </div>
                      <div class="image">
                        <img :src="item.content.src" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="about-history-container-bottom-content">
              <div class="content-background-image"></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="mobile-history" v-else>
        <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item v-for="(item, index) in mobileList" :key="index">
            <div class="text-content">
              <div class="content-time">{{ item.year }}</div>
              <div class="content-detail" v-for="(d, i2) in item.detail" :key="i2">
                <div class="text">{{ d.text }}</div>
              </div>
              <div class="image">
                <img :src="item.src" alt="" />
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
import { ref, onMounted, onBeforeUnmount, shallowRef, nextTick, watch, toRefs } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())

const list = [
  {
    year: 'SINCE 1996',
    content: {
      year: 'SINCE 1996',
      detail: [
        {
          text: '荣获"国家高新技术企业"认证'
        },
        {
          text: '底妆类项目投产'
        },
        {
          text: '研发、产能全面升级'
        }
      ],
      src: getAssetsFile('images', '选中时间图片.png')
    }
  },
  {
    year: '1997-2002',
    content: {
      year: '1997-2002',
      detail: [
        {
          text: '荣获"国家高新技术企业"认证'
        },
        {
          text: '底妆类项目投产'
        },
        {
          text: '研发、产能全面升级'
        }
      ],
      src: getAssetsFile('images', '选中时间图片.png')
    }
  },
  {
    year: '2003-2010',
    content: {
      year: '2003-2010',
      detail: [
        {
          text: '荣获"国家高新技术企业"认证'
        },
        {
          text: '底妆类项目投产'
        },
        {
          text: '研发、产能全面升级'
        }
      ],
      src: getAssetsFile('images', '选中时间图片.png')
    }
  },
  {
    year: '2011-2015',
    content: {
      year: '2011-2015',
      detail: [
        {
          text: '荣获"国家高新技术企业"认证'
        },
        {
          text: '底妆类项目投产'
        },
        {
          text: '研发、产能全面升级'
        }
      ],
      src: getAssetsFile('images', '选中时间图片.png')
    }
  },
  {
    year: '2016-2021',
    content: {
      year: '2016-2021',
      detail: [
        {
          text: '荣获"国家高新技术企业"认证'
        },
        {
          text: '底妆类项目投产'
        },
        {
          text: '研发、产能全面升级'
        }
      ],
      src: getAssetsFile('images', '选中时间图片.png')
    }
  }
]

const list2 = [
  {
    year: '2022-2024',
    content: {
      year: '2022-2024',
      detail: [
        {
          text: '荣获"国家高新技术企业"认证'
        },
        {
          text: '底妆类项目投产'
        },
        {
          text: '研发、产能全面升级'
        }
      ],
      src: getAssetsFile('images', '选中时间图片.png')
    }
  }
]

const mobileList = [
  {
    year: 'SINCE 1996',
    detail: [
      {
        text: '荣获"国家高新技术企业"认证'
      },
      {
        text: '底妆类项目投产'
      },
      {
        text: '研发、产能全面升级'
      }
    ],
    src: getAssetsFile('images', '选中时间图片.png')
  },
  {
    year: '1997-2002',
    detail: [
      {
        text: '荣获"国家高新技术企业"认证'
      },
      {
        text: '底妆类项目投产'
      },
      {
        text: '研发、产能全面升级'
      }
    ],
    src: getAssetsFile('images', '选中时间图片.png')
  },
  {
    year: '2003-2010',
    detail: [
      {
        text: '荣获"国家高新技术企业"认证'
      },
      {
        text: '底妆类项目投产'
      },
      {
        text: '研发、产能全面升级'
      }
    ],
    src: getAssetsFile('images', '选中时间图片.png')
  },
  {
    year: '2011-2015',
    detail: [
      {
        text: '荣获"国家高新技术企业"认证'
      },
      {
        text: '底妆类项目投产'
      },
      {
        text: '研发、产能全面升级'
      }
    ],
    src: getAssetsFile('images', '选中时间图片.png')
  },
  {
    year: '2016-2021',
    detail: [
      {
        text: '荣获"国家高新技术企业"认证'
      },
      {
        text: '底妆类项目投产'
      },
      {
        text: '研发、产能全面升级'
      }
    ],
    src: getAssetsFile('images', '选中时间图片.png')
  },
  {
    year: '2022-2024',
    detail: [
      {
        text: '荣获"国家高新技术企业"认证'
      },
      {
        text: '底妆类项目投产'
      },
      {
        text: '研发、产能全面升级'
      }
    ],
    src: getAssetsFile('images', '选中时间图片.png')
  }
]

const activeIndex = ref(-1)
const handleMouseenter = (index) => {
  activeIndex.value = index
}
const handleMouseleave = (index) => {
  activeIndex.value = -1
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
    width: 100%;
    transition: all 0.3s ease-in;
    // zoom: 1;

    .about-history-container-top {
      margin: 0 auto;
      width: var(--base-width);
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
      height: 60vh;
      // background-color: pink;
      // border: 1px solid red;
      background-image: url('../../assets/images/公司历程.gif');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      .about-history-container-bottom-content {
        width: 100%;
        position: relative;
        // border: 1px solid red;
        height: 100%;
        // display: flex;
        // justify-content: space-between;

        .content-background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          // background-image: url('../../assets/images/时间背景.png');
          // background-size: cover;
          // background-position: center center;
          // background-repeat: no-repeat;

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
          justify-content: space-around;
          gap: 2vw;

          &.reback {
            transform: rotateY(180deg);
          }

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
                top: -20vh;
                left: 160px;
                width: 320px;
                height: 460px;
                border-radius: 10px;
                background-image: url('../../assets/images/选中时间背景.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                
              }
            }

            &:nth-child(2) {
              margin-bottom: 0vh;

              .text-content {
                position: absolute;
                top: -20vh;
                left: 160px;
                width: 320px;
                height: 460px;
                border-radius: 10px;
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
                height: 460px;
                border-radius: 10px;
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
                height: 460px;
                border-radius: 10px;
                background-image: url('../../assets/images/选中时间背景.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
              }
            }

            &:nth-child(5) {
              margin-bottom: 40vh;

              .text-content {
                position: absolute;
                top: 0vh;
                left: -360px;
                width: 320px;
                height: 460px;
                border-radius: 10px;
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
                height: 160px;
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

@media (max-width: 960px) {
  .about-history {
    width: 100vw;
    height: auto;
    display: flex;
    // align-items: center;
    justify-content: center;
    background-color: white;
    padding-top: 0;
    box-sizing: border-box;

    // background-color: pink;
    .about-history-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      // zoom: 1;
      padding: 2vh;
      box-sizing: border-box;
      .about-history-container-top {
        width: 100%;
        display: flex;
        justify-content: space-between;

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
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 18px;
            color: #333333;
          }
        }

        .T-right {
          width: 100%;
          display: none;
          align-items: center;
          justify-content: center;

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
        padding: 5vh;
        box-sizing: border-box;

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

      .mobile-history {
        margin-top: 1vh;
        .text-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2vh;
          box-sizing: border-box;
          width: 100%;
          height: 465px;
          border-radius: 20px;
          background-image: url('../../assets/images/选中时间背景.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;

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
      }
    }
  }
}
</style>
