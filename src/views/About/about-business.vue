<template>
  <div class="business-info" id="about-business">
    <div class="business-container">
      <div class="control-button">
        <div
          :class="['control-button-item', activeIndex == index ? 'active' : '']"
          v-for="(item, index) in list"
          :key="index"
          @click="handleSelect(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="business-container-top">
        <div class="business-container-left">
          <div class="business-container-left-item">
            <div class="topic">
              <div class="block"></div>
              <div class="text">PROFILE</div>
            </div>
            <div class="name">关于奇伟</div>
            <div class="desc">
              <!-- 汕头市奇伟实业有限公司成立于1996年，深耕化妆品行业28年，专注于彩妆产品的设计、
              研发、制造的专业化妆品OEM、ODM、OBM生产企业，致力服务电商、微商、跨境、
              私域、专业线、商超链锁为一体的专业化、国际化的综合性化妆品企业。
              <div style="width: 0; height: 1vh"></div>
              奇伟的研发团队与营销中心紧密联系、协同合作。营销中心通过多渠道数据系统和分析
              团队支持，充分做好研发的“眼睛”，及时将“前线”信息反馈到研发实验室。双方发
              挥各自的优势，让研发走出实验室，更快转化成市场成果，从而提升奇伟的行业领先地位。
              奇伟目前已获得 “国家高新技术企业” -->
              {{ config &&  config.about_description }}
            </div>
          </div>
        </div>
        <div class="business-container-right">
          <!-- <el-image :src="getAssetsFile('images', '公司照片.png')" :fit="'fill'" /> -->
          <el-image
            :src="config && config.about_img ? config.about_img : getAssetsFile('images', '图片视频栏.png')"
            :fit="'fill'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import emitter from '@/utils/mitt'
import { useConfig } from '@/stores/config'
const { config } = toRefs(useConfig())
const list = ['关于奇伟', '公司沿革', '荣誉资质', '全球足迹']
const activeIndex = ref(0)
const handleSelect = (index) => {
  if (activeIndex.value == index) {
    return
  } else {
    activeIndex.value = index
    emitter.emit('tagViewsShowModel', activeIndex.value)
  }
}
</script>
<style lang="scss" scoped>
.business-info {
  width: 100vw;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  background-color: white;

  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  // background-color: pink;
  padding-top: 18vh;

  .business-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .control-button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1vw;
      margin-bottom: 5vh;

      .control-button-item {
        width: 150px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 14px;
        color: #999999;
        background-color: #f6f9ff;
        border-radius: 20px 20px 20px 20px;
        cursor: pointer;

        &.active {
          background-color: #f3a7a5;
          color: white;
        }
      }
    }

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
          }

          .desc {
            margin-top: 5vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: var(--desc-fontSize);
            color: #666666;
            line-height: var(--desc-lineHeight);
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
    background-color: white;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    // background-color: pink;
    padding-top: 18vh;

    .business-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;

      .control-button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        margin-bottom: 5vh;

        .control-button-item {
          width: 150px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 14px;
          color: #999999;
          background-color: #f6f9ff;
          border-radius: 20px 20px 20px 20px;
          cursor: pointer;

          &.active {
            background-color: #f3a7a5;
            color: white;
          }
        }
      }

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
            }

            .desc {
              margin-top: 5vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: var(--desc-fontSize);
              color: #666666;
              line-height: var(--desc-lineHeight);
            }
          }
        }

        .business-container-right {
          margin-top: 6vh;
          width: 800px;
          height: 450px;
          position: relative;

          :deep(.el-image) {
            width: 100%;
            height: 100%;
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
    background-color: white;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    // background-color: pink;
    // padding-top: 10vh;
    padding: 0;

    .business-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;

      padding: 2vh;
      box-sizing: border-box;

      .control-button {
        width: 100%;
        display: none;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        margin-bottom: 5vh;

        .control-button-item {
          width: 150px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 14px;
          color: #999999;
          background-color: #f6f9ff;
          border-radius: 20px 20px 20px 20px;
          cursor: pointer;

          &.active {
            background-color: #f3a7a5;
            color: white;
          }
        }
      }

      .business-container-top {
        width: 100%;
        gap: 5%;
        display: flex;
        align-items: center;
        justify-content: center;
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
    }
  }
}
</style>
