<template>
  <div class="product-info">
    <div class="product-info-container" v-if="info">
      <div class="product-content">
        <div class="product-left" v-if="PAGEWIDTH > 960">
          <div class="big-image">
            <van-image :src="bigImage" lazy-load>
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
            <!-- <img :src="bigImage" alt="" /> -->
          </div>
          <div class="small-image-control">
            <div class="prev" @click.stop="prev">
              <el-icon>
                <ArrowLeft />
              </el-icon>
            </div>
            <div class="small-image">
              <div
                :class="['small-image-item', activeIndex == index ? 'active' : '']"
                v-for="(item, index) in info.thumb2"
                :key="index"
                @click.top="handleSelect(item, index)"
              >
                <van-image :src="item.url" lazy-load>
                  <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                  </template>
                </van-image>
                <!-- <img :src="item.url" alt="" /> -->
              </div>
            </div>
            <div class="next" @click.stop="next">
              <el-icon>
                <ArrowRight />
              </el-icon>
            </div>
          </div>
        </div>

        <div class="mobile-product-left" v-else>
          <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="(item, index) in info.thumb2" :key="index">
              <img :src="item.url" alt="" />
            </van-swipe-item>
          </van-swipe>
        </div>

        <div class="product-right">
          <div class="product-right-history">
            <!-- <div class="history-left">
              <div class="history-item">
                <img :src="getAssetsFile('icon', 'home.png')" alt="" />
                首页
              </div>
              <span>/</span>
              <div class="history-item">产品中心</div>
              <span>/</span>
              <div class="history-item">彩妆</div>
              <span>/</span>
              <div class="history-item">唇妆</div>
              <span>/</span>
              <div class="history-item">小精灵魅惑唇膏</div>
            </div> -->
            <div class="history-right" @click="goback">
              <img :src="getAssetsFile('icon', 'reback.png')" alt="" />
              返回上一页
            </div>
          </div>
          <div class="info">
            <div class="topic">{{ info.name }}</div>
            <div class="desc">
              {{ info.description }}
            </div>
          </div>
          <div class="product-right-bottom">
            <el-button class="liuyan" :icon="ChatLineRound" @click="liuyan">在线留言</el-button>

            <el-dropdown>
              <el-button class="share">
                <img :src="getAssetsFile('icon', 'share_pink.png')" alt="" /> 分享
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleClick('微信分享')">
                    <img :src="getAssetsFile('icon', '微信.png')" alt="" />
                    &nbsp; 微信分享
                  </el-dropdown-item>

                  <el-dropdown-item @click="handleClick('脸书分享')">
                    <img :src="getAssetsFile('icon', '脸书.png')" alt="" />
                    &nbsp; 脸书分享
                  </el-dropdown-item>

                  <el-dropdown-item @click="handleClick('推特分享')">
                    <img :src="getAssetsFile('icon', '推特.png')" alt="" />
                    &nbsp; 推特分享
                  </el-dropdown-item>
                  <el-dropdown-item @click="handleClick('照片墙分享')">
                    <img :src="getAssetsFile('icon', '照片墙.png')" alt="" />
                    &nbsp; 照片墙分享
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="pre-next">
        <div class="last" v-if="info.prev_product" @click="gotoProductInfobyid(info.prev_product)">
          上一个：{{ info.prev_product.name }}
        </div>
        <div
          class="n-next"
          v-if="info.next_product"
          @click="gotoProductInfobyid(info.next_product)"
        >
          下一个：{{ info.next_product.name }}
        </div>
      </div>
      <div class="product-fk">
        <div class="topic">
          <div class="border">产品详情</div>
        </div>
        <div class="job">
          <van-image v-for="item in info.thumb3" :src="item.url" lazy-load fit="fill">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>

          <!-- <el-image v-for="item in info.thumb3" :src="item.url" lazy  :fit="'fill'" /> -->
        </div>
      </div>
    </div>
  </div>

  <!-- 圆角弹窗（居中） -->
  <van-popup v-model:show="showCenter" round :style="{ padding: '5vh' }">
    <vue-qrcode :value="qrCodeValue" :width="200"></vue-qrcode>
  </van-popup>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
