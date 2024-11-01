<template>
  <div class="develop-center">
    <div class="develop-center-base-container">
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

      <div class="develop-container-top">
        <div class="develop-container-left">
          <div class="develop-container-left-item">
            <div class="topic">
              <div class="block"></div>
              <div class="text">RESEARCH</div>
            </div>
            <div class="name">研发中心</div>
          </div>
        </div>
      </div>

      <div class="develop-container-bottom" v-if="PAGEWIDTH > 960">
        <div class="develop-container-bottom-left">
          <div class="develop-cotainer-bottom-left-item">
            <el-image :src="getAssetsFile('images', '研发图片1.png')" :fit="'fill'" alt="" />
            <div class="text">以综合性测评为导向</div>
            <div class="desc">
              <span>以综合性测评为导向</span>
              <span
                >化妆品研发以严格遵循安全性、功能性、稳定性、法规合规性及消费者需求为导向，通过多项测试确保产品全面满足市场需求。</span
              >
            </div>
          </div>
          <div class="develop-cotainer-bottom-left-item">
            <el-image :src="getAssetsFile('images', '研发图片2.png')" :fit="'fill'" alt="" />
            <div class="text">专业性研发团队</div>
            <div class="desc">
              <span>专业性研发团队</span>
              <span
                >拥有深厚的专业知识与广泛的实践经验，更具备敏锐的市场洞察力，能够精准捕捉潮流趋势与消费者需求。</span
              >
            </div>
          </div>
        </div>
        <div class="develop-container-bottom-center">
          <div class="develop-cotainer-bottom-center-item">
            <el-image :src="getAssetsFile('images', '研发图片5.png')" :fit="'fill'" alt="" />
            <div class="text">完善实验室支持</div>
            <div class="desc">
              <span>完善实验室支持</span>
              <span
                >公司拥有完善的物理、化学和生物实验室设施，为研发创新和产品制程提供了全方位、强有力的技术支持。</span
              >
            </div>
          </div>

          <div class="develop-cotainer-bottom-center-item">
            <el-image :src="getAssetsFile('images', '研发图片3.png')" :fit="'fill'" alt="" />
            <div class="text">质量严格控</div>
            <div class="desc">
              <span>质量严格控</span>
              <span
                >我们秉持质量至上的原则，从源头精选优质原料，历经多轮精细筛选与全面评测，每一步都倾注匠心。确保产品妆效的卓越，为客户带来卓越体验。</span
              >
            </div>
          </div>
        </div>
        <div class="develop-container-bottom-right">
          <div class="develop-cotainer-bottom-right-item">
            <el-image :src="getAssetsFile('images', '研发图片4.png')" :fit="'fill'" alt="" />
            <div class="text">知识产权保护体系</div>
            <div class="desc">
              <span>知识产权保护体系</span>
              <span
                >奇伟始终将科技创新视为公司发展的核心驱动力，并建立了完善的知识产权保护体系，目前拥40+核心专利证书。</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-container-bottom" v-else>
        <van-swipe :autoplay="3000" lazy-render style="height: 320px" vertical>
          <van-swipe-item>
            <div class="box">
              <el-image :src="getAssetsFile('images', '研发图片1.png')" :fit="'fill'" alt="" />
              <div class="desc">
                <span>以综合性测评为导向</span>
                <span
                  >化妆品研发以严格遵循安全性、功能性、稳定性、法规合规性及消费者需求为导向，通过多项测试确保产品全面满足市场需求。</span
                >
              </div>
            </div>
          </van-swipe-item>

          <van-swipe-item>
            <div class="box">
              <el-image :src="getAssetsFile('images', '研发图片2.png')" :fit="'fill'" alt="" />
              <div class="text">专业性研发团队</div>
              <div class="desc">
                <span>专业性研发团队</span>
                <span
                  >拥有深厚的专业知识与广泛的实践经验，更具备敏锐的市场洞察力，能够精准捕捉潮流趋势与消费者需求。</span
                >
              </div>
            </div>
          </van-swipe-item>

          <van-swipe-item>
            <div class="box">
              <el-image :src="getAssetsFile('images', '研发图片2.png')" :fit="'fill'" alt="" />
              <div class="desc">
                <span>完善实验室支持</span>
                <span
                  >公司拥有完善的物理、化学和生物实验室设施，为研发创新和产品制程提供了全方位、强有力的技术支持。</span
                >
              </div>
            </div>
          </van-swipe-item>

          <van-swipe-item>
            <div class="box">
              <el-image :src="getAssetsFile('images', '研发图片3.png')" :fit="'fill'" alt="" />
              <div class="desc">
                <span>质量严格控</span>
                <span
                  >我们秉持质量至上的原则，从源头精选优质原料，历经多轮精细筛选与全面评测，每一步都倾注匠心。确保产品妆效的卓越，为客户带来卓越体验。</span
                >
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="box">
              <el-image :src="getAssetsFile('images', '研发图片手机端.png')" :fit="'fill'" alt="" />
              <div class="desc">
                <span>知识产权保护体系</span>
                <span
                  >奇伟始终将科技创新视为公司发展的核心驱动力，并建立了完善的知识产权保护体系，目前拥40+核心专利证书。</span
                >
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, toRefs, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import emitter from '@/utils/mitt'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())
const list = ['研发中心', '科学配方理念', '大数据平台', '专利技术']
const activeIndex = ref(0)

