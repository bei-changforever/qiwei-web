<template>
  <div class="product-container">
    <div class="product-container-content">
      <div class="sift">
        <div class="sift-box-top">
          <div class="top">
            <div class="text">
              <div class="text-item active">彩妆</div>
              <div class="text-item">洗护</div>
              <div class="text-item">护肤</div>
              <div class="text-item">香氛</div>
              <div class="text-item">其他</div>
            </div>
            <div class="button">
              <div class="button-item active">全部</div>
              <div class="button-item">国内</div>
              <div class="button-item">国外</div>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-text-box">
              <div class="bottom-text-item">
                <div class="text-b">
                  <span>底妆</span>
                  <el-image :src="getAssetsFile('icon', 'arrowdown.png')" :fit="'fill'" />
                </div>
                <div class="line"></div>
              </div>
              <div class="bottom-text-item">
                <div class="text-b">
                  <span>底妆</span>
                  <el-image :src="getAssetsFile('icon', 'arrowdown.png')" :fit="'fill'" />
                </div>
                <div class="line"></div>
              </div>
              <div class="bottom-text-item">
                <div class="text-b">
                  <span>底妆</span>
                  <el-image :src="getAssetsFile('icon', 'arrowdown.png')" :fit="'fill'" />
                </div>
                <div class="line"></div>
              </div>
              <div class="bottom-text-item">
                <div class="text-b">
                  <span>底妆</span>
                  <el-image :src="getAssetsFile('icon', 'arrowdown.png')" :fit="'fill'" />
                </div>
                <div class="line"></div>
              </div>
              <div class="bottom-text-item">
                <div class="text-b">
                  <span>底妆</span>
                  <el-image :src="getAssetsFile('icon', 'arrowdown.png')" :fit="'fill'" />
                </div>
                <div class="line"></div>
              </div>
              <div class="bottom-text-item">
                <div class="text-b">
                  <span>底妆</span>
                  <el-image :src="getAssetsFile('icon', 'arrowdown.png')" :fit="'fill'" />
                </div>
                <div class="line"></div>
              </div>
              <div class="bottom-text-item">
                <div class="text-b">
                  <span>底妆</span>
                  <el-image :src="getAssetsFile('icon', 'arrowdown.png')" :fit="'fill'" />
                </div>
                <div class="line"></div>
              </div>
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
.product-container {
  width: 100vw;
  height: 100vh;
  background-color: white;
  .product-container-content {
    width: var(--base-width);
    margin: 0 auto;
    height: 500px;
    background-color: pink;
    .sift {
      width: 100%;
      height: 120px;
      padding: 2vw;
      padding-top: 0;
      padding-bottom: 0;
      box-sizing: border-box;
      //   background-color: orange;
      border-radius: 20px 20px 20px 20px;
      background-color: #f6f9ff;
      .sift-box-top {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .top {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: space-between;

          border-bottom: 1px solid #e5e5e5;

          .text {
            width: 50%;

            display: flex;
            align-items: center;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 18px;
            color: #333333;

            gap: 3vw;
            .text-item {
              cursor: pointer;
              &.active {
                color: #f3a7a4;
              }
            }
          }

          .button {
            width: 50%;

            display: flex;
            align-items: center;
            justify-content: flex-end;
            .button-item {
              cursor: pointer;
              width: 72px;
              height: 24px;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 14px;
              color: #333333;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50px;
              &.active {
                background-color: #2d2d2d;
                color: #ffffff;
              }
            }
          }
        }

        .bottom {
          width: 100%;
          height: 50%;

          .bottom-text-box {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            gap: 3vw;
            .bottom-text-item {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 5vw;
              height: 100%;
              background-color: orange;
              .text-b {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5vw;
                cursor: pointer;

                width: 100%;
                height: 100%;

                span {
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 16px;
                  color: #333333;
                

                  &.active {
                    color: #f3a7a4;
                  }
                }
              }
              .line {
                position: absolute;
                left: 0;
                bottom: -4.5vh;
                padding: 20px;
                background-color: skyblue;
              }
            }
          }
        }
      }
    }
  }
}
</style>
