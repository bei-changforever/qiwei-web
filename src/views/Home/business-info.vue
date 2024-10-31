<template>
  <div
    class="business-info"
    :style="{
      'background-color': config && config.background_company ? config.background_company : 'white'
    }"
  >
    <div class="business-container">
      <div class="business-container-top">
        <div class="business-container-left">
          <div class="business-container-left-item" ref="businessLeftDom">
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
              <span>{{ config.description }}</span>
              <div class="small-konw-more-about" @click="clickRouter">
                <div class="text">了解更多</div>
                <el-icon class="about-icon">
                  <CirclePlusFilled />
                </el-icon>
              </div>
            </div>
            <div
              :class="[
                'desc',
                showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInUp' : ''
              ]"
            >
              {{ config.home_comany_description }}
            </div>
            <div
              :class="[
                'konw-more-about',
                showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__zoomInUp' : ''
              ]"
              @click="clickRouter"
            >
              <div class="text">了解更多</div>
              <el-icon class="about-icon">
                <CirclePlusFilled />
              </el-icon>
            </div>
          </div>
        </div>
        <div
          :class="[
            'business-container-right',
            showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__zoomIn' : ''
          ]"
        >
          <video
            class="video"
            controls
            :src="config.home_company_video"
            :poster="config.home_company_video_img"
            ref="videoDom"
          ></video>
          <el-image
            v-if="!isPlay"
            class="mark"
            :src="config.home_company_video_img"
            :fit="'fill'"
          />
          <div class="play-btn">
            <el-image
              :src="getAssetsFile('icon', 'play.png')"
              :fit="'fill'"
              @click="playVideo"
              v-if="!isPlay"
            />
            <el-image
              class="is-active"
              :src="getAssetsFile('icon', '暂停.png')"
              :fit="'fill'"
              @click="stopVideo"
              v-else
            />
          </div>
        </div>
      </div>
      <div
        :class="[
          'business-container-bottom',
          showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__flipInX' : ''
        ]"
      >
        <div class="business-container-bottom-container" ref="countDom" v-if="config">
          <div class="business-container-bottom-top">
            <div class="bussiness-container-bottom-top-left">
              <count-to
                ref="cunt0"
                :startVal="0"
                :endVal="Number(config.home_comany_1)"
                :duration="4000"
                :separator="null"
                :autoplay="false"
              ></count-to>
              <!-- <van-rolling-text :start-num="0" :target-num="28" /> -->
            </div>
            <div class="bussiness-container-bottom-top-right">年</div>
          </div>
          <div class="business-container-bottom-bottom">公司成立</div>
        </div>
        <div class="business-container-bottom-container">
          <div class="business-container-bottom-top">
            <div class="bussiness-container-bottom-top-left">
              <count-to
                ref="cunt1"
                :startVal="0"
                :endVal="Number(config.home_comany_2)"
                :duration="4000"
                :separator="null"
                :autoplay="false"
              ></count-to>
            </div>
            <div class="bussiness-container-bottom-top-right">万m²</div>
          </div>
          <div class="business-container-bottom-bottom">自有建筑面积</div>
        </div>
        <div class="business-container-bottom-container">
          <div class="business-container-bottom-top">
            <div class="bussiness-container-bottom-top-left plus">
              <count-to
                ref="cunt2"
                :startVal="0"
                :endVal="Number(config.home_comany_3)"
                :duration="4000"
                :separator="null"
                :autoplay="false"
              ></count-to>
            </div>
            <div class="bussiness-container-bottom-top-right">国家</div>
          </div>
          <div class="business-container-bottom-bottom">国家销售</div>
        </div>
        <div class="business-container-bottom-container">
          <div class="business-container-bottom-top">
            <div class="bussiness-container-bottom-top-left plus">
              <count-to
                ref="cunt3"
                :startVal="0"
                :endVal="Number(config.home_comany_4)"
                :duration="4000"
                :separator="null"
                :autoplay="false"
              ></count-to>
            </div>
            <div class="bussiness-container-bottom-top-right">位</div>
          </div>
          <div class="business-container-bottom-bottom">服务客户</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, toRefs, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { CountTo } from 'vue3-count-to'
