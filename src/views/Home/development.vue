<template>
  <div class="business-info">
    <div class="business-container">
      <div class="business-container-top">
        <div class="business-container-left">
          <div class="business-container-left-item">
            <div class="topic">
              <div class="block"></div>
              <div class="text">PROFILE</div>
            </div>
            <div class="name">研发实力</div>
            <div class="fu-name">跨学科专家团队</div>
            <div class="desc">
              奇伟汇聚了一支跨学科专家团队，持续高投入于前沿技术创新与
              产品安全性深入研究，精准捕捉市场需求动态，推动定制化产品
              开发，同时注重环保与可持续发展，累积了5000+成熟配方， 确保每一款化妆品都拥有卓越品质。
            </div>
            <div class="konw-more-about">
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
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.business-info {
  width: 100vw;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

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

          .name {
            margin-top: 1vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 42px;
            color: #333333;
          }
          .fu-name {
            margin-top: 2vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 32px;
            color: #333333;
          }
          .desc {
            margin-top: 5vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 20px;
            color: #666666;
            line-height: 34px;
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
        width: 50%;
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
</style>
