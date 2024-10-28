<template>
  <div class="develop-infomation">
    <div class="develop-infomation-base-container">
      <div class="develop-infomation-container-top">
        <div class="left">
          <div class="develop-container-top">
            <div class="develop-container-left">
              <div class="develop-container-left-item">
                <div class="topic">
                  <div class="block"></div>
                  <div class="text">INFORMATION</div>
                </div>
                <div class="name">大数据平台</div>
                <div class="desc">
                  获取信息即获取价值，获取信息即获取未来，先获取信息即比别人更早获得机会
                </div>
              </div>
            </div>
          </div>
          <div class="develop-container-bottom">
            <div class="title">三库建设</div>
            <div class="desc">
              三库建设是为了更好的实现奇伟研产中心核心竞争力，即四大标准：技术标准、制造标准、品牌标准和服务标准的实现。
              三库建设是公司科研和工作人员进行技术研究、产品开发、业务拓展和学习提升的理想场所三库建设是为奇伟客户提供增
              值服务、为同行提供优质供应链的化妆品行业信息沙龙。
            </div>

            <div class="right">
              <div class="right-top">
                <div class="right-item">
                  <el-image :src="getAssetsFile('images', '产品库.png')" :fit="'fill'" />
                  <div class="kl-txt">产品库</div>
                  <div class="kl-dec">
                    <span>产品库</span>
                    <span>推广目录内料简，推广目录成品简</span>
                  </div>
                </div>
                <div class="right-item">
                  <el-image :src="getAssetsFile('images', '提案库.png')" :fit="'fill'" />
                  <div class="kl-txt">提案库</div>
                  <div class="kl-dec">
                    <span>提案库</span>
                    <span>专线类提客库，趋势类提客库，客户类提客库，外来提客库</span>
                  </div>
                </div>
              </div>

              <div class="right-item">
                <el-image :src="getAssetsFile('images', '信息库.png')" :fit="'fill'" />
                <div class="kl-txt">信息库</div>
                <div class="kl-dec">
                  <span>信息库</span>
                  <span
                    >OEM同行资料，品牌资料，包装材料，原料供应商，机械仪器设备，辅助销售类，各类书籍，公司历史档案，会展类资料，外购成品库，企业资质与背书</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="new-right">
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
            <swiper-slide>
              <div class="develop-infomation-container-bottom-item">
                <el-image :src="getAssetsFile('images', '新质生产力.png')" :fit="'fill'" />
                <div class="text">新质生产力</div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="develop-infomation-container-bottom-item">
                <el-image :src="getAssetsFile('images', '可持续发展.png')" :fit="'fill'" />
                <div class="text">可持续发展</div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="develop-infomation-container-bottom-item">
                <el-image :src="getAssetsFile('images', '新质设备.png')" :fit="'fill'" />
                <div class="text">新质设备</div>
              </div></swiper-slide
            >
          </swiper>
        </div>
        <!-- <div class="develop-infomation-container-bottom">
        <div class="develop-infomation-container-bottom-item">
          <el-image :src="getAssetsFile('images', '新质生产力.png')" :fit="'fill'" />
          <div class="text">新质生产力</div>
        </div>
        <div class="develop-infomation-container-bottom-item">
          <el-image :src="getAssetsFile('images', '可持续发展.png')" :fit="'fill'" />
          <div class="text">可持续发展</div>
        </div>
        <div class="develop-infomation-container-bottom-item">
          <el-image :src="getAssetsFile('images', '新质设备.png')" :fit="'fill'" />
          <div class="text">新质设备</div>
        </div>
      </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { getAssetsFile } from '@/utils/tools'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-cards'
// import required modules
import { EffectCards } from 'swiper/modules'