import { useRouter } from 'vue-router'
import emitter from '@/utils/mitt'
import { useIntersectionObserver } from '@vueuse/core'
import { useCounterStore } from '@/stores/screenWidth'
import { useConfig } from '@/stores/config'
const { config } = toRefs(useConfig())
const { screenWidth } = toRefs(useCounterStore())
const router = useRouter()
const countDom = ref(null)
const cunt0 = ref(null)
const cunt1 = ref(null)
const cunt2 = ref(null)
const cunt3 = ref(null)
const businessLeftDom = ref(null)
const isPlay = ref(false)
const showCount = () => {
  cunt0.value.start()
  cunt1.value.start()
  cunt2.value.start()
  cunt3.value.start()
}
const clickRouter = () => {
  router.push('/about')
  emitter.emit('DOMINDEX', 4)
}
const videoDom = ref(null)
const showAnimation = ref(false)
const playVideo = () => {
  if (!isPlay.value) {
    isPlay.value = true
    videoDom.value.play()
    videoDom.value.volume = 1
  }
}

const stopVideo = () => {
  isPlay.value = false
  videoDom.value.pause()
  videoDom.value.volume = 0
}
onMounted(() => {
  useIntersectionObserver(
    countDom,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        showCount()
        showAnimation.value = true
      } else {
        videoDom.value.pause()
        // videoDom.value.currentTime = 0
        videoDom.value.currentTime = 0
        isPlay.value = false
        videoDom.value.volume = 0
      }
    },
    { threshold: 0.5 }
  )
})

const PAGEWIDTH = ref(window.innerWidth)
watch(
  () => screenWidth.value,
  (newVal, oldVal) => {
    PAGEWIDTH.value = newVal
  }
)
</script>
<style lang="scss" scoped>
.business-info {
  width: 100vw;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  padding-top: 15vh;
  .business-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .business-container-top {
      width: 100%;
      gap: 5%;
      display: flex;

      .business-container-left {
        width: 50%;
        height: auto;

        .business-container-left-item {
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

            .small-konw-more-about {
              // margin-top: 5vh;
              width: 150px;
              height: 40px;
              border-radius: 50px;
              display: none;
              align-items: center;
              justify-content: space-between;
              border: 1px solid #f3a7a5;

              .text {
                width: 80%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 18px;
                color: #f3a7a5;
                text-align: center;
                text-indent: 0.5em;
              }

              .about-icon {
                color: #f3a7a5;
                font-size: 40px;
              }
            }
          }

          .desc {
            margin-top: 3vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: var(--desc-fontSize);
            color: #666666;
            line-height: var(--desc-lineHeight);
          }

          .konw-more-about {
            margin-top: 5vh;
            width: 166px;
            height: 46px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #f3a7a5;
            cursor: pointer;

            .text {
              width: 80%;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 20px;
              color: #f3a7a5;
              text-align: center;
              text-indent: 0.5em;
            }

            .about-icon {
              color: #f3a7a5;
              font-size: 46px;
            }

            &:hover {
              background-color: #f3a7a5;
              .text {
                color: white;
              }

              .about-icon {
                color: white;
                font-size: 46px;
              }
            }
          }
        }
      }

      .business-container-right {
        width: 800px;
        height: 450px;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        // border: 1px solid red;
        .video {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
        :deep(.el-image) {
          width: 100%;
          height: 100%;
        }

        .mark {
          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
        }
        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          cursor: pointer;
          transform: translate(-50%, -50%);
          .is-active {
            display: none;
          }
          :deep(.el-image) {
            width: 60px;
            height: 60px;
          }

          &:hover {
            :deep(.el-image) {
              filter: brightness(0.5);
            }
          }
        }

        &:hover {
          .play-btn {
            .is-active {
              display: block;
            }
          }
        }
      }
    }

    .business-container-bottom {
      margin-top: 10vh;
      width: 100%;
      height: 130px;
      display: flex;
      gap: 4%;
      justify-content: center;
      align-items: center;

      .business-container-bottom-container {
        width: 20%;

        .business-container-bottom-top {
          width: 100%;
          display: flex;

          .bussiness-container-bottom-top-left {
            position: relative;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 72px;
            color: #f3a7a5;
            line-height: 0px;

            &.plus {
              &::after {
                content: '+';
                position: absolute;
                top: -20px;
                right: -20px;
                font-size: 26px;
              }
            }
          }

          .bussiness-container-bottom-top-right {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 20px;
            color: #333333;
            margin-left: 10px;
          }
        }

        .business-container-bottom-bottom {
          margin-top: 10px;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 20px;
          color: #333333;
        }
      }
    }
  }
}

