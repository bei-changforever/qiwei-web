<template>
  <div
    class="business-info"
    :style="{
      'background-color': config && config.background_yfsl ? config.background_yfsl : 'white'
    }"
  >
    <div class="business-container">
      <div class="business-container-top">
        <div class="business-container-left" ref="businessLeftDom">
          <div class="business-container-left-item">
            <div class="top-top">
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
                <span>研发实力</span>
                <div class="small-konw-more-about" @click="clickRouter">
                  <div class="text">了解更多</div>
                  <el-icon class="about-icon">
                    <CirclePlusFilled />
                  </el-icon>
                </div>
              </div>
              <div
                :class="[
                  'fu-name',
                  showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInUp' : ''
                ]"
              >
                {{ config.home_yfsl_title }}
              </div>
              <div
                :class="[
                  'desc',
                  showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInUp' : ''
                ]"
              >
                {{ config.home_yfsl_description }}
              </div>
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
            :src="config && config.home_yfsl_video"
            :poster="config && config.home_yfsl_video_img"
            controls
            ref="videoDom"
          ></video>
          <el-image
            v-if="!isPlay"
            class="mark"
            :src="config && config.home_yfsl_video_img"
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, toRefs, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { useRouter } from 'vue-router'
import emitter from '@/utils/mitt'
import { useIntersectionObserver } from '@vueuse/core'
import { useCounterStore } from '@/stores/screenWidth'
import { useConfig } from '@/stores/config'
const { config } = toRefs(useConfig())
const { screenWidth } = toRefs(useCounterStore())
const router = useRouter()
const changePageShow = ref(false)
const businessLeftDom = ref(null)
const isPlay = ref(false)
const clickRouter = () => {
  router.push('/develop')
  emitter.emit('DOMINDEX', 3)
}

const videoDom = ref(null)
const showAnimation = ref(false)
const playVideo = () => {
  if (!isPlay.value) {
    isPlay.value = true
    videoDom.value.play()
    // video 声音
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
    businessLeftDom,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
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
  align-items: center;
  justify-content: center;
  background-color: #fafafa;

  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  // padding-top: 15vh;
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
              display: none;
              cursor: pointer;
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
            margin-top: 6vh;
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

@media (min-width: 1220px) and (max-width: 1440px) {
  .business-info {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: pink;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    // padding-top: 15vh;
    .business-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;

      .business-container-top {
        width: 100%;
        height: 450px;
        gap: 5%;
        display: flex;
        justify-content: space-between;
        // background-color: pink;
        .business-container-left {
          width: 50%;
          height: 100%;
          .business-container-left-item {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .top-top {
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
                  display: none;
                  cursor: pointer;
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
            }

            .konw-more-about {
              // margin-top: 6vh;
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

            .fu-name {
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #333333;
            }

            .desc {
              margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 14px;
              color: #666666;
              line-height: var(--desc-lineHeight);
            }

            .konw-more-about {
              margin-top: 5vh;
              width: 166px;
              height: 46px;
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
          margin-top: 2vh;
          width: 100%;
          height: 320px;
          position: relative;

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
</style>
