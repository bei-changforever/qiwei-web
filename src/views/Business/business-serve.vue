<template>
  <div class="business-serve">
    <div class="business-serve-base-container">
      <div class="bussiness-container-top">
        <div class="title">为顾客提供的服务</div>
        <div class="desc">电商/微商/商超链锁/私域/跨境/院线/一站式代加工服务</div>
      </div>
      <div class="business-container-bottom" v-if="PAGEWIDTH > 960">
        <div class="business-container-bottom-item">
          <div class="item-top">
            <div class="number">01</div>
            <div class="bg">
              <img :src="getAssetsFile('images', '图片1.png')" alt="" />
            </div>
            <div class="mark">
              <img :src="getAssetsFile('images', '黑底1.png')" alt="" />
            </div>
          </div>
          <div class="item-bottom">
            <div class="bttom-title">OEM/ODM/OBM</div>
            <div class="bottom-desc">为品牌客户提供化妆品研发、设计、生产一站式定制加工服务。</div>
          </div>
        </div>
        <div class="business-container-bottom-item">
          <div class="item-bottom">
            <div class="bttom-title">来样加工</div>
            <div class="bottom-desc" style="white-space: nowrap;">
              定制客户提供样品，<br />
              我司为您研发定制， <br />
              让您轻松拥有大牌产品。
            </div>
          </div>
          <div class="item-top">
            <div class="number">02</div>
            <div class="bg">
              <img :src="getAssetsFile('images', '图片2.png')" alt="" />
            </div>
            <div class="mark">
              <img :src="getAssetsFile('images', '黑底2.png')" alt="" />
            </div>
          </div>
        </div>
        <div class="business-container-bottom-item">
          <div class="item-top">
            <div class="number">03</div>
            <div class="bg">
              <img :src="getAssetsFile('images', '图片3.png')" alt="" />
            </div>
            <div class="mark">
              <img :src="getAssetsFile('images', '黑底1.png')" alt="" />
            </div>
          </div>
          <div class="item-bottom">
            <div class="bttom-title">半成品加工</div>
            <div class="bottom-desc">
              为具有灌装和包装资源的客户提供产品研发及半成品 加工生产服务。
            </div>
          </div>
        </div>
        <div class="business-container-bottom-item">
          <div class="item-bottom">
            <div class="bttom-title">新品研发</div>
            <div class="bottom-desc">根据客户需求量身加工定制， 进行新产品研发、设计、生产。</div>
          </div>
          <div class="item-top">
            <div class="number">04</div>
            <div class="bg">
              <img :src="getAssetsFile('images', '图片4.png')" alt="" />
            </div>
            <div class="mark">
              <img :src="getAssetsFile('images', '黑底2.png')" alt="" />
            </div>
          </div>
        </div>
        <div class="business-container-bottom-item">
          <div class="item-top">
            <div class="number">05</div>
            <div class="bg">
              <img :src="getAssetsFile('images', '图片5.png')" alt="" />
            </div>
            <div class="mark">
              <img :src="getAssetsFile('images', '黑底1.png')" alt="" />
            </div>
          </div>
          <div class="item-bottom">
            <div class="bttom-title">爆款打造</div>
            <div class="bottom-desc">分析市场数据， 运用专业技术， 为客户打造当季潮流产品。</div>
          </div>
        </div>
      </div>
      <div class="mobile-container-bottom" v-else>
        <van-swipe class="my-swipe" :autoplay="3000">
          <van-swipe-item>
            <div class="business-container-bottom-item">
              <div class="item-top">
                <div class="number">01</div>
                <div class="bg">
                  <img :src="getAssetsFile('images', '图片1.png')" alt="" />
                </div>
                <div class="mark">
                  <img :src="getAssetsFile('images', '黑底1.png')" alt="" />
                </div>
              </div>
              <div class="item-bottom">
                <div class="bttom-title">OEM/ODM/OBM</div>
                <div class="bottom-desc">
                  为品牌客户提供化妆品研发、设计、生产一站式定制加工服务。
                </div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="business-container-bottom-item">
              <div class="item-bottom">
                <div class="bttom-title">来样加工</div>
                <div class="bottom-desc">
                  定制客户提供样品， 我司为您研发、定制， 让您轻松拥有大牌产品。
                </div>
              </div>
              <div class="item-top">
                <div class="number">02</div>
                <div class="bg">
                  <img :src="getAssetsFile('images', '图片2.png')" alt="" />
                </div>
                <div class="mark">
                  <img :src="getAssetsFile('images', '黑底2.png')" alt="" />
                </div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="business-container-bottom-item">
              <div class="item-top">
                <div class="number">03</div>
                <div class="bg">
                  <img :src="getAssetsFile('images', '图片3.png')" alt="" />
                </div>
                <div class="mark">
                  <img :src="getAssetsFile('images', '黑底1.png')" alt="" />
                </div>
              </div>
              <div class="item-bottom">
                <div class="bttom-title">半成品加工</div>
                <div class="bottom-desc">
                  为具有灌装和包装资源的客户提供产品研发及半成品加工生产服务。
                </div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="business-container-bottom-item">
              <div class="item-bottom">
                <div class="bttom-title">新品研发</div>
                <div class="bottom-desc">
                  根据客户需求量身加工定制， 进行新产品研发、设计、生产。
                </div>
              </div>
              <div class="item-top">
                <div class="number">04</div>
                <div class="bg">
                  <img :src="getAssetsFile('images', '图片4.png')" alt="" />
                </div>
                <div class="mark">
                  <img :src="getAssetsFile('images', '黑底2.png')" alt="" />
                </div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="business-container-bottom-item">
              <div class="item-top">
                <div class="number">05</div>
                <div class="bg">
                  <img :src="getAssetsFile('images', '图片5.png')" alt="" />
                </div>
                <div class="mark">
                  <img :src="getAssetsFile('images', '黑底1.png')" alt="" />
                </div>
              </div>
              <div class="item-bottom">
                <div class="bttom-title">爆款打造</div>
                <div class="bottom-desc">
                  分析市场数据， 运用专业技术， 为客户打造当季潮流产品。
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, toRefs, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())