@media (min-width: 2014px) {
  .business-info {
    width: 100vw;
    height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    padding-top: 15vh;
    .business-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;

      .business-container-top {
        width: 100%;
        gap: 5%;
        display: flex;

        .business-container-left {
          width: 50%;
          height: auto;

          .business-container-left-item {
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
                width: 40px;
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

              .small-konw-more-about {
                // margin-top: 5vh;
                width: 150px;
                height: 40px;
                border-radius: 50px;
                display: none;
                align-items: center;
                justify-content: space-between;
                border: 1px solid #f3a7a5;

                .text {
                  width: 80%;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 18px;
                  color: #f3a7a5;
                  text-align: center;
                  text-indent: 0.5em;
                }

                .about-icon {
                  color: #f3a7a5;
                  font-size: 40px;
                }
              }
            }

            .desc {
              margin-top: 3vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: var(--desc-fontSize);
              color: #666666;
              line-height: var(--desc-lineHeight);
            }

            .konw-more-about {
              margin-top: 5vh;
              width: 8vw;
              height: 5vh;
              border-radius: 100px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              border: 1px solid #f3a7a5;
              cursor: pointer;

              .text {
                width: 80%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 70px;
                color: #f3a7a5;
                text-align: center;
                text-indent: 0.5em;
              }

              .about-icon {
                color: #f3a7a5;
                font-size: 200px;
              }

              &:hover {
                background-color: #f3a7a5;
                .text {
                  color: white;
                }

                .about-icon {
                  color: white;
                  font-size: 200px;
                }
              }
            }
          }
        }

        .business-container-right {
          width: 45vw;
          height: 45vh;
          position: relative;
          border-radius: 4vh !important;
          overflow: hidden;
          // border: 1px solid red;
          .video {
            width: 100%;
            height: 100%;
            border-radius: 4vh;
          }
          :deep(.el-image) {
            width: 100%;
            height: 100%;
          }

          .mark {
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
          }
          .play-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            cursor: pointer;
            transform: translate(-50%, -50%);
            .is-active {
              display: none;
            }
            :deep(.el-image) {
              width: 250px;
              height: 250px;
            }

            &:hover {
              :deep(.el-image) {
                filter: brightness(0.5);
              }
            }
          }

          &:hover {
            .play-btn {
              .is-active {
                display: block;
              }
            }
          }
        }
      }

      .business-container-bottom {
        margin-top: 10vh;
        width: 100%;
        height: 20vh;
        display: flex;
        gap: 4%;
        justify-content: center;
        align-items: center;
        // background-color: orange;
        .business-container-bottom-container {
          width: 20%;

          .business-container-bottom-top {
            width: 100%;
            display: flex;

            .bussiness-container-bottom-top-left {
              position: relative;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 20rem;
              color: #f3a7a5;
              line-height: 0px;

              &.plus {
                &::after {
                  content: '+';
                  position: absolute;
                  top: -10rem;
                  right: -10rem;
                  font-size: 10rem;
                }
              }
            }

            .bussiness-container-bottom-top-right {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 5rem;
              color: #333333;
              margin-left: 10px;
            }
          }

          .business-container-bottom-bottom {
            margin-top: 1vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 5rem;
            color: #333333;
          }
        }
      }
    }
  }
}