const handleSelect = (index) => {
  if (activeIndex.value == index) {
    return
  } else {
    activeIndex.value = index
    emitter.emit('tagViewsShowModel', activeIndex.value)
  }
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
.develop-center {
  width: 100vw;
  height: 100vh;
  padding-top: 10vh;
  box-sizing: border-box;
  background-color: white;

  .develop-center-base-container {
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
      margin-bottom: 3vh;

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

    .develop-container-top {
      width: 100%;
      display: flex;

      .develop-container-left {
        width: 50%;

        .develop-container-left-item {
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
        }
      }

      .business-container-right {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1vw;

        .business-container-right-item {
          margin-top: 4vh;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1vw;
          cursor: pointer;

          .text {
            width: 80px;
            height: 32px;

            border-radius: 18px 18px 18px 18px;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #333333;
            display: flex;
            align-items: center;
            justify-content: center;

            &.active {
              background-color: #2d2d2d;
            }
          }

          .line {
            width: 18px;
            height: 1px;
            background: #e0e0e0;
            border-radius: 0px 0px 0px 0px;
          }
        }
      }
    }

    .develop-container-bottom {
      margin-top: 3vh;
      width: 100%;
      height: 600px;
      // background-color: pink;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5vw;

      // transform: scale(0.9);
      // transform-origin: top center;
      .develop-container-bottom-left {
        display: flex;
        flex-direction: column;
        gap: 1vh;
        height: 100%;

        .develop-cotainer-bottom-left-item {
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: all 0.2s;

          .text {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20%;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 24px;
            color: #ffffff;
            display: flex;
            align-items: center;
            text-indent: 1em;
            background-image: url('../../assets/images/标题黑底3.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            border-radius: 0 0 10px 10px;
          }

          .desc {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #ffffff;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            border-radius: 10px;

            span {
              &:nth-child(1) {
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 24px;
                color: #ffffff;
              }
            }
          }

          &:hover {
            .text {
              display: none;
            }

            .desc {
              display: flex;
            }
          }

          :deep(.el-image) {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
      }

      .develop-container-bottom-center {
        display: flex;
        flex-direction: column;
        gap: 1vh;
        height: 100%;

        .develop-cotainer-bottom-center-item {
          cursor: pointer;
          overflow: hidden;
          position: relative;

          .text {
            position: absolute;
            bottom: 1vh;
            left: 1vw;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 24px;
            color: #ffffff;
          }

          .desc {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #ffffff;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            border-radius: 10px;

            span {
              &:nth-child(1) {
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 24px;
                color: #ffffff;
              }
            }
          }

          &:hover {
            .text {
              display: none;
            }

            .desc {
              display: flex;
            }
          }

          :deep(.el-image) {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
      }

      .develop-container-bottom-right {
        display: flex;
        flex-direction: column;
        height: 100%;

        .develop-cotainer-bottom-right-item {
          cursor: pointer;
          overflow: hidden;
          position: relative;

          // max-height: 612px;
          .text {
            position: absolute;
            bottom: 1vh;
            left: 1vw;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 24px;
            color: #ffffff;
          }

          .desc {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            // display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #ffffff;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            border-radius: 10px;
            display: none;

            span {
              &:nth-child(1) {
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 24px;
                color: #ffffff;
              }
            }
          }

          &:hover {
            .text {
              display: none;
            }

            .desc {
              display: flex;
            }
          }

          :deep(.el-image) {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .develop-center {
    width: 100vw;
    height: auto;
    // padding-top: 5vh;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    margin-top: 0;
    .develop-center-base-container {
      margin-top: 0;
      margin: 0 auto;
      width: 100%;
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

      .develop-container-top {
        width: 100%;
        // display: none;

        .develop-container-left {
          width: 50%;

          .develop-container-left-item {
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
              // margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 18px;
              color: #333333;
            }
          }
        }

        .business-container-right {
          width: 50%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1vw;

          .business-container-right-item {
            margin-top: 4vh;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 1vw;
            cursor: pointer;

            .text {
              width: 80px;
              height: 32px;

              border-radius: 18px 18px 18px 18px;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 14px;
              color: #333333;
              display: flex;
              align-items: center;
              justify-content: center;

              &.active {
                background-color: #2d2d2d;
              }
            }

            .line {
              width: 18px;
              height: 1px;
              background: #e0e0e0;
              border-radius: 0px 0px 0px 0px;
            }
          }
        }
      }

      .develop-container-bottom {
        // padding: 5vh;
        width: 100%;
        box-sizing: border-box;
        height: 650px;
        // background-color: pink;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5vw;

        .develop-container-bottom-left {
          display: flex;
          flex-direction: column;
          gap: 1vh;
          height: 100%;

          .develop-cotainer-bottom-left-item {
            cursor: pointer;
            overflow: hidden;
            position: relative;
            transition: all 0.2s;

            .text {
              position: absolute;
              bottom: 1vh;
              left: 1vw;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 24px;
              color: #ffffff;
            }

            .desc {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.5);
              display: none;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #ffffff;
              padding: 20px;
              box-sizing: border-box;
              text-align: center;
              border-radius: 10px;

              span {
                &:nth-child(1) {
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 24px;
                  color: #ffffff;
                }
              }
            }

            &:hover {
              .text {
                display: none;
              }

              .desc {
                display: flex;
              }
            }

            :deep(.el-image) {
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
        }

        .develop-container-bottom-center {
          display: flex;
          flex-direction: column;
          gap: 1vh;
          height: 100%;

          .develop-cotainer-bottom-center-item {
            cursor: pointer;
            overflow: hidden;
            position: relative;

            .text {
              position: absolute;
              bottom: 1vh;
              left: 1vw;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 24px;
              color: #ffffff;
            }

            .desc {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.5);
              display: none;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #ffffff;
              padding: 20px;
              box-sizing: border-box;
              text-align: center;
              border-radius: 10px;

              span {
                &:nth-child(1) {
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 24px;
                  color: #ffffff;
                }
              }
            }

            &:hover {
              .text {
                display: none;
              }

              .desc {
                display: flex;
              }
            }

            :deep(.el-image) {
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
        }

        .develop-container-bottom-right {
          display: flex;
          flex-direction: column;
          height: 100%;

          .develop-cotainer-bottom-right-item {
            cursor: pointer;
            overflow: hidden;
            position: relative;

            // max-height: 612px;
            .text {
              position: absolute;
              bottom: 1vh;
              left: 1vw;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 24px;
              color: #ffffff;
            }

            .desc {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.5);
              // display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #ffffff;
              padding: 20px;
              box-sizing: border-box;
              text-align: center;
              border-radius: 10px;
              display: none;

              span {
                &:nth-child(1) {
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 24px;
                  color: #ffffff;
                }
              }
            }

            &:hover {
              .text {
                display: none;
              }

              .desc {
                display: flex;
              }
            }

            :deep(.el-image) {
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
        }
      }
      .mobile-container-bottom {
        margin-top: 1vh;
        .box {
          width: 100%;
          height: 320px;
          // border: 1px solid red;
          position: relative;
          :deep(.el-image) {
            width: 100%;
            height: 99%;
          }

          .desc {
            position: absolute;
            width: 100%;
            height: 99%;
            top: 0;
            left: 0;

            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #ffffff;
            padding: 5vh;
            box-sizing: border-box;
            text-align: center;
            border-radius: 10px;

            span {
              &:nth-child(1) {
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 18px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
