<template>
  <div class="footer">
    <div class="footer-navbar">
      <div class="block">
        <div class="logo">
          <el-image :src="getAssetsFile('icon', 'LOGO.png')" :fit="'fill'" />
        </div>
        <div class="text">
          <div
            v-for="(item, index) in HeaderInfo"
            :class="['text-item']"
            :key="index"
            @click="routerClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <div class="left-left">
        <div class="topic">妆点生命新色彩</div>
        <div class="detail">一站式OEM/ODM/OBM助力客户产品孵化</div>
        <div class="business">
          <el-image :src="getAssetsFile('images', 'HALAL.png')" :fit="'fill'" @click="showImagePreview([getAssetsFile('images', 'HALAL.png')])" />
          <el-image :src="getAssetsFile('images', 'ISO.png')" :fit="'fill'" @click="showImagePreview([getAssetsFile('images', 'ISO.png')])"/>
          <el-image :src="getAssetsFile('images', 'GMPC.png')" :fit="'fill'" @click="showImagePreview([getAssetsFile('images', 'GMPC.png')])"/>
        </div>
      </div>
      <div class="center">
        <div class="center-container">
          <div class="container-item">
            <div class="title">公司</div>
            <div class="detail">汕头市奇伟实业有限公司</div>
          </div>
          <div class="container-item">
            <div class="title">电话</div>
            <div class="detail">136-4306-1556</div>
          </div>
          <div class="container-item">
            <div class="title">地址</div>
            <div class="detail">汕头市潮南区峡山街道 广汕公路308号</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-container">
          <div class="left">
            <div class="image-box">
              <el-image
                :src="getAssetsFile('images', '企业微信.png')"
                :fit="'fill'"
                @click="showImagePreview([getAssetsFile('images', '企业微信.png')])"
              />
              <div class="topic">企业微信</div>
            </div>
            <div class="image-box">
              <el-image
                :src="getAssetsFile('images', '微信公众号.png')"
                :fit="'fill'"
                @click="showImagePreview([getAssetsFile('images', '微信公众号.png')])"
              />
              <div class="topic">微信公众号</div>
            </div>
          </div>
          <div class="right">
            <div class="btn" type="primary" @click="routerClick(5)">免费<br />打样</div>
            <div class="btn" type="primary" @click="handelClick">回到<br />顶部</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { useRouter, useRoute } from 'vue-router'
import { showImagePreview } from 'vant'
const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']
const route = useRoute()
const router = useRouter()
import emitter from '@/utils/mitt'
const routerClick = (key) => {
  switch (key) {
    case 0:
      router.push('/')
      emitter.emit('DOMINDEX', key)
      break
    case 1:
      router.push('/product/product-detail')
      emitter.emit('DOMINDEX', key)
      break
    case 2:
      router.push('/business')
      emitter.emit('DOMINDEX', key)
      break
    case 3:
      router.push('/develop')
      emitter.emit('DOMINDEX', key)
      break
    case 4:
      router.push('/about')
      emitter.emit('DOMINDEX', key)
      break
    case 5:
      router.push('/contact')
      emitter.emit('DOMINDEX', key)
      break
    default:
      break
  }
}
// 触发emits事件
const handelClick = () => {
  emitter.emit('BACKPAGETOP')
}
</script>
<style lang="scss" scoped>
.footer {
  width: var(--base-width);
  height: 100%;
  margin: 0 auto;

  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;

  .footer-navbar {
    width: 100%;
    height: 207px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dashed #707070;

    .block {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        :deep(.el-image) {
          width: 223px;
          height: 54px;
          cursor: pointer;
        }
      }

      .text {
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10%;

        .text-item {
          font-weight: 400;
          font-size: 14px;
          color: #ffffff;
          cursor: pointer;

          &.active {
            color: #f3a7a5;
            border-bottom: 3px solid #f3a7a5;
          }
        }
      }
    }
  }

  .footer-container {
    width: 100%;
    height: calc(100% - 208px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-left {
      width: 35%;
      height: 60%;
      display: flex;
      flex-direction: column;
      gap: 10%;

      .topic {
        height: 52px;
        font-weight: 400;
        font-size: 40px;
        color: #ffffff;
      }

      .detail {
        height: 31px;
        font-weight: 400;
        font-size: 24px;
        color: #ffffff;
      }

      .business {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10%;

        :deep(.el-image) {
          width: 80px;
          height: 80px;
          cursor: pointer;
        }
      }
    }

    .center {
      width: 35%;
      height: 60%;

      .center-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        .container-item {
          margin-bottom: 40px;

          .title {
            font-weight: 400;
            font-size: 16px;
            color: #999999;
          }

          .detail {
            font-weight: bold;
            font-size: 20px;
            color: #ffffff;
          }
        }
      }
    }

    .right {
      width: 20%;
      height: 60%;

      .right-container {
        width: 100%;
        display: flex;

        .left {
          width: 80%;
          display: flex;
          gap: 5%;

          .image-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: 400;
            font-size: 16px;
            color: #ffffff;

            :deep(.el-image) {
              width: 100px;
              height: 100px;
              cursor: pointer;
            }

            .topic {
              margin-top: 10px;
              cursor: pointer;
            }
          }
        }

        .right {
          width: 20%;
          display: flex;
          align-items: flex-end;
          flex-direction: column;

          .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: #f3a7a4;
            border-radius: 4px;
            font-weight: 400;
            font-size: 12px;
            color: #ffffff;
            margin-bottom: 10px;
            cursor: pointer;

            white-space: nowrap;
          }
        }
      }
    }
  }
}