@media (min-width: 1440px) and (max-width: 1520px) {
  .business-info {
    width: 100vw;
    height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    padding-top: 15vh;
    .business-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;

      .business-container-top {
        width: 100%;
        gap: 5%;
        display: flex;

        .business-container-left {
          width: 50%;
          height: auto;

          .business-container-left-item {
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

              .small-konw-more-about {
                // margin-top: 5vh;
                width: 150px;
                height: 40px;
                border-radius: 50px;
                display: none;
                align-items: center;
                justify-content: space-between;
                border: 1px solid #f3a7a5;

                .text {
                  width: 80%;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 18px;
                  color: #f3a7a5;
                  text-align: center;
                  text-indent: 0.5em;
                }

                .about-icon {
                  color: #f3a7a5;
                  font-size: 40px;
                }
              }
            }

            .desc {
              margin-top: 3vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: var(--desc-fontSize);
              color: #666666;
              line-height: var(--desc-lineHeight);
            }

            .konw-more-about {
              margin-top: 5vh;
              width: 166px;
              height: 46px;
              border-radius: 50px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              border: 1px solid #f3a7a5;
              cursor: pointer;
              .text {
                width: 80%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 20px;
                color: #f3a7a5;
                text-align: center;
                text-indent: 0.5em;
              }

              .about-icon {
                color: #f3a7a5;
                font-size: 46px;
              }
            }
          }
        }

        .business-container-right {
          width: 800px;
          height: 450px;
          position: relative;
          .video {
            width: 100%;
            height: 100%;
          }
          :deep(.el-image) {
            width: 100%;
            height: 100%;
          }

          .play-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            :deep(.el-image) {
              width: 60px;
              height: 60px;
            }
          }
        }
      }

      .business-container-bottom {
        margin-top: 10vh;
        width: 100%;
        height: 130px;
        display: flex;
        gap: 4%;
        justify-content: center;
        align-items: center;

        .business-container-bottom-container {
          width: 20%;

          .business-container-bottom-top {
            width: 100%;
            display: flex;

            .bussiness-container-bottom-top-left {
              position: relative;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 72px;
              color: #f3a7a5;
              line-height: 0px;

              &.plus {
                &::after {
                  content: '+';
                  position: absolute;
                  top: -20px;
                  right: -20px;
                  font-size: 26px;
                }
              }
            }

            .bussiness-container-bottom-top-right {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 20px;
              color: #333333;
              margin-left: 10px;
            }
          }

          .business-container-bottom-bottom {
            margin-top: 10px;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 20px;
            color: #333333;
          }
        }
      }
    }
  }
}

