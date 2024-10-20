<template>
  <div class="business-principle">
    <div class="business-priciple-base-container">
      <div class="business-priciple-container-top">
        <div class="T-left">
          <div class="topic">
            <div class="block"></div>
            <div class="text">PRINCIPLE</div>
          </div>
          <div class="name">服务原则</div>
        </div>
      </div>
      <div class="business-priciple-container-bottom">
        <el-image
          :src="getAssetsFile('images', '服务三原则.png')"
          :fit="'fill'"
          @click="() => showImagePreview([getAssetsFile('images', '服务三原则.png')])"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { getAssetsFile } from '@/utils/tools'
import { showImagePreview } from 'vant'
</script>
<style lang="scss" scoped>
.business-principle {
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding-top: 15vh;
  box-sizing: border-box;

  .business-priciple-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    // zoom: 1;

    .business-priciple-container-top {
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

    .business-priciple-container-bottom {
      margin-top: 5vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      :deep(.el-image) {
        width: 100%;
      }
    }
  }
}

@media (max-width: 960px) {
  .business-principle {
    width: 100vw;
    height: auto;
    background-color: white;
    padding-top: 0;

    .business-priciple-base-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      // zoom: 1;

      padding: 2vh;
      box-sizing: border-box;

      .business-priciple-container-top {
        width: 100%;
        display: none;
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

      .business-priciple-container-bottom {
        margin-top: 5vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        :deep(.el-image) {
          width: 100%;
        }
      }
    }
  }
}
</style>
