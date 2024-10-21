<template>
  <div class="about-footprint" id="about-footprint">
    <div class="about-footprint-base-container">
      <div class="about-footprint-container-top">
        <div class="T-left">
          <div class="topic">
            <div class="block"></div>
            <div class="text">BRANCH</div>
          </div>
          <div class="name">全球足迹</div>
          <div class="desc">
            迄今为止，奇伟已在全球范围内与超过60个国家的众多品牌客户建立了稳固的合作关系
          </div>
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
      <div class="about-footprint-container-bottom">
        <div class="about-footprint-bg">
          <img class="map-bg" :src="getAssetsFile('images', '世界地图.png')" alt="" />
          <div class="point USA">
            <div class="pos">
              <img :src="getAssetsFile('icon', '地标.png')" alt="" />
            </div>
            <div class="text">
              <div class="lc">美国西海岸</div>
              <div class="icon">
                <el-icon><Right /></el-icon>
              </div>
            </div>
          </div>
          <div class="point Brazil">
            <div class="pos">
              <img :src="getAssetsFile('icon', '地标.png')" alt="" />
            </div>
            <div class="text">
              <div class="lc">巴西</div>
              <div class="icon">
                <el-icon><Right /></el-icon>
              </div>
            </div>
          </div>
          <div class="point EU">
            <div class="pos">
              <img :src="getAssetsFile('icon', '地标.png')" alt="" />
            </div>
            <div class="text">
              <div class="lc">欧美</div>
              <div class="icon">
                <el-icon><Right /></el-icon>
              </div>
            </div>
          </div>
          <div class="point Swiss">
            <div class="pos">
              <img :src="getAssetsFile('icon', '地标.png')" alt="" />
            </div>
            <div class="text">
              <div class="lc">瑞士</div>
              <div class="icon">
                <el-icon><Right /></el-icon>
              </div>
            </div>
          </div>
          <div class="point Italy">
            <div class="pos">
              <img :src="getAssetsFile('icon', '地标.png')" alt="" />
            </div>
            <div class="text">
              <div class="lc">意大利</div>
              <div class="icon">
                <el-icon><Right /></el-icon>
              </div>
            </div>
          </div>
          <div class="point India">
            <div class="pos">
              <img :src="getAssetsFile('icon', '地标.png')" alt="" />
            </div>
            <div class="text">
              <div class="lc">印度</div>
              <div class="icon">
                <el-icon><Right /></el-icon>
              </div>
            </div>
          </div>
          <div class="point SEA">
            <div class="pos">
              <img :src="getAssetsFile('icon', '地标.png')" alt="" />
            </div>
            <div class="text">
              <div class="lc">东南亚</div>
              <div class="icon">
                <el-icon><Right /></el-icon>
              </div>
            </div>
          </div>
          <div class="point Korea">
            <div class="pos">
              <img :src="getAssetsFile('icon', '地标.png')" alt="" />
            </div>
            <div class="text">
              <div class="lc">韩国</div>
              <div class="icon">
                <el-icon><Right /></el-icon>
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
.about-footprint {
  width: 100vw;
  height: 100vh;
  padding-top: 12vh;
  box-sizing: border-box;
  .about-footprint-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .about-footprint-container-top {
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
          margin-top: 1vh;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: var(--desc-fontSize);
          color: #666666;
          line-height: var(--desc-lineHeight);
        }
      }

      .T-right {
        .swiper-btn {
          margin-top: 5vh;
          display: none;
          gap: 1vw;

          :deep(.el-image) {
            width: 40px;
            height: 40px;
            cursor: pointer;
          }
        }
      }
    }
    .about-footprint-container-bottom {
      width: 100%;
      height: 65vh;
      margin-top: 2vh;
      .about-footprint-bg {
        width: 100%;
        height: 100%;
        position: relative;
        .map-bg {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }

        .point {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          height: 30px;
          cursor: pointer;
          gap: 0.2vw;
          .text {
            display: flex;
            height: 100%;
            max-width: 116px;
            align-items: center;
            justify-content: space-between;
            padding-left: 10px;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #ffffff;
            border-radius: 5px 5px 5px 5px;
            background-color: rgba(0, 0, 0, 0.5);
            overflow: hidden;
            .icon {
              margin-left: 0.5vw;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 22px;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.7);
            }
          }

          &.USA {
            top: 30%;
            left: 15%;
          }

          &.Brazil {
            top: 60%;
            left: 34%;
          }

          &.EU {
            top: 26%;
            left: 44.5%;
          }

          &.Swiss {
            top: 20%;
            left: 48%;
          }

          &.Italy {
            top: 26%;
            left: 51%;
          }

          &.India {
            top: 40%;
            left: 68%;
          }

          &.SEA {
            top: 45%;
            left: 75%;
          }

          &.Korea {
            top: 28%;
            left: 82%;
          }
        }
      }
    }
  }
}


@media (max-width: 960px) {
  .about-footprint {
  width: 100vw;
  height: auto;
  // padding-top: 12vh;
  padding: 0;
  box-sizing: border-box;
  .about-footprint-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;
    padding: 2vh;
    box-sizing: border-box;
    .about-footprint-container-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      
      .T-left {
        width: 100%;
        display: flex;
      
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
          width: 100%;
          display: flex;
          align-items: center;
          // justify-content: center;
          // margin-top: 1vh;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: 20px;
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
          display: none;
        }
      }

      .T-right {
        .swiper-btn {
          margin-top: 5vh;
          display: none;
          gap: 1vw;

          :deep(.el-image) {
            width: 40px;
            height: 40px;
            cursor: pointer;
          }
        }
      }
    }
    .about-footprint-container-bottom {
      width: 100%;
      height: auto;
      // padding: 5vh;
      // box-sizing: border-box;
      .about-footprint-bg {
        width: 100%;
        height: 100%;
        position: relative;
        .map-bg {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }

        .point {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          height: 30px;
          cursor: pointer;
          gap: 0.2vw;
          .text {
            display: flex;
            height: 100%;
            max-width: 116px;
            align-items: center;
            justify-content: space-between;
            white-space: nowrap;
            padding-left: 10px;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #ffffff;
            border-radius: 5px 5px 5px 5px;
            background-color: rgba(0, 0, 0, 0.5);
            overflow: hidden;
            .icon {
              margin-left: 0.5vw;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 22px;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.7);
            }
          }

          &.USA {
            top: 30%;
            left: 15%;
          }

          &.Brazil {
            top: 60%;
            left: 34%;
          }

          &.EU {
            top: 26%;
            left: 44.5%;
          }

          &.Swiss {
            top: 20%;
            left: 48%;
          }

          &.Italy {
            top: 26%;
            left: 51%;
          }

          &.India {
            top: 40%;
            left: 68%;
          }

          &.SEA {
            top: 45%;
            left: 75%;
          }

          &.Korea {
            top: 28%;
            left: 82%;
          }
        }
      }
    }
  }
}
}
</style>
