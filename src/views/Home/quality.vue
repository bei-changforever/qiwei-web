<template>
  <div class="quality">
    <div class="quality-container">
      <div class="advantage-container">
        <div class="T-left">
          <div class="name">从源头把控精选全球原料</div>
          <div class="desc">
            跨越国界，长期与多家原料供应商合作。精选优质原料进行研发生产，
            从源头严格控制产品品质;确保每一份原料都经过严格筛选与科学验证。
          </div>
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
      <div class="position-box">
        <div class="square-box">
          <div class="square-box-left">
            <div class="square-box-left-item" v-for="item in 9" :key="item">
              <div :class="['item-info', `itemIndex${item}`]">
                <div class="image-box">
                  <el-image :src="getAssetsFile('images', '合作品牌11.png')" :fit="'fill'" />
                </div>
              </div>
            </div>
          </div>
          <div class="square-box-top">
            <div class="square-box-top-item" v-for="item in 9" :key="item">
              <div :class="['item-info', `itemIndex${item}`]">
                <div class="image-box">
                  <el-image :src="getAssetsFile('images', '合作品牌11.png')" :fit="'fill'" />
                </div>
              </div>
            </div>
          </div>

          <div class="square-box-bottom">
            <div class="square-box-bottom-item" v-for="item in 9" :key="item">
              <div :class="['item-info', `itemIndex${item}`]">
                <div class="image-box">
                  <el-image :src="getAssetsFile('images', '合作品牌11.png')" :fit="'fill'" />
                </div>
              </div>
            </div>
          </div>

          <div class="square-box-right">
            <div class="square-box-right-item" v-for="item in 9" :key="item">
              <div :class="['item-info', `itemIndex${item}`]">
                <div class="image-box">
                  <el-image :src="getAssetsFile('images', '合作品牌11.png')" :fit="'fill'" />
                </div>
              </div>
            </div>
          </div>

          <div class="square-box-center"></div>

          <div class="texttopic">
            <span class="topic">品牌保障</span><br />
            <span class="detail">Quality Assurance</span>
          </div>
          <div class="textdetail"></div>
        </div>
        <div class="pagenavigation">
          <div class="pagenavigation-item" v-for="item in 3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.quality {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  .quality-container {
    width: var(--base-width);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .advantage-container {
      position: absolute;
      top: 100px;
      width: var(--base-width);
      display: flex;
      justify-content: space-between;

      .T-left {
        .name {
          margin-top: 10px;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: 42px;
          color: #333333;
        }

        .desc {
          margin-top: 10px;
          width: 59%;
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
          margin-top: 1vw;
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

    .position-box {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      //   background-color: pink;

      .pagenavigation {
        position: absolute;
        bottom: 30px;
        // width: 30%;
        padding: 20px;
        display: flex;
        gap: 10px;
        // height: 50px;
        // background-color: orange;
        .pagenavigation-item{
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #f3a7a4;
        }
      }
    }

    .square-box {
      margin-bottom: 20px;
      position: relative;
      width: 700px;
      height: 700px;
    //   border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      transform: rotate(45deg);
      transform-origin: center center;
      :deep(.el-image) {
        transform: rotate(-45deg);
        transform-origin: center center;
      }

      .square-box-center {
        position: absolute;
        width: 30%;
        height: 30%;
        background-color: #f3a7a4;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .texttopic {
        position: absolute;
        width: 30%;
        transform: rotate(-45deg);
        transform-origin: center center;
        text-align: center;
        .topic {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: 50px;
          color: #ffffff;
        }

        .detail {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 20px;
          color: #ffffff;
        }
      }

      .square-box-left {
        width: 50%;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        .square-box-left-item {
          width: 33%;
          height: 33%;
          padding: 5px;
          box-sizing: border-box;
          .item-info {
            width: 100%;
            height: 100%;
            background-color: #f3a7a4;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
              transform: scale(1.1);
            }

            &.itemIndex1 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex2 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex3 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex4 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex5 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex7 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex9 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }
          }
        }
      }

      .square-box-top {
        width: 50%;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        .square-box-top-item {
          width: 33%;
          height: 33%;
          padding: 5px;
          box-sizing: border-box;

          .item-info {
            border-radius: 5px;
            width: 100%;
            height: 100%;
            background-color: #ccefe7;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
              transform: scale(1.1);
            }
            &.itemIndex7 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }
          }
        }
      }

      .square-box-right {
        width: 50%;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        .square-box-right-item {
          width: 33%;
          height: 33%;
          padding: 5px;
          box-sizing: border-box;

          .item-info {
            cursor: pointer;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            background-color: #f3a7a4;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: 0.3s;
            &:hover {
              transform: scale(1.1);
            }
            &.itemIndex1 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex3 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex5 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex6 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex7 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex8 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex9 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }
          }
        }
      }

      .square-box-bottom {
        width: 50%;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        .square-box-bottom-item {
          width: 33%;
          height: 33%;
          padding: 5px;
          box-sizing: border-box;

          .item-info {
            cursor: pointer;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            background-color: #024997;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: 0.3s;
            &:hover {
              transform: scale(1.1);
            }
            &.itemIndex3 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