import { ChatLineRound, Share } from '@element-plus/icons-vue'
import { ref, toRefs, watch, onMounted } from 'vue'
import { getProductDetail } from '@/api/index'
import { useRouter, useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/screenWidth'
// import VueSocialSharing from 'vue-social-sharing'
const { screenWidth } = toRefs(useCounterStore())
const activeIndex = ref(0)
const router = useRouter()
const route = useRoute()
const showCenter = ref(false)

const qrCodeValue = ref(window.location.href)

const goback = () => {
  router.push('/product/product-detail')
}
const handleClick = (value) => {
  console.log(value)
  if (value == '微信分享') {
    showCenter.value = true
  }
  if (value == '照片墙分享') {
    const url = encodeURIComponent(window.location.href) // 替换为你的网站URL
    const shareUrl = `https://www.instagram.com/share?url=${url}`
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }
  if (value == '推特分享') {
    const url = encodeURIComponent(window.location.href) // 替换为你的网站URL
    const text = encodeURIComponent('这是一个很棒的网站！') // 分享的文本内容
    const hashtags = encodeURIComponent('奇伟') // 分享的标签
    const shareUrl = `https://twitter.com/share?url=${url}&text=${text}&hashtags=${hashtags}`
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }
  if (value == '脸书分享') {
    const url = encodeURIComponent(window.location.href) // 替换为你的网站URL
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }
}

const handleSelect = (item: any, index: number) => {
  activeIndex.value = index
  bigImage.value = item.url
}

const bigImage = ref('')
const liuyan = () => {
  router.push('/contact')
}
const prev = () => {
  if (activeIndex.value == 0) {
    activeIndex.value = info.value.thumb2.length
  } else {
    activeIndex.value--
  }
  bigImage.value = info.value.thumb2[activeIndex.value].url
}

const gotoProductInfobyid = (item) => {
  // console.log(item)

  const href = router.resolve({
    //使用resolve
    path: '/product/product-info',
    query: {
      id: item.id
    }
  })
  window.open(href.href, '_blank')
}

const next = () => {
  if (activeIndex.value == info.value.thumb2.length - 1) {
    activeIndex.value = 0
  } else {
    activeIndex.value++
  }
  bigImage.value = info.value.thumb2[activeIndex.value].url
}

const info = ref({}) as any

onMounted(() => {
  let id = route.query.id
  getProductDetail(id).then((res) => {
    // console.log(res)
    if (res.status == 1) {
      info.value = res.data
      bigImage.value = res.data.thumb
    }
  })
})

const PAGEWIDTH = ref(window.innerWidth)
//watch监听屏幕宽度的变化，进行侧边栏的收缩和展开
watch(
  () => screenWidth.value,
  (newVal, oldVal) => {
    PAGEWIDTH.value = newVal
  }
)
</script>
<style scoped lang="scss">
.product-info {
  width: 100vw;
  background-color: white;
  padding-top: 10vh;
  padding-bottom: 10vh;
  box-sizing: border-box;

  .product-info-container {
    width: var(--base-width);
    margin: 0 auto;
    // background-color: pink;

    .product-content {
      width: 100%;
      display: flex;
      gap: 5vw;

      .product-left {
        width: 480px;
        // background-color: orange;

        .big-image {
          width: 480px;
          height: 480px;
          border-radius: 20px;

          overflow: hidden;
          border: 1px solid #ebebeb;

          :deep(.van-image) {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            object-fit: fill;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            object-fit: fill;
          }
        }

        .small-image-control {
          margin-top: 2vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .prev {
            margin-right: 0.5vw;
            cursor: pointer;
          }

          .next {
            margin-left: 0.5vw;
            cursor: pointer;
          }

          .small-image {
            display: flex;
            align-items: center;
            gap: 0.7vw;

            .small-image-item {
              width: 70px;
              height: 70px;
              border-radius: 10px;
              border: 1px solid #ebebeb;
              overflow: hidden;

              &.active {
                border: 1px solid #f3a7a4;
              }

              :deep(.van-image) {
                width: 100%;
                height: 100%;
                object-fit: fill;
                cursor: pointer;
              }
              img {
                width: 100%;
                height: 100%;
                object-fit: fill;
                cursor: pointer;
              }
            }
          }
        }
      }

      .product-right {
        width: calc(100% - 480px);
        // background-color: orange;

        .product-right-history {
          width: 100%;
          height: 5vh;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed #f2f2f2;

          .history-left {
            width: 70%;
            display: flex;
            align-items: center;
            gap: 0.5vw;
            white-space: nowrap;

            .history-item {
              min-width: 2vw;
              white-space: nowrap;
              display: flex;
              align-items: center;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #999999;
              cursor: pointer;

              img {
                width: 14px;
                height: 14px;
                object-fit: fill;
                margin-right: 0.2vw;
              }
            }

            span {
              color: #999999;
            }
          }

          .history-right {
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #1d1d1d;
            gap: 0.5vw;
            cursor: pointer;
            img {
              width: 14px;
              height: 14px;
              object-fit: fill;
            }
          }
        }

        .info {
          margin-top: 5vh;
          width: 80%;

          .topic {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 24px;
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
            line-height: 31px;
          }
        }

        .product-right-bottom {
          width: 100%;
          display: flex;
          gap: 1vw;
          margin-top: 19vh;

          .liuyan {
            background-color: #f3a7a4;
            color: white;
            border-color: #f3a7a4;
            width: 124px;
            height: 48px;
          }

          .share {
            width: 90px;
            height: 48px;

            color: #f3a7a4;
            border-color: #f3a7a4;

            img {
              width: 14px;
              height: 14px;
              object-fit: fill;
              margin-right: 0.5vw;
            }
          }
        }
      }
    }

    .pre-next {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family:
        Microsoft YaHei,
        Microsoft YaHei;
      font-weight: 400;
      font-size: 14px;
      color: #999999;
      line-height: 0px;

      .last {
        cursor: pointer;
      }

      .n-next {
        cursor: pointer;
      }
    }

    .product-fk {
      width: 100%;

      .topic {
        width: 100%;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 16px;
        color: #f3a7a4;
        border-bottom: 2px solid #f2f2f2;
        .border {
          width: 80px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid #f3a7a4;
        }
      }

      .job {
        margin-top: 5vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
@media (min-width: 960px) and (max-width: 1220px) {
  .product-info {
    width: 100vw;
    background-color: white;
    padding-top: 10vh;
    padding-bottom: 10vh;
    box-sizing: border-box;

    .product-info-container {
      width: var(--base-width);
      margin: 0 auto;
      // background-color: pink;

      .product-content {
        width: 100%;
        display: flex;
        gap: 5vw;

        .product-left {
          width: 480px;
          // background-color: orange;

          .big-image {
            width: 480px;
            height: 480px;
            border-radius: 20px;

            overflow: hidden;
            border: 1px solid #ebebeb;
            img {
              width: 100%;
              height: 100%;
              border-radius: 20px;
              object-fit: fill;
            }
          }

          .small-image-control {
            margin-top: 2vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .prev {
              margin-right: 0.5vw;
              cursor: pointer;
            }

            .next {
              margin-left: 0.5vw;
              cursor: pointer;
            }

            .small-image {
              display: flex;
              align-items: center;
              gap: 0.7vw;

              .small-image-item {
                width: 70px;
                height: 70px;
                border-radius: 10px;
                border: 1px solid #ebebeb;
                overflow: hidden;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                }
              }
            }
          }
        }

        .product-right {
          width: calc(100% - 480px);
          // background-color: orange;

          .product-right-history {
            width: 100%;
            height: 5vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-bottom: 1px dashed #f2f2f2;
            // background-color: pink;

            .history-left {
              width: 100%;
              display: flex;
              align-items: center;
              gap: 0.5vw;
              white-space: nowrap;

              .history-item {
                min-width: 2vw;
                white-space: nowrap;
                display: flex;
                align-items: center;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 16px;
                color: #999999;

                img {
                  width: 14px;
                  height: 14px;
                  object-fit: fill;
                  margin-right: 0.2vw;
                }
              }

              span {
                color: #999999;
              }
            }

            .history-right {
              width: 30%;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #1d1d1d;
              gap: 0.5vw;

              img {
                width: 14px;
                height: 14px;
                object-fit: fill;
              }
            }
          }

          .info {
            margin-top: 5vh;
            width: 80%;

            .topic {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 24px;
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
              line-height: 31px;
            }
          }

          .product-right-bottom {
            width: 100%;
            display: flex;
            gap: 1vw;
            margin-top: 19vh;

            .liuyan {
              background-color: #f3a7a4;
              color: white;
              border-color: #f3a7a4;
              width: 124px;
              height: 48px;
            }

            .share {
              width: 90px;
              height: 48px;

              color: #f3a7a4;
              border-color: #f3a7a4;

              img {
                width: 14px;
                height: 14px;
                object-fit: fill;
                margin-right: 0.5vw;
              }
            }
          }
        }
      }

      .pre-next {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 14px;
        color: #999999;
        line-height: 0px;

        .last {
          cursor: pointer;
        }

        .n-next {
          cursor: pointer;
        }
      }

      .product-fk {
        width: 100%;

        .topic {
          width: 100%;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 16px;
          color: #f3a7a4;
          border-bottom: 2px solid #f2f2f2;
          .border {
            width: 80px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid #f3a7a4;
          }
        }

        .job {
          margin-top: 5vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
@media (max-width: 960px) {
  .product-info {
    width: 100vw;
    height: auto;
    background-color: white;
    // padding-top: 10vh;
    // padding-bottom: 10vh;
    padding: 0;
    box-sizing: border-box;

    .product-info-container {
      width: var(--base-width);
      margin: 0 auto;
      // background-color: pink;

      padding: 2vh;
      box-sizing: border-box;
      .product-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5vw;

        .product-left {
          width: 480px;
          // background-color: orange;

          .big-image {
            width: 480px;
            height: 480px;
            border-radius: 20px;

            overflow: hidden;
            border: 1px solid #ebebeb;
            img {
              width: 100%;
              height: 100%;
              border-radius: 20px;
              object-fit: fill;
            }
          }

          .small-image-control {
            margin-top: 2vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .prev {
              margin-right: 0.5vw;
              cursor: pointer;
            }

            .next {
              margin-left: 0.5vw;
              cursor: pointer;
            }

            .small-image {
              display: flex;
              align-items: center;
              gap: 0.7vw;

              .small-image-item {
                width: 70px;
                height: 70px;
                border-radius: 10px;
                border: 1px solid #ebebeb;
                overflow: hidden;

                &.active {
                  border: 1px solid #f3a7a4;
                }
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                  cursor: pointer;
                }
              }
            }
          }
        }

        .mobile-product-left {
          width: 100%;

          :deep(.van-swipe) {
            padding: 0;
            width: 100%;
          }
          :deep(.van-swipe-item) {
            padding: 0;
            width: 100%;
            border: 1px solid #ebebeb;
            border-radius: 20px;
            overflow: hidden;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: fill;
          }
        }

        .product-right {
          width: 100%;
          // background-color: orange;

          .product-right-history {
            width: 100%;
            height: 7vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-bottom: 1px dashed #f2f2f2;
            padding-bottom: 1vh;
            box-sizing: border-box;
            .history-left {
              width: 100%;
              display: flex;
              align-items: center;
              gap: 0.5vw;
              white-space: nowrap;

              .history-item {
                min-width: 2vw;
                white-space: nowrap;
                display: flex;
                align-items: center;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 16px;
                color: #999999;
                cursor: pointer;

                img {
                  width: 14px;
                  height: 14px;
                  object-fit: fill;
                  margin-right: 0.2vw;
                }
              }

              span {
                color: #999999;
              }
            }

            .history-right {
              width: 30%;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #1d1d1d;
              gap: 0.5vw;
              cursor: pointer;
              img {
                width: 14px;
                height: 14px;
                object-fit: fill;
              }
            }
          }

          .info {
            margin-top: 2vh;
            width: 100%;

            .topic {
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
              line-height: 31px;
            }
          }

          .product-right-bottom {
            width: 100%;
            display: flex;
            gap: 1vw;
            margin-top: 5vh;

            .liuyan {
              background-color: #f3a7a4;
              color: white;
              border-color: #f3a7a4;
              width: 124px;
              height: 48px;
            }

            .share {
              width: 90px;
              height: 48px;

              color: #f3a7a4;
              border-color: #f3a7a4;

              img {
                width: 14px;
                height: 14px;
                object-fit: fill;
                margin-right: 0.5vw;
              }
            }
          }
        }
      }

      .pre-next {
        width: 100%;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 14px;
        color: #999999;
        line-height: 0px;

        .last {
          cursor: pointer;
        }

        .n-next {
          cursor: pointer;
        }
      }

      .product-fk {
        width: 100%;

        .topic {
          width: 100%;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 16px;
          color: #f3a7a4;
          border-bottom: 2px solid #f2f2f2;
          .border {
            width: 80px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid #f3a7a4;
          }
        }

        .job {
          margin-top: 5vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
