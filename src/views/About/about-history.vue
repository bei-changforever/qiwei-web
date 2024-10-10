<template>
  <div class="about-history">
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.about-history {
  width: 100vw;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;

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
            }
        }
      }
    }
  }
}
</style>