const modules = [EffectCards]
</script>
<style lang="scss" scoped>
.develop-infomation {
  width: 100vw;
  height: 100vh;

  padding-top: 15vh;
  box-sizing: border-box;
  background-color: white;

  .develop-infomation-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .develop-infomation-container-top {
      width: 100%;
      display: flex;
      // background-color: pink;
      justify-content: space-between;

      .left {
        width: 50%;

        .develop-container-top {
          width: 100%;
          display: flex;

          .develop-container-left {
            width: 100%;

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

              .desc {
                margin-top: 2vh;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 16px;
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
                // background-color: pink;
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

          .title {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 32px;
            color: #333333;
          }

          .desc {
            margin-top: 2vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #333333;
            line-height: 24px;
            text-align: left;
          }

          .right {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1vh;
            // background-color: pink;
            margin-top: 3vh;
            .right-top {
              display: flex;
              gap: 1vh;
              .right-item {
                height: 150px;
              }
            }

            .right-item {
              position: relative;
              display: flex;
              justify-content: flex-end;
              width: 100%;
              height: 100%;
              cursor: pointer;
              // border: 1px solid red;
              border-radius: 10px;
              overflow: hidden;

              :deep(.el-image) {
                width: 100%;
                height: 100%;
                // border-radius: 10px;
              }

              .kl-txt {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 24px;
                color: #ffffff;

                background-image: url('../../assets/images/黑色渐变1.png');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
              }

              .kl-dec {
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
                .kl-txt {
                  display: none;
                }

                .kl-dec {
                  display: flex;
                }
              }
            }
          }
        }
      }

      .new-right {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        // background-color: pink;

        .swiper {
          width: 450px;
          height: 500px;
          // border: 1px solid red;
        }

        .swiper-slide {
          background-color: transparent !important;
        }

        .develop-infomation-container-bottom-item {
          width: 100%;
          height: 100%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          :deep(.el-image) {
            width: 100%;
            height: 100%;
          }

          .text {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 25%;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 24px;
            display: flex;
            align-items: center;
            color: #ffffff;

            background-image: url('../../assets/images/黑色渐变1.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            text-indent: 1em;
            border-radius: 0 0 20px 20px;
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .develop-infomation {
    width: 100vw;
    height: auto;

    // padding-top: 10vh;
    padding: 0;
    box-sizing: border-box;
    background-color: white;

    .develop-infomation-base-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;
      padding: 2vh;
      box-sizing: border-box;
      .develop-infomation-container-top {
        width: 100%;
        display: flex;
        flex-direction: column;
        // background-color: pink;
        justify-content: space-between;
        // padding: 5vh;
        box-sizing: border-box;
        padding-bottom: 0;
        margin: 0;
        padding: 0;
        .left {
          width: 100%;

          .develop-container-top {
            width: 100%;
            display: flex;
            // flex-direction: column;
            // background: pink;
            .develop-container-left {
              width: 100%;

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
                  //   margin-top: 1vh;
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
                  color: #333333;
                }
              }
            }

            .business-container-right {
              width: 100%;
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
            // margin-top: 10vh;
            // background-color: pink;
            // height: 100%;
            margin-top: 2vh;
            // background: pink;
            width: 100%;
            .title {
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
              color: #333333;
              line-height: 24px;
              text-align: left;
            }
          }
        }

        .right {
          margin-top: 2vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1vh;
          // background-color: pink;

          .right-item {
            position: relative;
            display: flex;
            justify-content: flex-end;
            width: 100%;
            cursor: pointer;

            :deep(.el-image) {
              width: 100%;
              height: 100%;
            }

            .text {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 24px;
              color: #ffffff;
              display: none;
            }

            .desc {
              position: absolute;
              width: 100%;
              height: 100%;
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
                  font-size: 18px;
                  color: #ffffff;
                }
              }
            }

            // &:hover {
            //   .text {
            //     display: none;
            //   }

            //   .desc {
            //     display: flex;
            //   }
            // }
          }
        }
      }

      .develop-infomation-container-bottom {
        padding: 5vh;
        box-sizing: border-box;
        width: 100%;
        display: none;
        gap: 1vw;

        .develop-infomation-container-bottom-item {
          width: 33.3%;
          cursor: pointer;
          position: relative;

          :deep(.el-image) {
            width: 100%;
            height: 100%;
          }

          .text {
            position: absolute;
            bottom: 5vh;
            left: 2vw;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 24px;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