@media (min-width: 1440px) and (max-width: 1520px) {
  .footer {
    .footer-navbar {
      .block {
        .logo {
          width: 30%;
        }

        .text {
          width: 70%;
        }
      }
    }

    .footer-container {
      .left-left {
        width: 32%;
        height: 60%;
        display: flex;
        flex-direction: column;
        gap: 10%;

        .topic {
          height: 52px;
          font-weight: 400;
          font-size: 30px;
          color: #ffffff;
        }

        .detail {
          height: 31px;
          font-weight: 400;
          font-size: 20px;
          color: #ffffff;
        }

        .business {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10%;

          :deep(.el-image) {
            width: 70px;
            height: 70px;
          }
        }
      }

      .center {
        width: 35%;
        height: 60%;

        .center-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;

          .container-item {
            margin-bottom: 40px;

            .title {
              font-weight: 400;
              font-size: 14px;
              color: #999999;
            }

            .detail {
              font-weight: bold;
              font-size: 18px;
              color: #ffffff;
            }
          }
        }
      }

      .right {
        width: 20%;
        height: 60%;

        .right-container {
          width: 100%;
          display: flex;

          .left {
            width: 80%;
            display: flex;
            gap: 5%;

            .image-box {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-weight: 400;
              font-size: 14px;
              color: #ffffff;

              :deep(.el-image) {
                width: 90px;
                height: 90px;
                cursor: pointer;
              }

              .topic {
                margin-top: 10px;
                cursor: pointer;
              }
            }
          }

          .right {
            width: 20%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;

            .btn {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              background-color: #f3a7a4;
              border-radius: 4px;
              font-weight: 400;
              font-size: 12px;
              color: #ffffff;
              margin-bottom: 10px;
              cursor: pointer;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1220px) and (max-width: 1440px) {
  .footer {
    .footer-navbar {
      .block {
        .logo {
          width: 30%;
        }

        .text {
          width: 70%;
        }
      }
    }

    .footer-container {
      .left-left {
        width: 32%;
        height: 60%;
        display: flex;
        flex-direction: column;
        gap: 10%;

        .topic {
          height: 52px;
          font-weight: 400;
          font-size: 26px;
          color: #ffffff;
        }

        .detail {
          height: 31px;
          font-weight: 400;
          font-size: 18px;
          color: #ffffff;
        }

        .business {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10%;

          :deep(.el-image) {
            width: 65px;
            height: 65px;
          }
        }
      }

      .center {
        width: 35%;
        height: 60%;

        .center-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;

          .container-item {
            margin-bottom: 40px;

            .title {
              font-weight: 400;
              font-size: 14px;
              color: #999999;
            }

            .detail {
              font-weight: bold;
              font-size: 18px;
              color: #ffffff;
            }
          }
        }
      }

      .right {
        width: 22%;
        height: 60%;

        .right-container {
          width: 100%;
          display: flex;

          .left {
            width: 80%;
            display: flex;
            gap: 5%;

            .image-box {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-weight: 400;
              font-size: 14px;
              color: #ffffff;

              :deep(.el-image) {
                width: 90px;
                height: 90px;
                cursor: pointer;
              }

              .topic {
                margin-top: 10px;
                cursor: pointer;
              }
            }
          }

          .right {
            width: 20%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;

            .btn {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              background-color: #f3a7a4;
              border-radius: 4px;
              font-weight: 400;
              font-size: 12px;
              color: #ffffff;
              margin-bottom: 10px;
              cursor: pointer;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 960px) and (max-width: 1220px) {
  .footer {
    .footer-navbar {
      .block {
        .logo {
          width: 30%;
        }

        .text {
          width: 70%;
        }
      }
    }

    .footer-container {
      .left-left {
        width: 32%;
        height: 60%;
        display: flex;
        flex-direction: column;
        gap: 10%;

        .topic {
          height: 52px;
          font-weight: 400;
          font-size: 24px;
          color: #ffffff;
        }

        .detail {
          height: 31px;
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
        }

        .business {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10%;

          :deep(.el-image) {
            width: 65px;
            height: 65px;
          }
        }
      }

      .center {
        width: 30%;
        height: 60%;

        .center-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;

          .container-item {
            margin-bottom: 15px;

            .title {
              font-weight: 400;
              font-size: 14px;
              color: #999999;
            }

            .detail {
              font-weight: bold;
              font-size: 18px;
              color: #ffffff;
            }
          }
        }
      }

      .right {
        width: 25%;
        height: 60%;

        .right-container {
          width: 100%;
          display: flex;

          .left {
            width: 80%;
            display: flex;
            gap: 5%;

            .image-box {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-weight: 400;
              font-size: 14px;
              color: #ffffff;

              :deep(.el-image) {
                width: 90px;
                height: 90px;
                cursor: pointer;
              }

              .topic {
                margin-top: 10px;
                cursor: pointer;
              }
            }
          }

          .right {
            width: 20%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;

            .btn {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              background-color: #f3a7a4;
              border-radius: 4px;
              font-weight: 400;
              font-size: 12px;
              color: #ffffff;
              margin-bottom: 10px;
              cursor: pointer;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .footer {
    padding: 2vh;
    box-sizing: border-box;
    .footer-navbar {
      .block {
        .logo {
          width: 30%;
        }

        .text {
          width: 70%;
        }
      }
    }

    .footer-container {
      .left-left {
        width: 35%;
        height: 60%;
        display: flex;
        flex-direction: column;
        gap: 10%;

        .topic {
          height: 52px;
          font-weight: 400;
          font-size: 24px;
          color: #ffffff;
        }

        .detail {
          height: 31px;
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
        }

        .business {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10%;

          :deep(.el-image) {
            width: 65px;
            height: 65px;
          }
        }
      }

      .center {
        width: 30%;
        height: 60%;

        .center-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;

          .container-item {
            margin-bottom: 15px;

            .title {
              font-weight: 400;
              font-size: 14px;
              color: #999999;
            }

            .detail {
              font-weight: bold;
              font-size: 18px;
              color: #ffffff;
            }
          }
        }
      }

      .right {
        width: 25%;
        height: 60%;

        .right-container {
          width: 100%;
          display: flex;

          .left {
            width: 80%;
            display: flex;
            gap: 5%;

            .image-box {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-weight: 400;
              font-size: 14px;
              color: #ffffff;

              :deep(.el-image) {
                width: 90px;
                height: 90px;
                cursor: pointer;
              }

              .topic {
                margin-top: 10px;
                cursor: pointer;
              }
            }
          }

          .right {
            width: 20%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;

            .btn {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              background-color: #f3a7a4;
              border-radius: 4px;
              font-weight: 400;
              font-size: 12px;
              color: #ffffff;
              margin-bottom: 10px;
              cursor: pointer;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 375px) and (max-width: 960px) {
  .footer {
    padding: 2vh;
    box-sizing: border-box;

    .footer-navbar {
      display: none !important;

      .block {
        .logo {
          width: 30%;
        }

        .text {
          width: 70%;
        }
      }
    }

    .footer-container {
      display: flex;
      flex-direction: column;

      .left-left {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        gap: 10%;
        margin-bottom: 30px;

        .topic {
          height: 52px;
          font-weight: 400;
          font-size: 20px;
          color: #ffffff;
        }

        .detail {
          height: 31px;
          font-weight: 400;
          font-size: 14px;
          color: #ffffff;
        }

        .business {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10%;

          :deep(.el-image) {
            width: 65px;
            height: 65px;
          }
        }
      }

      .center {
        width: 100%;
        height: 60%;
        margin-bottom: 20px;

        .center-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;

          .container-item {
            margin-bottom: 15px;

            .title {
              font-weight: 400;
              font-size: 12px;
              color: #999999;
            }

            .detail {
              font-weight: bold;
              font-size: 16px;
              color: #ffffff;
            }
          }
        }
      }

      .right {
        width: 100%;
        height: 60%;

        .right-container {
          width: 100%;
          display: flex;

          .left {
            width: 80%;
            display: flex;
            gap: 5%;

            .image-box {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-weight: 400;
              font-size: 12px;
              color: #ffffff;

              :deep(.el-image) {
                width: 90px;
                height: 90px;
                cursor: pointer;
              }

              .topic {
                margin-top: 10px;
                cursor: pointer;
              }
            }
          }

          .right {
            width: 20%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;

            .btn {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              background-color: #f3a7a4;
              border-radius: 4px;
              font-weight: 400;
              font-size: 12px;
              color: #ffffff;
              margin-bottom: 10px;
              cursor: pointer;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>
