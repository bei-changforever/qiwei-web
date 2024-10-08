<template>
  <div class="advantage">
    <div class="advantage-box">
      <div class="advantage-container">
        <div class="T-left">
          <div class="topic">
            <div class="block"></div>
            <div class="text">ADVANTAGE</div>
          </div>
          <div class="name">核心优势</div>
          <div class="desc">五大核心赋能，助力品牌共赢未来无限可能</div>
        </div>
        <div class="T-right">
          <div class="konw-more-about">
            <div class="text">了解更多</div>
            <el-icon class="about-icon">
              <CirclePlusFilled />
            </el-icon>
          </div>
        </div>
      </div>
      <div class="accordion">
        <Accordion />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import Accordion from '@/components/accordion/index.vue'
</script>
<style lang="scss" scoped>
.advantage {
  width: 100vw;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;

  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  padding: 15vh;
  .advantage-box {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .advantage-container {
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
      }

      .T-right {
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

    .accordion {
      margin-top: 5vh;
    }
  }
}

</style>
