<template>
  <div class="business-info">
    <div :class="['business-container', showAnimation && 'animate__animated animate__fadeIn']">
      <div class="business-container-top">
        <div class="business-container-left">
          <div class="business-container-left-item">
            <div class="topic">
              <div class="block"></div>
              <div class="text">PROFILE</div>
            </div>
            <div class="name">
              <span>研发实力</span>
              <div class="small-konw-more-about" @click="clickRouter">
                <div class="text">了解更多</div>
                <el-icon class="about-icon">
                  <CirclePlusFilled />
                </el-icon>
              </div>
            </div>
            <div class="fu-name">跨学科专家团队</div>
            <div class="desc">
              奇伟汇聚了一支跨学科专家团队，持续高投入于前沿技术创新与
              产品安全性深入研究，精准捕捉市场需求动态，推动定制化产品
              开发，同时注重环保与可持续发展，累积了5000+成熟配方， 确保每一款化妆品都拥有卓越品质。
            </div>
            <div class="konw-more-about" @click="clickRouter">
              <div class="text">了解更多</div>
              <el-icon class="about-icon">
                <CirclePlusFilled />
              </el-icon>
            </div>
          </div>
        </div>
        <div class="business-container-right">
          <el-image :src="getAssetsFile('images', '图片视频栏.png')" :fit="'fill'" />
          <div class="play-btn">
            <el-image :src="getAssetsFile('icon', 'play.png')" :fit="'fill'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { isMobile } from '@/utils/equipment'
import { useRouter } from 'vue-router'
import emitter from '@/utils/mitt'
const router = useRouter()
const changePageShow = ref(false)

const clickRouter = () => {
  router.push('/develop')
  emitter.emit('DOMINDEX', 3)
}

const showAnimation = ref(false)
onMounted(() => {
  // emitter.on('ANIMATION', (res) => {
  //   if (res == 4) {
  //     showAnimation.value = true
  //   } else {
  //     showAnimation.value = false
  //   }
  // })
})
</script>
<style lang="scss" scoped>
.business-info {
  width: 100vw;
  height: 70vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  // background-color: pink;

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
              align-items: center;
              .small-konw-more-about {
                // margin-top: 5vh;
                width: 150px;
                height: 40px;
                border-radius: 50px;
                display: flex;
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
