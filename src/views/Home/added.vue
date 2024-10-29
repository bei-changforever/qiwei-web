<template>
  <div
    class="added"
    :style="{ 'background-color': config.background_free ? config.background_free : 'white' }"
  >
    <div class="added-container" ref="addedDom">
      <div class="business-container-left-item">
        <div
          :class="[
            'topic',
            showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__jackInTheBox' : ''
          ]"
        >
          <div class="block"></div>
          <div class="text">ADDED</div>
        </div>
        <div
          :class="[
            'name',
            showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__jackInTheBox' : ''
          ]"
        >
          免费服务
        </div>
        <div
          :class="[
            'fu-name',
            showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInUp' : ''
          ]"
        >
          12项增值配套服务
        </div>
        <div
          :class="[
            'desc',
            showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInUp' : ''
          ]"
        >
          我们提供免费一站式全套服务保障，全方位助力客户项目成功落地。
        </div>
      </div>
      <div
        :class="[
          'added-big-image-box',
          showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__zoomIn' : ''
        ]"
      >
        <el-image :src="getAssetsFile('images', '免费服务.png')" :fit="'fill'" />
        <div class="text-item">
          <div class="text">
            <span>公司注册</span>
            <span>品牌注册</span>
          </div>
          <div class="text">
            <span>品牌策划</span>
            <span>产品定位</span>
            <span>包装设计</span>
          </div>
          <div class="text">加工方案定制</div>
          <div class="text">来料检验</div>
          <div class="text">产品送检</div>
          <div class="text">双方产品备案</div>
          <div class="text">包材半成品及检验质量跟踪服务</div>
          <div class="text">
            <span>仓库贮存</span>
            <span>物流配送服务</span>
          </div>
          <div class="text">
            <span>品牌营销方案指导</span>
            <span>网络运营推广技术支持</span>
          </div>
          <div class="text">生产视频及图片拍摄</div>
          <div class="text">
            <span>产品拍摄</span>
            <span>详情页制作</span>
          </div>
          <div class="text">提供商品条码服务</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
import { ref, onMounted, toRefs, watch } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useConfig } from '@/stores/config'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())
const { config } = toRefs(useConfig())
const showAnimation = ref(false)
const addedDom = ref(null)
onMounted(() => {
  useIntersectionObserver(
    addedDom,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        showAnimation.value = true
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
.added {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  background-color: white;

  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  padding-top: 15vh;
  box-sizing: border-box;
  .added-container {
    // padding-top: 80px;
    width: var(--base-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .business-container-left-item {
      width: 100%;

      .topic {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        gap: 10px;

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

    .added-big-image-box {
      position: relative;
      margin-top: 2vw;
      width: 55vw;
      height: 25vw;

      :deep(.el-image) {
        width: 100%;
        height: 100%;
      }

      .text-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .text {
          position: absolute;
          width: 24%;
          height: 33%;
          display: flex;
          align-items: center;
          flex-direction: column;
          font-size: 12px;
          justify-content: center;
          //   border: 1px solid red;
          color: #666666;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;

          &:nth-child(1) {
            top: 10%;
            left: 0;
          }

          &:nth-child(2) {
            top: 10%;
            left: 22%;
          }

          &:nth-child(3) {
            top: 10%;
            left: 43%;
          }

          &:nth-child(4) {
            top: 10%;
            left: 64.5%;
          }

          &:nth-child(5) {
            top: 46%;
            left: 0.5%;
          }

          &:nth-child(6) {
            top: 46%;
            left: 22%;
          }

          &:nth-child(7) {
            top: 46%;
            left: 43%;
          }

          &:nth-child(8) {
            top: 48%;
            left: 64.5%;
          }

          &:nth-child(9) {
            top: 88%;
            left: 0%;
          }

          &:nth-child(10) {
            top: 88%;
            left: 25%;
          }

          &:nth-child(11) {
            top: 88%;
            left: 49%;
          }

          &:nth-child(12) {
            top: 88%;
            left: 74%;
          }
        }
      }
    }
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

@media (min-width: 960px) and (max-width: 1220px) {
  .added {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    background-color: white;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    padding-top: 10vh;
    box-sizing: border-box;
    .added-container {
      // padding-top: 80px;
      width: var(--base-width);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .business-container-left-item {
        width: 100%;

        .topic {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          gap: 10px;

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

      .added-big-image-box {
        position: relative;
        margin-top: 2vw;
        width: 80vw;
        height: 43vh;

        :deep(.el-image) {
          width: 100%;
          height: 100%;
        }

        .text-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          .text {
            position: absolute;
            width: 24%;
            height: 33%;
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 12px;
            justify-content: center;
            //   border: 1px solid red;
            color: #666666;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;

            &:nth-child(1) {
              top: 10%;
              left: 0;
            }

            &:nth-child(2) {
              top: 10%;
              left: 22%;
            }

            &:nth-child(3) {
              top: 10%;
              left: 43%;
            }

            &:nth-child(4) {
              top: 10%;
              left: 64.5%;
            }

            &:nth-child(5) {
              top: 46%;
              left: 0.5%;
            }

            &:nth-child(6) {
              top: 46%;
              left: 22%;
            }

            &:nth-child(7) {
              top: 46%;
              left: 43%;
            }

            &:nth-child(8) {
              top: 48%;
              left: 64.5%;
            }

            &:nth-child(9) {
              top: 88%;
              left: 0%;
            }

            &:nth-child(10) {
              top: 88%;
              left: 25%;
            }

            &:nth-child(11) {
              top: 88%;
              left: 50%;
            }

            &:nth-child(12) {
              top: 88%;
              left: 74%;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 960px) {
  .added {
    width: 100vw;
    height: 50vh;
    // height: auto;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    background-color: white;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    // scroll-snap-align: start;
    // padding-top: 15vh;
    padding: 0;
    box-sizing: border-box;
    .added-container {
      // padding-top: 80px;
      width: var(--base-width);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2vh;
      box-sizing: border-box;
      .business-container-left-item {
        width: 100%;

        .topic {
          width: 100%;
          height: 40px;
          display: none;
          align-items: center;
          gap: 10px;

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
          // line-height: var(--desc-lineHeight);
        }
      }

      .added-big-image-box {
        position: relative;
        margin-top: 2vh;
        width: 100%;
        height: 62%;

        :deep(.el-image) {
          width: 100%;
          height: 100%;
        }

        .text-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          .text {
            position: absolute;
            width: 24%;
            height: 33%;
            display: none;
            align-items: center;
            flex-direction: column;
            font-size: 12px;
            justify-content: center;
            //   border: 1px solid red;
            color: #666666;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;

            &:nth-child(1) {
              top: 10%;
              left: 0;
            }

            &:nth-child(2) {
              top: 10%;
              left: 22%;
            }

            &:nth-child(3) {
              top: 10%;
              left: 43%;
            }

            &:nth-child(4) {
              top: 10%;
              left: 64.5%;
            }

            &:nth-child(5) {
              top: 46%;
              left: 0.5%;
            }

            &:nth-child(6) {
              top: 46%;
              left: 22%;
            }

            &:nth-child(7) {
              top: 46%;
              left: 43%;
            }

            &:nth-child(8) {
              top: 46%;
              left: 64.5%;
            }

            &:nth-child(9) {
              top: 88%;
              left: 0%;
            }

            &:nth-child(10) {
              top: 88%;
              left: 25%;
            }

            &:nth-child(11) {
              top: 88%;
              left: 50%;
            }

            &:nth-child(12) {
              top: 88%;
              left: 74%;
            }
          }
        }
      }
    }
  }
}
</style>