@media (min-width: 960px) and (max-width: 1220px) {
  .business-info {
    width: 100vw;
    height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    padding-top: 15vh;
    .business-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;
      // background-color: orange;
      .business-container-top {
        width: 100%;
        gap: 5%;
        display: flex;
        align-items: center;
        flex-direction: column;
        .business-container-left {
          width: 100%;
          height: auto;

          .business-container-left-item {
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
              display: flex;
              justify-content: space-between;

              .small-konw-more-about {
                // margin-top: 5vh;
                width: 150px;
                height: 40px;
                border-radius: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: 1px solid #f3a7a5;
                cursor: pointer;
                .text {
                  width: 80%;
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 18px;
                  color: #f3a7a5;
                  text-align: center;
                  text-indent: 0.5em;
                }

                .about-icon {
                  color: #f3a7a5;
                  font-size: 40px;
                }
              }
            }

            .desc {
              margin-top: 2vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: var(--desc-fontSize);
              color: #666666;
              line-height: var(--desc-lineHeight);
            }

            .konw-more-about {
              margin-top: 5vh;
              width: 150px;
              height: 40px;
              border-radius: 50px;
              display: none;
              align-items: center;
              justify-content: space-between;
              border: 1px solid #f3a7a5;

              .text {
                width: 80%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 18px;
                color: #f3a7a5;
                text-align: center;
                text-indent: 0.5em;
              }

              .about-icon {
                color: #f3a7a5;
                font-size: 40px;
              }
            }
          }
        }

        .business-container-right {
          margin-top: 2vh;
          width: 800px;
          height: 450px;
          position: relative;
          .video {
            width: 100%;
            height: 100%;
          }
          :deep(.el-image) {
            width: 100%;
            height: 100%;
          }

          .play-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            :deep(.el-image) {
              width: 60px;
              height: 60px;
            }
          }
        }
      }

      .business-container-bottom {
        margin-top: 2vh;
        width: 100%;
        height: 120px;
        display: flex;
        gap: 4%;
        justify-content: center;
        align-items: center;

        .business-container-bottom-container {
          width: 20%;

          .business-container-bottom-top {
            width: 100%;
            display: flex;

            .bussiness-container-bottom-top-left {
              position: relative;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 60px;
              color: #f3a7a5;
              line-height: 0px;

              &.plus {
                &::after {
                  content: '+';
                  position: absolute;
                  top: -20px;
                  right: -20px;
                  font-size: 20px;
                }
              }
            }

            .bussiness-container-bottom-top-right {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #333333;
              margin-left: 10px;
            }
          }

          .business-container-bottom-bottom {
            margin-top: 10px;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 18px;
            color: #333333;
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .business-info {
    width: 100vw;
    height: auto;
    display: flex;
    // align-items: center;
    justify-content: center;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    padding-top: 0;
    .business-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;
      padding: 2vh;
      box-sizing: border-box;
      .business-container-top {
        width: 100%;
        gap: 5%;
        display: flex;
        flex-direction: column;

        .business-container-left {
          width: 100%;
          height: auto;

          .business-container-left-item {
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
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 18px;
              color: #333333;
            }

            .desc {
              margin-top: 2vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #666666;
              line-height: var(--desc-lineHeight);
            }

            .konw-more-about {
              margin-top: 5vh;
              width: 150px;
              height: 40px;
              border-radius: 50px;
              display: none;
              align-items: center;
              justify-content: space-between;
              border: 1px solid #f3a7a5;

              .text {
                width: 80%;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 18px;
                color: #f3a7a5;
                text-align: center;
                text-indent: 0.5em;
              }

              .about-icon {
                color: #f3a7a5;
                font-size: 40px;
              }
            }
          }
        }

        .business-container-right {
          margin-top: 2vh;
          width: 100%;
          height: 320px;
          position: relative;
          .video {
            width: 100%;
            height: 100%;
          }
          :deep(.el-image) {
            width: 100%;
            height: 100%;
          }

          .play-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            :deep(.el-image) {
              width: 60px;
              height: 60px;
            }
          }
        }
      }

      .business-container-bottom {
        margin-top: 2vh;
        width: 100%;
        height: 120px;
        display: flex;
        gap: 4%;
        justify-content: center;
        align-items: center;

        .business-container-bottom-container {
          width: 20%;

          .business-container-bottom-top {
            width: 100%;
            display: flex;

            .bussiness-container-bottom-top-left {
              position: relative;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 25px;
              color: #f3a7a5;
              line-height: 0px;

              &.plus {
                &::after {
                  content: '+';
                  position: absolute;
                  top: -15px;
                  right: -15px;
                  font-size: 15px;
                }
              }
            }

            .bussiness-container-bottom-top-right {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 12px;
              color: #333333;
              margin-left: 10px;
            }
          }

          .business-container-bottom-bottom {
            margin-top: 10px;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 12px;
            color: #333333;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
