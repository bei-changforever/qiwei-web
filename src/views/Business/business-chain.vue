<template>
  <div class="business-chain">
    <div class="business-chain-base-container">
      <div class="business-chain-left">
        <div class="T-left">
          <div class="topic">
            <div class="block"></div>
            <div class="text">SUPPLY CHAIN</div>
          </div>
          <div class="name">全球供应链</div>
          <div class="fu-name">全球化高效率供应链</div>
        </div>
        <div class="t-b">
          <div class="title">关键优势</div>

          <div class="desc">
            我们全球布局，供应链稳定灵活，弹性生产，快速上市。基于订单采购与生产，精准控库存，降物料风险。精选高性价比原料，为品牌客户创造更大价值，助力市场竞争。
          </div>
        </div>
      </div>
      <div class="business-chain-right">
        <div class="business-chain-right-item">
          <img :src="getAssetsFile('images', '生产计划.png')" alt="" />
          <div class="text">
            具备3-4个月的订单确定性，或根据客户预测性提示提供更长的确定性；采用按订单量安排生产的工作方式；实施订单的月度管理方法。
          </div>
        </div>
        <div class="business-chain-right-item">
          <img :src="getAssetsFile('images', '采购.png')" alt="" />
          <div class="text">
            采购原材料及其他产品组件（如包材材料）；根据订单量确定采购数量和时间，最小化库存风险。
          </div>
        </div>
        <div class="business-chain-right-item">
          <img :src="getAssetsFile('images', '生产安排.png')" alt="" />
          <div class="text">进行生产的每日管理；落实新质生产力实现快速生产；确保快速上市时间。</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.business-chain {
  width: 100vw;
  height: 100vh;
  padding-top: 15vh;
  background-image: url('../../assets/images/全球供应链.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  .business-chain-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    .business-chain-left {
      width: 80%;
      // margin-right: 2vw;
      // background-color: orange;
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
        .fu-name {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 35px;
          color: #303030;
        }
      }

      .t-b {
        // margin-top: 20vh;
        margin-top: 5vh;

        .title {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: 22px;
          color: #333333;
        }

        .desc {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 16px;
          color: #333333;
          letter-spacing: 2px;
        }
      }
    }

    .business-chain-right {
      // margin-top: 20vh;
      margin-top: 5vh;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1vw;
      // background-color: pink;
      .business-chain-right-item {
        width: 100%;
        display: flex;
        align-items: center;
        // justify-content: flex-start;
        gap: 1vw;
      }
    }
  }
}

@media (max-width: 960px) {
  .business-chain {
    width: 100vw;
    height: auto;
    // padding-top: 5vh;
    background-image: url('../../assets/images/全球供应链底.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 0;
    // border: 1px solid red;
    .business-chain-base-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2vh;
      box-sizing: border-box;

      .business-chain-left {
        width: 100%;

        .T-left {
          // display: none;
          padding: 0;
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
            // margin-top: 1vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 18px;
            color: #333333;
          }
          .fu-name {
            font-size: 18px;
          }
        }

        .t-b {
          padding: 0;
          margin-top: 5vh;
          display: none;
          .title {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 22px;
            color: #333333;
          }

          .desc {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #333333;
            letter-spacing: 2px;
          }
        }
      }

      .business-chain-right {
        margin-top: 1vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1vw;

        .business-chain-right-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1.5vw;
          img {
            width: 50px;
            height: 50px;
          }
          .text {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