const list = [
  {
    title: 'OEM/ODM/OBM',
    desc: '为品牌客户提供化妆品 研发、设计、生产一站式定制 加工服务。',
    src: getAssetsFile('images', '图片1.png')
  },
  {
    title: '来样加工',
    desc: '定制客户提供样品， 我司为您研发、定制， 让您轻松拥有大牌产品。',
    src: getAssetsFile('images', '图片2.png')
  },
  {
    title: '半成品加工',
    desc: '为具有灌装和包装资源 的客户提供产品研发及半成品 加工生产服务。',
    src: getAssetsFile('images', '图片3.png')
  },
  {
    title: '新品研发',
    desc: '根据客户需求量身加工定制， 进行新产品研发、设计、生产。',
    src: getAssetsFile('images', '图片4.png')
  },
  {
    title: '爆款打造',
    desc: '分析市场数据， 运用专业技术， 为客户打造当季潮流产品。',
    src: getAssetsFile('images', '图片5.png')
  }
]

const PAGEWIDTH = ref(window.innerWidth)
watch(
  () => screenWidth.value,
  (newVal, oldVal) => {
    PAGEWIDTH.value = newVal
  }
)
</script>
<style lang="scss" scoped>
.business-serve {
  width: 100vw;
  height: 100vh;
  padding-top: 15vh;

  .business-serve-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .bussiness-container-top {
      .title {
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 22px;
        color: #777777;
      }

      .desc {
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: bold;
        font-size: 42px;
        color: #333333;
      }
    }

    .business-container-bottom {
      width: 100%;
      display: flex;
      gap: 1vw;
      margin-top: 5vh;

      .business-container-bottom-item {
        width: 23%;
        height: 450px;
        background-color: white;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        border-radius: 0px 0px 8px 8px;
        box-shadow:
          rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;

        .item-top {
          width: 100%;
          height: 50%;
          position: relative;

          .bg {
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              height: 100%;
              object-fit: fill;
            }
          }

          .mark {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;

            img {
              width: 100%;
              height: 100%;
              object-fit: fill;
            }
          }

          .number {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 60px;
            color: #fffefe;
            z-index: 2;
          }
        }

        .item-bottom {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2vw;
          box-sizing: border-box;
          gap: 2vh;

          .bttom-title {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 24px;
            color: #333333;
          }

          .bottom-desc {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 18px;
            color: #777777;
            text-align: center;
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .business-serve {
    width: 100vw;
    height: auto;
    // padding-top: 10vh;
    padding: 0;
    .business-serve-base-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;

      padding: 2vh;
      box-sizing: border-box;

      .bussiness-container-top {
        .title {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 18px;
          color: #777777;
        }

        .desc {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: 14px;
          color: #333333;
          white-space: nowrap;
        }
      }

      .business-container-bottom {
        width: 100%;
        display: flex;
        gap: 1vw;
        margin-top: 5vh;

        .business-container-bottom-item {
          width: 23%;
          height: 350px;
          background-color: white;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          border-radius: 0px 0px 8px 8px;
          box-shadow:
            rgba(0, 0, 0, 0.16) 0px 3px 6px,
            rgba(0, 0, 0, 0.23) 0px 3px 6px;

          .item-top {
            width: 100%;
            height: 50%;
            position: relative;

            .bg {
              width: 100%;
              height: 100%;

              img {
                width: 100%;
                height: 100%;
                object-fit: fill;
              }
            }

            .mark {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;

              img {
                width: 100%;
                height: 100%;
                object-fit: fill;
              }
            }

            .number {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 60px;
              color: #fffefe;
              z-index: 2;
            }
          }

          .item-bottom {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2vw;
            box-sizing: border-box;
            gap: 2vh;

            .bttom-title {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 16px;
              color: #333333;
            }

            .bottom-desc {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 12px;
              color: #777777;
              text-align: center;
            }
          }
        }
      }

      .mobile-container-bottom {
        margin-top: 1vh;
        .business-container-bottom-item {
          width: 100%;
          height: 450px;
          background-color: white;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          border-radius: 8px 8px 8px 8px;

          .item-top {
            width: 100%;
            height: 50%;
            position: relative;

            .bg {
              width: 100%;
              height: 100%;

              img {
                width: 100%;
                height: 100%;
                object-fit: fill;
              }
            }

            .mark {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;

              img {
                width: 100%;
                height: 100%;
                object-fit: fill;
              }
            }

            .number {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 40px;
              color: #fffefe;
              z-index: 2;
            }
          }

          .item-bottom {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2vw;
            box-sizing: border-box;
            gap: 2vh;

            .bttom-title {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 16px;
              color: #333333;
            }

            .bottom-desc {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 12px;
              color: #777777;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
